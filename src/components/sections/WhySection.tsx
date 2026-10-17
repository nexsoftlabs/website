import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const principles = [
  {
    title: 'Business-first decisions',
    text: 'Features are prioritized by the value they create, and we will say so when something is not worth building yet.',
  },
  {
    title: 'Maintainable architecture',
    text: 'Clear structure, sensible boundaries and tests that make change safe, so your next release is not harder than the last.',
  },
  {
    title: 'Collaborative delivery',
    text: 'Your stakeholders see progress early and often. Feedback shapes the product while it is still cheap to change.',
  },
  {
    title: 'Honest trade-offs',
    text: 'Every significant decision comes with its options, costs and risks written down, so you are never surprised later.',
  },
]

function DecisionRecord() {
  return (
    <div className="[container-type:inline-size]">
      <div className="rounded-xl bg-white text-[1.55cqw] text-[#0b1730] shadow-mockup">
        <div className="flex items-center justify-between border-b border-[#e6ecf3] px-[2em] py-[1.3em]">
          <div className="flex items-center gap-[0.8em]">
            <span className="font-mono text-[0.95em] text-[#64748b]">ADR-014</span>
            <span className="rounded-[0.4em] bg-[#e3f4ec] px-[0.6em] py-[0.15em] text-[0.85em] font-medium text-[#0f7a4f]">
              Accepted
            </span>
          </div>
          <span className="text-[0.9em] text-[#94a3b8]">Architecture decision record</span>
        </div>
        <div className="space-y-[1.6em] px-[2em] py-[1.8em]">
          <div>
            <p className="text-[0.85em] font-medium tracking-[0.12em] text-[#64748b] uppercase">Decision</p>
            <p className="mt-[0.4em] text-[1.6em] leading-snug font-semibold tracking-[-0.015em]">
              Launch as a modular monolith; split services only when load demands it.
            </p>
          </div>
          <div>
            <p className="text-[0.85em] font-medium tracking-[0.12em] text-[#64748b] uppercase">Options considered</p>
            <div className="mt-[0.8em] grid grid-cols-3 gap-[0.8em] text-[0.95em]">
              {[
                { name: 'Microservices', note: 'Flexible, but slows a small team', chosen: false },
                { name: 'Modular monolith', note: 'One deploy, clear module boundaries', chosen: true },
                { name: 'Low-code platform', note: 'Fast start, limits later', chosen: false },
              ].map((o) => (
                <div
                  key={o.name}
                  className={`rounded-[0.7em] border p-[0.9em] ${
                    o.chosen ? 'border-blue-corporate bg-[#f3f7fe]' : 'border-[#e6ecf3]'
                  }`}
                >
                  <p className="font-semibold">{o.name}</p>
                  <p className="mt-[0.3em] leading-snug text-[#64748b]">{o.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[1.6em] text-[0.95em]">
            <div>
              <p className="text-[0.9em] font-medium tracking-[0.12em] text-[#0f7a4f] uppercase">We gain</p>
              <ul className="mt-[0.6em] space-y-[0.4em] text-[#24334b]">
                <li>Faster delivery for the first release</li>
                <li>Lower hosting and operations cost</li>
              </ul>
            </div>
            <div>
              <p className="text-[0.9em] font-medium tracking-[0.12em] text-[#9a5b00] uppercase">We accept</p>
              <ul className="mt-[0.6em] space-y-[0.4em] text-[#24334b]">
                <li>Scaling is per application, not per module</li>
                <li>Revisit when traffic grows significantly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WhySection() {
  return (
    <section className="section bg-navy-radial text-white" aria-labelledby="why-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-blue-soft">Why NexSoft Labs</p>
              <h2 id="why-heading" className="display-lg mt-5 text-balance">
                Thoughtful engineering. Practical outcomes.
              </h2>
              <p className="lede mt-6 text-[#b8c5da]">
                We work the way a good in-house technical lead would: protecting your budget, telling
                you what we would do in your position and leaving behind software that is easy to
                own.
              </p>
            </Reveal>
            <dl className="mt-12 space-y-8">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={0.06 * i} className="border-t border-white/12 pt-6">
                  <dt className="text-lg font-semibold tracking-[-0.01em]">{p.title}</dt>
                  <dd className="mt-2 leading-relaxed text-[#b8c5da]">{p.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7 lg:col-start-6 lg:pl-8">
            <figure className="lg:sticky lg:top-28">
              <div aria-hidden="true">
                <DecisionRecord />
              </div>
              <figcaption className="mt-5 max-w-lg text-sm leading-relaxed text-[#8fa0ba]">
                An example of how we document decisions. Each significant choice is recorded with
                its alternatives and consequences, so your team inherits the reasoning, not just
                the code.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
