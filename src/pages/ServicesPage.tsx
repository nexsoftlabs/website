import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { serviceDetails } from '@/data/serviceDetails'
import { CTASection } from '@/components/sections/CTASection'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Seo } from '@/components/ui/Seo'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Software consulting and architecture, custom web applications, mobile apps, SaaS product engineering, AI workflow automation and cloud modernization."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="The expertise to take your product further."
        description="Six connected disciplines that cover the full life of a digital product, from the first architecture decision to the systems that keep it running."
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {featuredServices.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="inline-flex items-center gap-2 text-[#b8c5da] hover:text-white">
                <ServiceGlyph slug={s.slug} className="h-4 w-4 text-[#7d8fae]" />
                {s.shortTitle}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-surface" aria-label="All services">
        <Container>
          {featuredServices.map((service, i) => {
            const detail = serviceDetails[service.slug]
            return (
              <Reveal
                as="article"
                key={service.slug}
                className={`grid gap-8 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20 ${i > 0 ? 'border-t border-hairline' : ''}`}
              >
                <div id={service.slug} className="scroll-mt-28 lg:col-span-4">
                  <p className="font-mono text-xs text-muted">0{i + 1}</p>
                  <ServiceGlyph slug={service.slug} className="mt-6 h-9 w-9 text-heading" />
                  <h2 className="display-md mt-5 text-heading">{service.shortTitle}</h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="lede text-body">{detail?.headline ?? service.summary}</p>
                  <p className="mt-4 leading-relaxed text-muted">{service.summary}</p>
                  <h3 className="eyebrow mt-8 text-muted">Typical capabilities</h3>
                  <ul className="mt-4 grid gap-x-6 gap-y-2.5 text-[0.9375rem] text-body sm:grid-cols-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-[0.7em] h-px w-3 shrink-0 bg-blue-corporate" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-between gap-8 lg:col-span-3">
                  {detail && (
                    <div>
                      <h3 className="eyebrow text-muted">Often right for</h3>
                      <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-body">
                        {detail.audience.map((a) => (
                          <li key={a.title}>{a.title}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                  >
                    Explore {service.shortTitle}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </Container>
      </section>

      <CTASection
        title="Not sure where to start?"
        text="Most projects span more than one discipline. Describe the problem in your own words and we will suggest a practical first step."
        ctaLabel="Describe Your Project"
      />
    </>
  )
}
