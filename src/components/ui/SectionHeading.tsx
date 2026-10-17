import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
  as: Heading = 'h2',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 ${dark ? 'text-blue-soft' : 'text-brand'}`}>{eyebrow}</p>
      )}
      <Heading className={`display-lg text-balance ${dark ? 'text-white' : 'text-heading'}`}>
        {title}
      </Heading>
      {description && (
        <p
          className={`lede mt-5 max-w-2xl text-pretty ${align === 'center' ? 'mx-auto' : ''} ${
            dark ? 'text-[#b8c5da]' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
