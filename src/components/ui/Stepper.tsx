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
        className="absolute top-5 hidden h-px bg-blue-corporate/25 lg:block"
        style={{ left: inset, right: inset }}
        aria-hidden="true"
      />
      {steps.map((step, i) => {
        const last = i === steps.length - 1
        return (
          <Reveal as="li" key={step.title} delay={0.06 * i} className="relative flex gap-5 pb-10 last:pb-0 lg:block lg:pb-0">
            {!last && (
              <span
                className="absolute top-10 bottom-0 left-5 w-px -translate-x-1/2 bg-blue-corporate/25 lg:hidden"
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-corporate text-sm font-semibold text-white ring-4 ring-surface lg:mx-auto">
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
