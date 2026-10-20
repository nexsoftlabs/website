import type { LucideIcon } from 'lucide-react'
import { HoverLiftCard } from '@/components/ui/HoverLiftCard'

interface FeatureCardProps {
  icon: LucideIcon
  /** Zero-based position, shown as a faint 01, 02, 03 in the corner. */
  index: number
  title: string
  text: string
}

/** Icon tile, step badge, title and text with synchronized micro-interactions on hover. */
export function FeatureCard({ icon: Icon, index, title, text }: FeatureCardProps) {
  return (
    <HoverLiftCard className="border-l-2 border-l-blue-corporate/25 pl-0">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.6875rem] font-medium tracking-[0.14em] text-muted uppercase transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:text-brand">
          Step 0{index + 1}
        </p>
        <span
          aria-hidden="true"
          className="font-mono text-xs font-semibold text-hairline transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-x-0.5 group-hover/card:text-brand/40"
        >
          0{index + 1}
        </span>
      </div>
      <span className="relative mt-5 grid size-11 place-items-center rounded-lg bg-surface-sunken text-brand ring-1 ring-hairline transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:-translate-y-0.5 group-hover/card:scale-105 group-hover/card:bg-brand group-hover/card:text-white group-hover/card:shadow-[0_8px_20px_-6px_rgb(23_70_162/0.45)] group-hover/card:ring-brand">
        <Icon
          className="size-5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </span>
      <h3 className="card-title relative mt-5 text-lg! font-semibold text-heading transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:text-brand">
        {title}
      </h3>
      <p className="relative mt-2 text-[0.9375rem] leading-relaxed text-muted transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:text-body">
        {text}
      </p>
    </HoverLiftCard>
  )
}
