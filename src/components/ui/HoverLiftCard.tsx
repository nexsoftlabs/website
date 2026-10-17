import type { ReactNode } from 'react'

interface HoverLiftCardProps {
  children: ReactNode
  className?: string
  /** Tighter padding for dense grids such as related services. */
  compact?: boolean
}

/**
 * FlyonUI card with a quiet hover shadow.
 * @see https://flyonui.com/docs/components/card/
 */
export function HoverLiftCard({ children, className = '', compact = false }: HoverLiftCardProps) {
  return (
    <article
      className={[
        'group/card card card-border hover-lift-card h-full overflow-hidden bg-surface! text-body!',
        compact ? 'card-sm' : 'card-md',
        'motion-duration-500 motion-ease-spring-smooth',
        'hover:motion-translate-y-out-[-2px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="card-body">{children}</div>
    </article>
  )
}
