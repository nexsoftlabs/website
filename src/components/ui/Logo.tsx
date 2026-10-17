import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  onClick?: () => void
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="7" fill="#1746A2" />
      <path d="M9.5 22.5V9.5L22.5 22.5V9.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="square" />
      <rect x="20.2" y="7.2" width="4.6" height="4.6" fill="#3D79F2" />
    </svg>
  )
}

export function Logo({ variant = 'dark', className = '', onClick }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-heading'

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 rounded-md ${className}`}
      aria-label="NexSoft Labs — home"
    >
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className={`text-[1.0625rem] font-semibold tracking-[-0.02em] whitespace-nowrap ${text}`}>
        NexSoft<span className="font-normal opacity-70"> Labs</span>
      </span>
    </Link>
  )
}
