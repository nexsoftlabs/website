import { ArrowRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface MobileNavigationProps {
  open: boolean
  onClose: () => void
}

const links = [
  { label: 'All services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="motion-opacity-in-0 motion-duration-200 absolute inset-0 bg-navy-950/60 backdrop-blur-[2px]"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="motion-translate-x-in-[24px] motion-opacity-in-0 motion-duration-300 motion-ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col bg-surface shadow-2xl"
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-hairline px-5">
          <Logo variant="dark" onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-heading hover:bg-surface-sunken"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
          <p className="eyebrow mb-3 text-muted">Services</p>
          <ul className="divide-y divide-hairline border-y border-hairline">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  onClick={onClose}
                  className="flex min-h-[52px] items-center gap-3 py-3 text-[0.9375rem] font-medium text-heading"
                >
                  <ServiceGlyph slug={service.slug} className="h-5 w-5 shrink-0 text-muted" />
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-8 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex min-h-[48px] items-center justify-between text-2xl font-semibold tracking-tight ${
                      isActive ? 'text-brand' : 'text-heading'
                    }`
                  }
                >
                  {link.label}
                  <ArrowRight className="h-5 w-5 text-muted" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 space-y-4 border-t border-hairline px-5 py-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Appearance</span>
            <ThemeToggle />
          </div>
          <Button to="/contact" size="lg" arrow className="w-full" onClick={onClose}>
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </div>
  )
}
