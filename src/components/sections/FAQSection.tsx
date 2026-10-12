import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '@/data/faq'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-surface-elevated">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading title="Questions worth asking." align="center" />
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const open = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <Reveal key={item.question} delay={index * 0.03}>
                <div className="rounded-2xl border border-border-light bg-surface-inset">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      {item.question}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-5 pb-4 text-sm leading-relaxed text-muted"
                  >
                    {item.answer}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
