import type { LucideIcon } from 'lucide-react'
import { HoverLiftCard } from '@/components/ui/HoverLiftCard'

interface FeatureCardProps {
  icon: LucideIcon
  /** Zero-based position, shown as a faint 01, 02, 03 in the corner. */
  index: number
  title: string
  text: string
}

/** Icon tile, faint number, title and text on the shared FlyonUI hover card. */
export function FeatureCard({ icon: Icon, index, title, text }: FeatureCardProps) {
  return (
    <HoverLiftCard>
      <span
        className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full bg-blue-electric/10 opacity-70 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-5 right-6 font-mono text-5xl font-semibold tracking-tighter text-heading/[0.06] select-none"
        aria-hidden="true"
      >
        0{index + 1}
      </span>
      <span className="relative grid size-12 place-items-center rounded-xl bg-blue-corporate/10 text-brand ring-1 ring-blue-corporate/15 transition-colors duration-500 group-hover/card:bg-blue-corporate group-hover/card:text-white">
        <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3 className="card-title relative mt-6 text-xl! text-heading">{title}</h3>
      <p className="relative mt-1 leading-relaxed text-muted">{text}</p>
    </HoverLiftCard>
  )
}
