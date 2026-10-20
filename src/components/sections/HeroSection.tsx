import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { useRegisterDarkHero } from '@/lib/heroVisibility'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'
import { StaggerText } from '@/components/motion/StaggerText'
import { HeroAIField } from '@/components/sections/HeroAIField'
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
    <section ref={ref} className="hero-ambient bg-navy-radial relative isolate overflow-hidden text-white">
      <HeroAIField />
      <Container className="relative z-10 pt-14 pb-14 sm:pt-20 lg:pt-24 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <div className="max-w-[40rem]">
            <div className="motion-safe:motion-opacity-in-0 motion-duration-700 flex flex-col gap-3">
              <span className="hero-ai-chip inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-soft/25 bg-white/[0.06] px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.12em] text-blue-soft uppercase">
                <span className="hero-ai-chip-dot size-1.5 rounded-full bg-blue-electric" aria-hidden="true" />
                AI workflows
              </span>
              <p className="eyebrow-rule text-blue-soft">Software engineering consultancy</p>
            </div>
            <StaggerText
              as="h1"
              delay={0.12}
              className="display-xl mt-2 text-balance text-white lg:max-xl:text-[2.75rem]"
            >
              We engineer software that moves business forward.
            </StaggerText>
            <p className="lede motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[10px] motion-duration-700 motion-delay-100 mt-7 max-w-[32rem] text-pretty text-[#c5d0e0]">
              We partner with leadership teams to design, build and modernize web platforms, mobile
              products and cloud systems—with clear scope, accountable delivery and architecture you
              can stand behind.
            </p>
            <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[10px] motion-duration-700 motion-delay-200 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" size="lg" variant="light" arrow>
                Discuss your project
              </Button>
              <Button to="/services" size="lg" variant="outline-light">
                View capabilities
              </Button>
            </div>
            <ul className="motion-safe:motion-opacity-in-0 motion-duration-700 motion-delay-300 mt-10 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/[0.08] pt-8 text-[0.8125rem] font-medium tracking-wide text-[#94a3be]">
              {[
                'Architecture-led engagements',
                'Web, mobile, SaaS & cloud',
                'Transparent trade-offs',
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline" aria-hidden="true" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            <div className="hidden sm:block" aria-hidden="true">
              <ProductEcosystem />
            </div>
            <div className="sm:hidden" aria-hidden="true">
              <ProductEcosystemCompact />
            </div>
            <figcaption className="mt-5 max-w-md text-xs leading-relaxed text-[#8fa0ba] sm:ml-auto sm:text-right">
              Representative product surfaces—operations, field teams and shared platform services.
            </figcaption>
          </figure>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/[0.08]">
        <Container>
          <nav aria-label="What we build">
            <ul className="-mx-2 flex snap-x gap-1 overflow-x-auto py-4 [scrollbar-width:none] lg:justify-between lg:overflow-visible [&::-webkit-scrollbar]:hidden">
              {featuredServices.map((service) => (
                <li key={service.slug} className="shrink-0 snap-start">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex min-h-11 items-center gap-2.5 rounded-full border border-transparent px-3.5 text-sm text-[#b8c5da] transition-colors hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                  >
                    <ServiceGlyph slug={service.slug} className="h-4 w-4 text-[#8fa0ba]" />
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
