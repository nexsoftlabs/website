import { Compass, Layers, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Reveal } from '@/components/ui/Reveal'

const pillars = [
  {
    icon: Compass,
    title: 'Understand the business',
    text: 'We start with how your organization works today, where it loses time or revenue, and what success needs to look like. Scope follows from that, not the other way round.',
  },
  {
    icon: Layers,
    title: 'Engineer with purpose',
    text: 'Every architectural choice is made against your constraints: budget, team, timeline and risk. We explain the trade-offs in plain language so decisions stay yours.',
  },
  {
    icon: Rocket,
    title: 'Build for what comes next',
    text: 'Clean boundaries, automated tests and documentation mean the software can be extended by us, your team or both, without starting over.',
  },
]

export function BusinessValueSection() {
  return (
    <section className="section bg-surface" aria-labelledby="business-value-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-brand">Our perspective</p>
            <h2 id="business-value-heading" className="display-lg mt-5 text-balance text-heading">
              Technology should solve business problems—not create new ones.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <p className="lede text-pretty text-body">
              Too many software projects ship late, cost more than planned or leave behind systems
              no one wants to touch. NexSoft Labs brings product thinking, sound architecture and
              dependable delivery together, so what we build keeps paying back long after launch.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-24 lg:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={0.08 * i} className="h-full">
              <FeatureCard icon={pillar.icon} index={i} title={pillar.title} text={pillar.text} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
