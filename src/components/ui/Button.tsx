import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'md' | 'sm'

interface ButtonBaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
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
    'bg-indigo-brand text-white hover:bg-[#5248e6] shadow-sm hover:shadow-md border border-transparent',
  secondary:
    'bg-surface-elevated text-ink border border-border-light hover:border-indigo-brand/40 hover:text-indigo-brand',
  ghost: 'bg-transparent text-ink hover:bg-surface-inset border border-transparent',
  'outline-light':
    'bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/40',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm font-medium rounded-xl',
  sm: 'px-4 py-2 text-sm font-medium rounded-lg',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '' } = props
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
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
        {children}
      </a>
    )
  }

  const { type = 'button', disabled, onClick } = props as ButtonAsButton
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
