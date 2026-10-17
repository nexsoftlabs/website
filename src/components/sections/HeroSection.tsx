import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { useRegisterDarkHero } from '@/lib/heroVisibility'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'
import { ProductEcosystem, ProductEcosystemCompact } from '@/components/mockups/ProductMockup'

const capabilityLabels: Record<string, string> = {
  'software-consulting': 'Architecture',
  'web-development': 'Web platforms',
  'mobile-app-development': 'Mobile apps',
  'saas-development': 'SaaS products',
  'ai-automation': 'AI workflows',
  'cloud-modernization': 'Cloud & APIs',
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  useRegisterDarkHero(ref)

  return (
    <section ref={ref} className="bg-navy-radial relative isolate overflow-hidden text-white">
      <Container className="pt-14 pb-14 sm:pt-20 lg:pt-24 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <div className="max-w-[40rem]">
            <p className="eyebrow motion-safe:motion-opacity-in-0 motion-duration-700 text-blue-soft">
              Software engineering &amp; digital product development
            </p>
            <h1 className="display-xl mt-6 text-balance text-white lg:text-wrap lg:max-xl:text-[2.875rem]">
              <span className="lg:block">We engineer</span>{' '}
              <span className="lg:block">software that moves</span>{' '}
              <span className="lg:block">business forward.</span>
            </h1>
            <p className="lede motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[10px] motion-duration-700 motion-delay-100 mt-6 max-w-[34rem] text-pretty text-[#b8c5da]">
              From ambitious product ideas to complex business platforms, we design, build and
              modernize software with clarity, care and engineering discipline.
            </p>
            <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[10px] motion-duration-700 motion-delay-200 mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" size="lg" variant="light" arrow>
                Discuss Your Project
              </Button>
              <Button to="/services" size="lg" variant="outline-light">
                Explore Our Expertise
              </Button>
            </div>
            <p className="motion-safe:motion-opacity-in-0 motion-duration-700 motion-delay-300 mt-7 text-sm text-[#8fa0ba]">
              Strategy-led. Built to scale. Designed for real users.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            <div className="hidden sm:block" aria-hidden="true">
              <ProductEcosystem />
            </div>
            <div className="sm:hidden" aria-hidden="true">
              <ProductEcosystemCompact />
            </div>
            <figcaption className="mt-5 flex items-center gap-2 text-xs text-[#8fa0ba] sm:justify-end">
              <span className="h-px w-6 bg-white/25" aria-hidden="true" />
              Illustrative product concept — an operations dashboard, field app and the platform
              that connects them.
            </figcaption>
          </figure>
        </div>
      </Container>

      <div className="border-t border-white/[0.08]">
        <Container>
          <nav aria-label="What we build">
            <ul className="-mx-2 flex snap-x gap-1 overflow-x-auto py-4 [scrollbar-width:none] lg:justify-between lg:overflow-visible [&::-webkit-scrollbar]:hidden">
              {featuredServices.map((service) => (
                <li key={service.slug} className="shrink-0 snap-start">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex min-h-11 items-center gap-2.5 rounded-md px-2 text-sm text-[#b8c5da] transition-colors hover:text-white"
                  >
                    <ServiceGlyph slug={service.slug} className="h-5 w-5 text-[#7d8fae]" />
                    {capabilityLabels[service.slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </section>
  )
}
