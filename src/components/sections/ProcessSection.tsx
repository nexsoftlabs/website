import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const processStages = [
  {
    title: 'Discover',
    duration: 'Understand first',
    text: 'We interview the people who will use and fund the software, map today’s workflow and agree what success means in measurable terms.',
    outputs: ['Problem statement & goals', 'Scope options with trade-offs', 'Risks and open questions'],
  },
  {
    title: 'Design',
    duration: 'Before code is written',
    text: 'User journeys, interface prototypes and the system architecture are shaped together, so what is easy to use is also sensible to build.',
    outputs: ['Clickable prototype', 'Architecture & data model', 'Phased delivery plan'],
  },
  {
    title: 'Engineer',
    duration: 'Iterative releases',
    text: 'Short cycles with a working demo at the end of each. Code review, automated tests and a staging environment are standard, not extras.',
    outputs: ['Regular demos & progress notes', 'Tested, reviewed code', 'Production deployment'],
  },
  {
    title: 'Evolve',
    duration: 'After launch',
    text: 'We hand over documentation and access, then keep improving from real usage, whether alongside your team or as your ongoing engineering partner.',
    outputs: ['Handover & documentation', 'Monitoring & support options', 'Roadmap for what comes next'],
  },
]

export function ProcessSection() {
  return (
    <section className="section bg-canvas" aria-labelledby="process-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow-rule text-brand">How we work</p>
            <h2 id="process-heading" className="display-lg mt-2 text-balance text-heading">
              Clarity at every stage.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="leading-relaxed text-muted">
              You always know what is being built, why, and what happens next: written updates,
              open decisions and working software you can see at the end of every cycle.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-12 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          <span
            className="process-track process-track--horizontal hidden lg:block"
            aria-hidden="true"
          />
          <span
            className="process-flow-beam process-flow-beam--horizontal hidden lg:block"
            aria-hidden="true"
          />
          <span className="process-track process-track--vertical lg:hidden" aria-hidden="true" />
          <span
            className="process-flow-beam process-flow-beam--vertical lg:hidden"
            aria-hidden="true"
          />
          {processStages.map((stage, i) => (
            <Reveal as="li" key={stage.title} delay={i * 0.08} className="relative pl-12 lg:pl-0">
              <span
                className="process-step-marker absolute top-0 left-0 grid h-[23px] w-[23px] place-items-center rounded-full border border-heading bg-canvas"
                style={{ animationDelay: `${i * 1.1}s` }}
                aria-hidden="true"
              >
                <span
                  className="process-step-marker-dot h-[7px] w-[7px] rounded-full bg-blue-corporate"
                  style={{ animationDelay: `${i * 1.1}s` }}
                />
              </span>
              <div className="lg:pt-12">
                <p className="font-mono text-xs tracking-wider text-muted">
                  0{i + 1} — {stage.duration}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-heading">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-[36ch] leading-relaxed text-muted">{stage.text}</p>
                <ul className="mt-6 space-y-2 border-t border-hairline pt-5 text-sm text-body">
                  {stage.outputs.map((o) => (
                    <li key={o} className="flex gap-2.5">
                      <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-blue-corporate" aria-hidden="true">
                        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
