import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light' | 'light'
type Size = 'lg' | 'md' | 'sm'

interface ButtonBaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  /** Show a trailing arrow that nudges on hover */
  arrow?: boolean
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: undefined
  href?: undefined
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string
  href?: undefined
  onClick?: () => void
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string
  to?: undefined
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variants: Record<Variant, string> = {
  primary:
    'bg-blue-corporate text-white hover:bg-blue-corporate-hover border border-blue-corporate hover:border-blue-corporate-hover',
  secondary:
    'bg-surface text-heading border border-hairline hover:border-heading/30',
  ghost: 'bg-transparent text-heading border border-transparent hover:bg-surface-sunken',
  'outline-light':
    'bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5',
  light: 'bg-white text-navy-950 border border-white hover:bg-[#e8eef8] hover:border-[#e8eef8]',
}

const sizes: Record<Size, string> = {
  lg: 'h-12 px-6 text-[0.9375rem] rounded-lg',
  md: 'h-11 px-5 text-sm rounded-lg',
  sm: 'h-9 px-4 text-sm rounded-md',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '', arrow = false } = props
  const classes = `group/btn inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {content}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const external = props.external ?? props.href.startsWith('http')
    return (
      <a
        href={props.href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  const { type = 'button', disabled, onClick } = props as ButtonAsButton
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
