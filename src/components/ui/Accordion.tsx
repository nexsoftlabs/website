import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import type { FaqItem } from '@/types'

interface AccordionProps {
  items: FaqItem[]
  defaultOpen?: number | null
  tone?: 'light' | 'dark'
}

export function Accordion({ items, defaultOpen = null, tone = 'light' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)
  const baseId = useId()
  const dark = tone === 'dark'

  return (
    <div className={`border-t ${dark ? 'border-white/12' : 'border-hairline'}`}>
      {items.map((item, index) => {
        const open = openIndex === index
        const buttonId = `${baseId}-q${index}`
        const panelId = `${baseId}-a${index}`
        return (
          <div key={item.question} className={`border-b ${dark ? 'border-white/12' : 'border-hairline'}`}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className={`flex w-full items-start justify-between gap-6 py-6 text-left text-lg font-medium tracking-[-0.01em] transition-colors ${
                  dark ? 'text-white hover:text-blue-soft' : 'text-heading hover:text-brand'
                }`}
              >
                {item.question}
                <Plus
                  className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''} ${
                    dark ? 'text-blue-soft' : 'text-muted'
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              inert={!open}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-3xl pr-10 pb-6 leading-relaxed transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                  } ${dark ? 'text-[#b8c5da]' : 'text-muted'}`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
