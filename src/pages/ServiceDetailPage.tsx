import { ArrowRight, ArrowUpRight, Lightbulb, Target, Users } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { featuredServices, getServiceBySlug } from '@/data/services'
import { legacyServiceRedirects, serviceDetails } from '@/data/serviceDetails'
import { showcaseTabs } from '@/data/showcase'
import { ConceptMockup } from '@/components/mockups/ConceptMockups'
import { CTASection } from '@/components/sections/CTASection'
import { FaqStructuredData } from '@/components/sections/FAQSection'
import { ConceptLabel } from '@/components/sections/ShowcaseSection'
import { Accordion } from '@/components/ui/Accordion'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { HoverLiftCard } from '@/components/ui/HoverLiftCard'
import { Stepper } from '@/components/ui/Stepper'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Seo } from '@/components/ui/Seo'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'
import { NotFoundPage } from '@/pages/NotFoundPage'

const audienceIcons = [Users, Target, Lightbulb]

export function ServiceDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>()
  const redirect = legacyServiceRedirects[slug]
  if (redirect) return <Navigate to={redirect} replace />

  const service = getServiceBySlug(slug)
  const detail = service ? serviceDetails[service.slug] : undefined
  if (!service || !detail) return <NotFoundPage />

  const concept = showcaseTabs.find((t) => t.relatedService === service.slug)
  const others = featuredServices.filter((s) => s.slug !== service.slug)

  return (
    <>
      <Seo title={service.shortTitle} description={service.summary} path={`/services/${service.slug}`} />
      <FaqStructuredData items={detail.faqs} />

      <PageHero
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.shortTitle }]}
        eyebrow={service.shortTitle}
        title={detail.headline}
        description={detail.intro}
        aside={
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <ServiceGlyph slug={service.slug} className="h-8 w-8 text-blue-soft" />
            <p className="mt-6 text-sm font-semibold text-white">What you can expect</p>
            <ul className="mt-4 space-y-3 text-[0.9375rem] text-[#d5deeb]">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3">
                  <span className="mt-[0.65em] h-px w-3 shrink-0 bg-blue-electric" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to={`/contact?service=${service.slug}`} size="lg" variant="light" arrow>
            Discuss Your Project
          </Button>
          <Button to="/services" size="lg" variant="outline-light">
            All services
          </Button>
        </div>
      </PageHero>

      <section className="section bg-surface" aria-labelledby="audience-heading">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand">Who it’s for</p>
            <h2 id="audience-heading" className="display-md mt-4 text-heading">
              Built for teams in situations like these.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {detail.audience.map((a, i) => (
              <Reveal as="li" key={a.title} delay={0.06 * i} className="h-full">
                <FeatureCard icon={audienceIcons[i % audienceIcons.length]} index={i} title={a.title} text={a.text} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section bg-canvas" aria-label="Problems and capabilities">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="display-md text-heading">Problems we help solve</h2>
              <ol className="mt-8 border-t border-hairline">
                {detail.problems.map((p, i) => (
                  <li key={p} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-hairline py-5 text-body">
                    <span className="font-mono text-xs leading-7 text-muted">0{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-md text-heading">Typical capabilities</h2>
              <ul className="mt-8 border-t border-hairline">
                {service.highlights.map((h) => (
                  <li key={h} className="flex gap-4 border-b border-hairline py-5 text-body">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-blue-corporate" aria-hidden="true">
                      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="engagement-heading">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand">How an engagement runs</p>
            <h2 id="engagement-heading" className="display-md mt-4 text-heading">
              Four clear stages, agreed before we start.
            </h2>
          </Reveal>
          <Stepper steps={detail.process} label="Engagement stages" />
        </Container>
      </section>

      {concept && (
        <section className="section bg-canvas" aria-labelledby="concept-heading">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <Reveal className="lg:col-span-5">
                <ConceptLabel />
                <h2 id="concept-heading" className="display-md mt-6 text-heading">
                  {concept.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{concept.description}</p>
                <Link
                  to={`/work#${concept.id}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                >
                  Read the full concept study
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-7">
                <div className="mockup-stage" aria-hidden="true">
                  <ConceptMockup id={concept.id} />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      <section className="section bg-surface" aria-labelledby="service-faq-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 id="service-faq-heading" className="display-md text-heading">
                Common questions
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <Accordion items={detail.faqs} defaultOpen={0} />
            </Reveal>
          </div>

          <div className="mt-24">
            <h2 className="eyebrow text-muted">Related services</h2>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
              Most engagements draw on more than one of these. Explore a neighbouring discipline.
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {others.map((s) => (
                <li key={s.slug} className="h-full">
                  <Link to={`/services/${s.slug}`} className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-corporate">
                    <HoverLiftCard compact>
                      <span className="grid size-10 place-items-center rounded-lg bg-blue-corporate/8 text-brand">
                        <ServiceGlyph slug={s.slug} className="size-5" />
                      </span>
                      <h3 className="card-title mt-4 text-base! leading-snug text-heading">{s.shortTitle}</h3>
                      <p className="line-clamp-3 text-sm leading-relaxed text-muted">{s.summary}</p>
                      <div className="card-actions mt-2">
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
                          Explore
                          <ArrowUpRight
                            className="size-4 transition-transform duration-300 ease-out group-hover/card:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </HoverLiftCard>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let’s talk about your project."
        text="Share what you are working on and where you want to get to. We’ll respond with thoughtful questions and a practical suggestion for the next step."
      />
    </>
  )
}
