import type { ReactNode } from 'react'

interface HoverLiftCardProps {
  children: ReactNode
  className?: string
  /** Tighter padding for dense grids such as related services. */
  compact?: boolean
}

/**
 * FlyonUI card with a smooth lift, soft top highlight and ambient glow on hover.
 * @see https://flyonui.com/docs/components/card/
 */
export function HoverLiftCard({ children, className = '', compact = false }: HoverLiftCardProps) {
  return (
    <article
      className={[
        'group/card card card-border hover-lift-card relative h-full overflow-hidden bg-surface! text-body!',
        compact ? 'card-sm' : 'card-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Subtle top-edge accent bar that reveals on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand via-blue-electric to-blue-soft/60 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-x-100 group-hover/card:opacity-100"
      />
      {/* Soft radial glow in the top-right corner on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full bg-blue-electric/[0.06] opacity-0 blur-2xl transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:opacity-100"
      />
      <div className="card-body relative z-10">{children}</div>
    </article>
  )
}
