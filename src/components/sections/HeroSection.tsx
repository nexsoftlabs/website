import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { HeroIllustration } from '@/components/sections/HeroIllustration'

const values = [
  'Strategy-led engineering',
  'Built for scalability',
  'Designed around your users',
]

export function HeroSection() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14">
      <div id="hero-scroll-sentinel" className="pointer-events-none absolute bottom-8 h-px w-full" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan-brand/90 uppercase">
              Software engineering · Digital innovation
            </p>
            <h1
              className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] font-semibold tracking-tight text-white"
            >
              Your next big idea.
              <br />
              <span className="text-gradient-brand">Built to scale.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              We partner with startups and growing businesses to design, build, and scale software
              that solves real problems and creates lasting value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Discuss Your Project</Button>
              <Button to="/services" variant="outline-light">Explore Our Services</Button>
            </div>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {values.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="hidden sm:block lg:pl-4">
            <HeroIllustration />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
