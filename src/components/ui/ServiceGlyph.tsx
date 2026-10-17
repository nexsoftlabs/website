import type { ReactNode } from 'react'
import type { ServiceSlug } from '@/types'

interface ServiceGlyphProps {
  slug: ServiceSlug
  className?: string
}

const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ServiceGlyph({ slug, className = 'h-7 w-7' }: ServiceGlyphProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {glyphs[slug] ?? glyphs['web-development']}
    </svg>
  )
}

const accent = 'var(--color-blue-electric)'

const glyphs: Partial<Record<ServiceSlug, ReactNode>> = {
  'software-consulting': (
    <g {...common}>
      <rect x="4" y="4" width="9" height="7" rx="1.5" />
      <rect x="19" y="4" width="9" height="7" rx="1.5" />
      <rect x="11.5" y="21" width="9" height="7" rx="1.5" />
      <path d="M8.5 11v4.5h15V11M16 15.5V21" />
      <circle cx="16" cy="15.5" r="1.6" fill={accent} stroke="none" />
    </g>
  ),
  'web-development': (
    <g {...common}>
      <rect x="3.5" y="5.5" width="25" height="21" rx="2" />
      <path d="M3.5 10.5h25" />
      <path d="M8 15h7M8 19h10M8 23h5" />
      <rect x="20" y="14.5" width="5" height="8" rx="1" fill={accent} stroke="none" opacity="0.9" />
    </g>
  ),
  'mobile-app-development': (
    <g {...common}>
      <rect x="9.5" y="3.5" width="13" height="25" rx="2.5" />
      <path d="M14 7h4" />
      <path d="M12.5 13h7M12.5 17h5" />
      <circle cx="16" cy="23.5" r="1.6" fill={accent} stroke="none" />
    </g>
  ),
  'saas-development': (
    <g {...common}>
      <path d="M16 4 28 10l-12 6L4 10l12-6Z" />
      <path d="m4 16 12 6 12-6" />
      <path d="m4 22 12 6 12-6" />
      <circle cx="16" cy="10" r="1.6" fill={accent} stroke="none" />
    </g>
  ),
  'ai-automation': (
    <g {...common}>
      <rect x="3.5" y="12" width="7" height="8" rx="1.5" />
      <rect x="21.5" y="5" width="7" height="7" rx="1.5" />
      <rect x="21.5" y="20" width="7" height="7" rx="1.5" />
      <path d="M10.5 16h4.5M15 16c3 0 3-7.5 6.5-7.5M15 16c3 0 3 7.5 6.5 7.5" />
      <path d="m16 3 .9 2.1L19 6l-2.1.9L16 9l-.9-2.1L13 6l2.1-.9L16 3Z" fill={accent} stroke="none" />
    </g>
  ),
  'cloud-modernization': (
    <g {...common}>
      <path d="M9 21.5h14.5a5 5 0 0 0 .6-9.96A7 7 0 0 0 10.6 12 4.75 4.75 0 0 0 9 21.5Z" />
      <path d="M11 27.5h10M16 21.5v6" />
      <circle cx="16" cy="27.5" r="1.6" fill={accent} stroke="none" />
    </g>
  ),
}
