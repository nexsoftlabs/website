import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { Button } from '@/components/ui/Button'
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

const panelEase = [0.22, 1, 0.36, 1] as const

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY
    const body = document.body
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    }

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'

    const panel = panelRef.current
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
      document.removeEventListener('keydown', onKey)
      body.style.overflow = previous.overflow
      body.style.position = previous.position
      body.style.top = previous.top
      body.style.width = previous.width
      window.scrollTo(0, scrollY)
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] lg:hidden" role="presentation">
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 touch-manipulation bg-navy-950/60 backdrop-blur-[2px]"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed right-0 bottom-0 flex w-full max-w-[100vw] flex-col bg-surface shadow-2xl sm:max-w-[min(24rem,100vw)]"
            style={{
              top: 'max(4.5rem, calc(4.5rem + env(safe-area-inset-top, 0px)))',
              height:
                'calc(100dvh - max(4.5rem, calc(4.5rem + env(safe-area-inset-top, 0px))))',
              paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            }}
            initial={reduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: '100%' }}
            transition={{ duration: 0.32, ease: panelEase }}
          >
            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain border-t border-hairline px-4 py-5 sm:px-5 sm:py-6"
              aria-label="Mobile"
            >
              <p className="eyebrow mb-3 text-muted">Services</p>
              <ul className="divide-y divide-hairline border-y border-hairline">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      onClick={onClose}
                      className="flex min-h-[48px] touch-manipulation items-center gap-3 py-3 text-sm font-medium text-heading sm:min-h-[52px] sm:text-[0.9375rem]"
                    >
                      <ServiceGlyph slug={service.slug} className="h-5 w-5 shrink-0 text-muted" />
                      <span className="text-pretty">{service.shortTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-0.5 sm:mt-8 sm:space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      end
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex min-h-[44px] touch-manipulation items-center justify-between gap-3 py-2 text-xl font-semibold tracking-tight sm:min-h-[48px] sm:text-2xl ${
                          isActive ? 'text-brand' : 'text-heading'
                        }`
                      }
                    >
                      {link.label}
                      <ArrowRight className="h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="shrink-0 space-y-4 border-t border-hairline px-4 py-4 sm:px-5 sm:py-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-muted">Appearance</span>
                <ThemeToggle />
              </div>
              <Button to="/contact" size="lg" arrow className="w-full touch-manipulation" onClick={onClose}>
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
