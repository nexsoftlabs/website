import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-ink'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="NexSoft Labs home"
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-brand to-cyan-brand p-[1px]">
        <span className="flex h-full w-full items-center justify-center rounded-[7px] bg-midnight">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-white"
          >
            <path
              d="M6 18V6l6 7 6-7v12"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="1.5" fill="#45D6E8" />
            <circle cx="18" cy="7" r="1" fill="#8B7CFF" opacity="0.9" />
            <circle cx="6" cy="18" r="1" fill="#8B7CFF" opacity="0.9" />
          </svg>
        </span>
      </span>
      <span className={`text-lg font-semibold tracking-tight ${text}`}>
        NexSoft <span className="font-medium opacity-80">Labs</span>
      </span>
    </Link>
  )
}
