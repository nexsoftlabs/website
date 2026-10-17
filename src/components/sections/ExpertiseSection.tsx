import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'

const FEATURED_SLUG = 'web-development'

function WorkflowMockup() {
  const columns = [
    { title: 'Requests', count: 12, cards: ['Supplier onboarding', 'Price change — EU'] },
    { title: 'In review', count: 4, cards: ['Contract renewal', 'New site access'], active: 0 },
    { title: 'Approved', count: 28, cards: ['Budget top-up Q3', 'Laptop refresh'] },
  ]

  return (
    <div className="[container-type:inline-size]">
      <div className="overflow-hidden rounded-[0.9em] bg-white text-[1.9cqw] text-[#0b1730] shadow-mockup">
        <div className="flex items-center gap-[1em] border-b border-[#e6ecf3] px-[1.4em] py-[1em]">
          <span className="text-[1.15em] font-semibold">Approvals</span>
          <span className="rounded-[0.4em] bg-[#f2f5f9] px-[0.6em] py-[0.15em] text-[0.85em] text-[#64748b]">
            Procurement
          </span>
          <span className="ml-auto rounded-[0.45em] bg-blue-corporate px-[0.9em] py-[0.35em] text-[0.85em] font-medium text-white">
            New request
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[1em] bg-[#f6f8fb] p-[1.2em]">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="flex items-center justify-between text-[0.85em] font-medium text-[#64748b]">
                {col.title}
                <span className="font-mono">{col.count}</span>
              </p>
              <div className="mt-[0.7em] space-y-[0.6em]">
                {col.cards.map((card, i) => (
                  <div
                    key={card}
                    className={`rounded-[0.6em] border bg-white p-[0.8em] ${
                      col.active === i ? 'border-blue-electric shadow-[0_0_0_3px_rgb(61_121_242/0.12)]' : 'border-[#e6ecf3]'
                    }`}
                  >
                    <p className="text-[0.9em] leading-snug font-medium">{card}</p>
                    <div className="mt-[0.6em] flex items-center justify-between">
                      <span className="h-[0.45em] w-[45%] rounded-full bg-[#e6ecf3]" />
                      <span className="grid h-[1.6em] w-[1.6em] place-items-center rounded-full bg-[#e8eefb] text-[0.65em] font-semibold text-blue-corporate">
                        {card.slice(0, 1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ExpertiseSection() {
  const featured = featuredServices.find((s) => s.slug === FEATURED_SLUG) ?? featuredServices[0]
  const others = featuredServices.filter((s) => s.slug !== featured.slug)

  return (
    <section id="services" className="section scroll-mt-24 bg-canvas" aria-labelledby="expertise-heading">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand">Expertise</p>
            <h2 id="expertise-heading" className="display-lg mt-5 text-balance text-heading">
              The expertise to take your product further.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="leading-relaxed text-muted">
              Six connected disciplines, so strategy, design, engineering and operations stay
              aligned from the first conversation to the latest release.
            </p>
            <Link
              to="/services"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14 lg:mt-20">
          <Link
            to={`/services/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl bg-navy-950 text-white lg:grid-cols-[1fr_1.05fr]"
          >
            <div className="flex flex-col p-8 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 text-blue-soft">
                <ServiceGlyph slug={featured.slug} className="h-7 w-7" />
                <span className="eyebrow">Featured capability</span>
              </div>
              <h3 className="display-md mt-8 text-balance">{featured.shortTitle}</h3>
              <p className="lede mt-4 max-w-md text-[#b8c5da]">{featured.summary}</p>
              <ul className="mt-8 grid gap-x-6 gap-y-3 text-[0.9375rem] text-[#d5deeb] sm:grid-cols-2">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-[0.6em] h-px w-3 shrink-0 bg-blue-electric" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white lg:mt-auto lg:pt-10">
                Explore web application development
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="relative hidden items-center bg-navy-900 px-6 py-10 sm:flex sm:px-10 lg:px-12" aria-hidden="true">
              <div className="w-full transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <WorkflowMockup />
              </div>
            </div>
          </Link>
        </Reveal>

        <ul className="mt-6 border-t border-hairline lg:mt-10">
          {others.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={0.05 * i} className="border-b border-hairline">
              <Link
                to={`/services/${service.slug}`}
                className="group grid gap-x-8 gap-y-2 py-7 transition-colors sm:grid-cols-[2.5rem_1fr_auto] md:py-8 lg:grid-cols-[2.5rem_minmax(0,22rem)_1fr_auto] lg:items-center"
              >
                <ServiceGlyph slug={service.slug} className="h-7 w-7 text-heading" />
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-heading group-hover:text-brand md:text-xl">
                  {service.shortTitle}
                </h3>
                <p className="leading-relaxed text-muted sm:col-start-2 lg:col-start-auto">{service.summary}</p>
                <ArrowUpRight
                  className="hidden h-5 w-5 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand sm:row-start-1 sm:block sm:col-start-3 lg:col-start-4"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
