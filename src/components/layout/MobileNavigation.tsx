import { Link, useLocation } from 'react-router-dom'
import { serviceNavItems } from '@/data/services'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/context/ThemeProvider'

interface MobileNavigationProps {
  open: boolean
  onClose: () => void
  surface?: 'dark' | 'light'
}

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

export function MobileNavigation({ open, onClose, surface = 'light' }: MobileNavigationProps) {
  const location = useLocation()
  const { resolved } = useTheme()
  const drawerDark = resolved === 'dark' || surface === 'dark'

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-midnight/70 backdrop-blur-sm transition-opacity"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        className={`absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col border-l shadow-xl ${
          drawerDark
            ? 'border-white/10 bg-midnight text-slate-200'
            : 'border-border-light bg-surface-elevated'
        }`}
        aria-label="Mobile"
      >
        <div
          className={`flex items-center justify-between border-b p-4 ${
            drawerDark ? 'border-white/10' : 'border-border-light'
          }`}
        >
          <Logo variant={drawerDark ? 'light' : 'dark'} />
          <button
            type="button"
            onClick={onClose}
            className={`rounded-lg px-3 py-2 text-sm font-medium ${
              drawerDark
                ? 'text-slate-300 hover:bg-white/10 hover:text-white'
                : 'text-muted hover:bg-surface-inset'
            }`}
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                    location.pathname === link.href ||
                    location.pathname.startsWith(link.href + '/')
                      ? 'bg-indigo-brand/10 text-indigo-brand'
                      : drawerDark
                        ? 'text-slate-200 hover:bg-white/10'
                        : 'text-ink hover:bg-surface-inset'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 mb-2 px-3 text-xs font-semibold tracking-wide text-muted uppercase">
            Service areas
          </p>
          <ul className="space-y-1">
            {serviceNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    drawerDark
                      ? 'text-slate-400 hover:bg-white/10 hover:text-white'
                      : 'text-muted hover:bg-surface-inset hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`space-y-4 border-t p-4 ${
            drawerDark ? 'border-white/10' : 'border-border-light'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-muted">Theme</span>
            <ThemeToggle surface={drawerDark ? 'dark' : 'light'} />
          </div>
          <Button to="/contact" className="w-full" onClick={onClose}>
            Let&apos;s Talk
          </Button>
        </div>
      </nav>
    </div>
  )
}
