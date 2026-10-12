import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu } from 'lucide-react'
import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToId } from '@/lib/scroll'
import { serviceNavItems } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { MobileNavigation } from '@/components/layout/MobileNavigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/context/ThemeProvider'

const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

type NavSurface = 'dark' | 'light'

function NavLinkItem({
  href,
  label,
  surface,
  active,
}: {
  href: string
  label: string
  surface: NavSurface
  active: boolean
}) {
  const base =
    surface === 'dark'
      ? active
        ? 'text-white'
        : 'text-slate-300 hover:text-white'
      : active
        ? 'text-indigo-brand'
        : 'text-ink/75 hover:text-ink'

  const className = `group relative py-1 text-sm font-medium transition-colors duration-300 ${base}`

  const inner = (
    <>
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px origin-left transition-transform duration-300 ease-out ${
          surface === 'dark' ? 'bg-cyan-brand' : 'bg-indigo-brand'
        } ${active ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`}
        aria-hidden="true"
      />
    </>
  )

  const navigate = useNavigate()
  const location = useLocation()

  if (href.startsWith('/#')) {
    const sectionId = href.slice(2)
    const onHashClick = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      if (location.pathname === '/') {
        scrollToId(sectionId)
        window.history.pushState(null, '', `#${sectionId}`)
      } else {
        navigate({ pathname: '/', hash: sectionId })
      }
    }
    return (
      <a href={href} className={className} onClick={onHashClick}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {inner}
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [heroInView, setHeroInView] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  const { resolved: colorTheme } = useTheme()
  const isHome = location.pathname === '/'
  const navSurface: NavSurface =
    colorTheme === 'dark' || (isHome && heroInView) ? 'dark' : 'light'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) {
      setHeroInView(false)
      return
    }

    const sentinel = document.getElementById('hero-scroll-sentinel')
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '-72px 0px 0px 0px' },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [isHome, location.pathname])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!dropdownOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [dropdownOpen])

  const linkActive = (href: string) => {
    if (href === '/services') return location.pathname.startsWith('/services')
    if (href.startsWith('/#')) return false
    return location.pathname === href
  }

  const headerSurface =
    navSurface === 'dark'
      ? scrolled
        ? 'border-white/10 bg-midnight/90 shadow-lg shadow-black/25'
        : 'border-white/5 bg-midnight/40'
      : scrolled
        ? 'border-border-light/90 bg-surface-elevated/95 shadow-sm'
        : 'border-transparent bg-surface-elevated/90'

  return (
    <>
      <motion.header
        className={`site-navbar sticky top-0 z-40 border-b backdrop-blur-xl backdrop-saturate-150 ${headerSurface}`}
        initial={false}
        animate={
          reduceMotion
            ? undefined
            : {
                borderColor:
                  navSurface === 'dark'
                    ? scrolled
                      ? 'rgba(255,255,255,0.12)'
                      : 'rgba(255,255,255,0.06)'
                    : scrolled
                      ? 'rgba(226,232,240,0.9)'
                      : 'rgba(226,232,240,0)',
              }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo variant={navSurface === 'dark' ? 'light' : 'dark'} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                        navSurface === 'dark'
                          ? 'text-slate-300 hover:text-white'
                          : 'text-ink/75 hover:text-ink'
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen((v) => !v)}
                      onBlur={(e) => {
                        if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                          setDropdownOpen(false)
                        }
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={reduceMotion ? undefined : { opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className={`absolute top-full left-0 mt-2 min-w-[15rem] rounded-xl border p-2 shadow-xl ${
                            navSurface === 'dark'
                              ? 'border-white/10 bg-midnight/95 text-slate-200'
                              : 'border-border-light bg-surface-elevated'
                          }`}
                          role="menu"
                        >
                          <li role="none">
                            <Link
                              to="/services"
                              role="menuitem"
                              className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                                navSurface === 'dark'
                                  ? 'text-white hover:bg-white/10'
                                  : 'text-ink hover:bg-surface-inset'
                              }`}
                              onClick={() => setDropdownOpen(false)}
                            >
                              All services
                            </Link>
                          </li>
                          {serviceNavItems.map((item) => (
                            <li key={item.href} role="none">
                              <Link
                                to={item.href}
                                role="menuitem"
                                className={`block rounded-lg px-3 py-2 text-sm ${
                                  navSurface === 'dark'
                                    ? 'text-slate-300 hover:bg-white/10 hover:text-white'
                                    : 'text-muted hover:bg-surface-inset hover:text-ink'
                                }`}
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.label}>
                    <NavLinkItem
                      href={link.href}
                      label={link.label}
                      surface={navSurface}
                      active={linkActive(link.href)}
                    />
                  </li>
                ),
              )}
            </ul>
            <ThemeToggle surface={navSurface} />
            <Button
              to="/contact"
              size="sm"
              variant="primary"
              className={
                navSurface === 'dark'
                  ? 'shadow-glow ring-1 ring-white/10'
                  : undefined
              }
            >
              Let&apos;s Talk
            </Button>
          </nav>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle surface={navSurface} />
          <button
            type="button"
            className={`rounded-lg p-2 transition-colors ${
              navSurface === 'dark'
                ? 'text-white hover:bg-white/10'
                : 'text-ink hover:bg-ink/5'
            }`}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          </div>
        </Container>
      </motion.header>
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        surface={navSurface}
      />
    </>
  )
}
