import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    num: '01',
    title: 'Understand the problem',
    text: 'Start with business goals, users, constraints, and measurable outcomes.',
  },
  {
    num: '02',
    title: 'Design before overbuilding',
    text: 'Choose an appropriate solution and avoid unnecessary complexity.',
  },
  {
    num: '03',
    title: 'Engineer for the future',
    text: 'Prioritize maintainability, security, reliability, and scalability.',
  },
  {
    num: '04',
    title: 'Deliver with clarity',
    text: 'Communicate decisions, progress, trade-offs, and next steps transparently.',
  },
]

export function WhySection() {
  return (
    <section className="section-padding border-y border-border-light bg-surface-page">
      <Container>
        <Reveal>
          <SectionHeading title="Good software starts with the right questions." />
        </Reveal>
        <ol className="mt-12 divide-y divide-border-light border-y border-border-light">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.05}>
              <li className="grid gap-4 py-8 md:grid-cols-[5rem_1fr] md:gap-8">
                <span className="text-sm font-semibold tracking-widest text-indigo-brand">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-muted leading-relaxed">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
