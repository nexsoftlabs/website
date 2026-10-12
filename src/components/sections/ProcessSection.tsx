import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  { title: 'Discover', text: 'Understand the business problem, objectives, users, and constraints.' },
  { title: 'Define', text: 'Agree on scope, requirements, priorities, and success criteria.' },
  { title: 'Design', text: 'Shape user journeys, system architecture, and technical direction.' },
  { title: 'Build', text: 'Develop in manageable iterations with code reviews and quality checks.' },
  { title: 'Launch', text: 'Prepare deployment, testing, documentation, and handover.' },
  { title: 'Evolve', text: 'Improve the product based on feedback, performance, and changing needs.' },
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-surface-elevated">
      <Container>
        <Reveal>
          <SectionHeading
            title="A clear path from idea to impact."
            align="center"
          />
        </Reveal>
        <ol className="mt-14 grid gap-0 md:grid-cols-6 md:gap-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <li className="relative flex gap-4 pb-10 md:flex-col md:pb-0 md:text-center">
                {i < steps.length - 1 && (
                  <span
                    className="absolute top-5 left-[1.125rem] h-[calc(100%-1.25rem)] w-px bg-border-light md:hidden"
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-indigo-brand bg-surface-elevated text-sm font-semibold text-indigo-brand md:mx-auto"
                >
                  {i + 1}
                </span>
                <div className="md:mt-4">
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <span
                    className="absolute top-4 right-0 hidden h-px w-full translate-x-1/2 bg-border-light md:block"
                    style={{ width: 'calc(100% + 1rem)' }}
                    aria-hidden="true"
                  />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
