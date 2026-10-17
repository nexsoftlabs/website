import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '@/lib/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in seconds */
  delay?: number
  as?: ElementType
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  const style = delay > 0 ? ({ '--reveal-delay': `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined

  return (
    <Tag ref={ref} style={style} className={`reveal ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
