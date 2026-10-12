import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] uppercase ${
            dark ? 'text-cyan-brand/90' : 'text-indigo-brand'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            dark ? 'text-slate-300' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
