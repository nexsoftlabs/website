import { Reveal } from '@/components/ui/Reveal'

export interface StepperStep {
  title: string
  text: string
}

interface StepperProps {
  steps: StepperStep[]
  /** Accessible name for the sequence, for example "Engagement stages". */
  label: string
}

export function Stepper({ steps, label }: StepperProps) {
  const inset = `${50 / steps.length}%`

  return (
    <ol aria-label={label} className="relative mt-14 grid gap-0 lg:grid-cols-4 lg:gap-8">
      <span
        className="process-track process-track--horizontal hidden lg:block"
        style={{ top: '1.25rem', left: inset, right: inset }}
        aria-hidden="true"
      />
      <span
        className="process-flow-beam process-flow-beam--horizontal hidden lg:block"
        style={{ top: 'calc(1.25rem - 1px)', left: inset, right: inset }}
        aria-hidden="true"
      />
      {steps.map((step, i) => {
        const last = i === steps.length - 1
        return (
          <Reveal as="li" key={step.title} delay={0.06 * i} className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:pb-0">
            {!last && (
              <>
                <span
                  className="process-track process-track--vertical lg:hidden"
                  style={{ top: '2.5rem', bottom: 0, left: '1.25rem' }}
                  aria-hidden="true"
                />
                <span
                  className="process-flow-beam process-flow-beam--vertical lg:hidden"
                  style={{ top: '2.5rem', bottom: 0, left: 'calc(1.25rem - 1px)' }}
                  aria-hidden="true"
                />
              </>
            )}
            <span
              className="process-step-marker relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-corporate text-sm font-semibold text-white ring-4 ring-surface lg:mx-auto"
              style={{ animationDelay: `${i * 1.1}s` }}
            >
              {i + 1}
            </span>
            <div className="min-w-0 pt-1.5 lg:pt-6 lg:text-center">
              <p className="font-mono text-xs text-muted">Stage 0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-heading">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted lg:mx-auto lg:max-w-[28ch]">{step.text}</p>
            </div>
          </Reveal>
        )
      })}
    </ol>
  )
}
