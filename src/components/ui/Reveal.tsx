import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '@/lib/useInView'

export type RevealVariant = 'up' | 'fade' | 'scale'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in seconds */
  delay?: number
  as?: ElementType
  variant?: RevealVariant
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  variant = 'up',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const style = delay > 0 ? ({ '--reveal-delay': `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
