import { useId } from 'react'
import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  onClick?: () => void
}

/** Isometric architecture cube — geometric brand mark. */
export function LogoMark({ className = '' }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const bgId = `nx-bg-${uid}`
  const topId = `nx-top-${uid}`

  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={bgId} x1="2" y1="2" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#163B8C" />
          <stop offset="1" stopColor="#0A1B42" />
        </linearGradient>
        <linearGradient id={topId} x1="8" y1="7" x2="28" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#B8D2FF" />
        </linearGradient>
      </defs>

      <rect width="36" height="36" rx="9" fill={`url(#${bgId})`} />
      <rect
        x="0.75"
        y="0.75"
        width="34.5"
        height="34.5"
        rx="8.25"
        stroke="#fff"
        strokeOpacity="0.14"
        strokeWidth="1.2"
      />

      <path d="M18 6.8L28.2 12.6L18 18.4L7.8 12.6L18 6.8Z" fill={`url(#${topId})`} />
      <path d="M7.8 12.6L18 18.4V29.6L7.8 23.8V12.6Z" fill="#6CA2FF" />
      <path d="M28.2 12.6L18 18.4V29.6L28.2 23.8V12.6Z" fill="#2864D8" />
      <path
        d="M11.6 22.8V14.8L24.4 22.2V14.2"
        stroke="#0B1F4A"
        strokeOpacity="0.55"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="18.4" r="2.1" fill="#FFFFFF" />
    </svg>
  )
}

export function Logo({ variant = 'dark', className = '', onClick }: LogoProps) {
  const primary = variant === 'light' ? 'text-white' : 'text-heading'
  const accent = variant === 'light' ? 'text-blue-soft' : 'text-brand'
  const divider = variant === 'light' ? 'bg-white/20' : 'bg-hairline'
  const sub = variant === 'light' ? 'text-[#b4c4de]' : 'text-muted'

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group inline-flex min-w-0 items-center gap-2.5 rounded-md sm:gap-4 ${className}`}
      aria-label="NexSoft Labs — home"
    >
      <LogoMark className="h-9 w-9 shrink-0 shadow-[0_2px_10px_-2px_rgb(11_23_48/0.4)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] sm:h-10 sm:w-10 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      <span className="inline-flex items-baseline gap-2.5 whitespace-nowrap sm:gap-3">
        <span className={`text-base leading-none font-semibold tracking-[-0.04em] sm:text-xl ${primary}`}>
          Nex<span className={accent}>Soft</span>
        </span>
        <span className={`h-4 w-px self-center sm:h-5 ${divider}`} aria-hidden="true" />
        <span
          className={`text-[0.8125rem] leading-none font-semibold tracking-[0.16em] uppercase sm:text-sm ${sub}`}
        >
          Labs
        </span>
      </span>
    </Link>
  )
}
