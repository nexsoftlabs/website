import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { useDarkHeroUnderHeader } from '@/lib/heroVisibility'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { ServiceGlyph } from '@/components/ui/ServiceGlyph'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { MobileNavigation } from '@/components/layout/MobileNavigation'

const primaryNav = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

type NavSurface = 'dark' | 'light'

function ServicesMenu({ surface }: { surface: NavSurface }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const openedByHover = useRef(false)
  const panelId = useId()
  const location = useLocation()
  const active = location.pathname.startsWith('/services')

  const close = useCallback((returnFocus = false) => {
    setOpen(false)
    if (returnFocus) triggerRef.current?.focus()
  }, [])

  useEffect(() => close(), [location.pathname, close])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true)
    }
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open, close])

  const onPointerEnter = (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(closeTimer.current)
    if (!open) openedByHover.current = true
    setOpen(true)
  }
  const onPointerLeave = (e: ReactPointerEvent) => {
    if (e.pointerType !== 'mouse') return
    closeTimer.current = window.setTimeout(() => {
      openedByHover.current = false
      setOpen(false)
    }, 160)
  }

  const triggerTone =
    surface === 'dark'
      ? active || open
        ? 'text-white'
        : 'text-[#b8c5da] hover:text-white'
      : active || open
        ? 'text-heading'
        : 'text-body/80 hover:text-heading'

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`relative inline-flex h-10 items-center gap-1 text-[0.9375rem] font-medium transition-colors ${triggerTone}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (openedByHover.current) {
            openedByHover.current = false
            setOpen(true)
            return
          }
          setOpen((v) => !v)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
            requestAnimationFrame(() =>
              document.getElementById(panelId)?.querySelector<HTMLAnchorElement>('a')?.focus(),
            )
          }
        }}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 opacity-70 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
        {active && (
          <span
            className={`absolute inset-x-0 -bottom-[15px] h-px ${surface === 'dark' ? 'bg-white' : 'bg-heading'}`}
            aria-hidden="true"
          />
        )}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 z-50 w-[min(720px,calc(100vw-4rem))] -translate-x-1/2 pt-4"
      >
        <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[6px] motion-duration-200 overflow-hidden rounded-xl border border-hairline bg-surface shadow-[0_24px_48px_-24px_rgb(11_23_48/0.35)]">
          <ul className="grid gap-px bg-hairline sm:grid-cols-2">
            {featuredServices.map((service) => (
              <li key={service.slug} className="bg-surface">
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full gap-4 p-5 transition-colors hover:bg-canvas focus-visible:bg-canvas"
                  onClick={() => close()}
                >
                  <ServiceGlyph slug={service.slug} className="mt-0.5 h-6 w-6 shrink-0 text-heading" />
                  <span>
                    <span className="block text-sm font-semibold text-heading">
                      {service.shortTitle}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-[0.8125rem] leading-snug text-muted">
                      {service.summary}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-canvas px-5 py-4">
            <p className="text-[0.8125rem] text-muted">
              Not sure which fits? We'll help you scope it.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
              onClick={() => close()}
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()
  const overDarkHero = useDarkHeroUnderHeader()

  const surface: NavSurface = overDarkHero ? 'dark' : 'light'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  const headerTone =
    surface === 'dark'
      ? 'bg-navy-950 border-white/[0.08]'
      : `bg-surface/95 backdrop-blur-md border-hairline ${scrolled ? 'shadow-[0_1px_0_rgb(11_23_48/0.02),0_8px_24px_-18px_rgb(11_23_48/0.3)]' : ''}`

  const linkTone = (isActive: boolean) =>
    surface === 'dark'
      ? isActive
        ? 'text-white'
        : 'text-[#b8c5da] hover:text-white'
      : isActive
        ? 'text-heading'
        : 'text-body/80 hover:text-heading'

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[60] rounded-md bg-surface px-4 py-2 text-sm font-medium text-heading shadow-lg transition-[transform,opacity] duration-200 -translate-y-[calc(100%+1.25rem)] opacity-0 focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${headerTone}`}
      >
        <Container className="flex h-[72px] min-w-0 items-center justify-between gap-2 sm:gap-6">
          <Logo variant={surface === 'dark' ? 'light' : 'dark'} className="min-w-0 shrink" />

          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-9">
              <ServicesMenu surface={surface} />
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative inline-flex h-10 items-center text-[0.9375rem] font-medium transition-colors ${linkTone(isActive)}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <span
                            className={`absolute inset-x-0 -bottom-[15px] h-px ${surface === 'dark' ? 'bg-white' : 'bg-heading'}`}
                            aria-hidden="true"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle surface={surface} />
            <Button to="/contact" size="md" variant={surface === 'dark' ? 'light' : 'primary'}>
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
            <span className="hidden min-[380px]:block">
              <Button to="/contact" size="sm" variant={surface === 'dark' ? 'light' : 'primary'}>
                Let&apos;s Talk
              </Button>
            </span>
            <button
              ref={menuButtonRef}
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                surface === 'dark' ? 'text-white hover:bg-white/10' : 'text-heading hover:bg-surface-sunken'
              }`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>
      <MobileNavigation
        open={mobileOpen}
        onClose={closeMobile}
      />
    </>
  )
}
