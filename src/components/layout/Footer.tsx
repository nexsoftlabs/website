import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { DEFAULT_TAGLINE } from '@/lib/seo'

const serviceLinks = [
  { label: 'Software Consulting', href: '/services/software-consulting' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'SaaS Engineering', href: '/services/saas-development' },
  { label: 'AI & Automation', href: '/services/ai-automation' },
  { label: 'Cloud Modernization', href: '/services/cloud-modernization' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface-elevated">
      <Container className="section-padding pb-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              NexSoft Labs is a software consultancy focused on thoughtful engineering, scalable
              architecture, and digital products that create lasting business value.
            </p>
            <p className="mt-3 text-sm font-medium text-ink">{DEFAULT_TAGLINE}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Services</h2>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-indigo-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Company</h2>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-indigo-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Connect</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@nexsoftlabs.in"
                  className="hover:text-indigo-brand"
                  title="Proposed contact email — verify before production use"
                >
                  hello@nexsoftlabs.in
                </a>
              </li>
              <li>
                <span className="text-slate-400">LinkedIn — URL placeholder</span>
              </li>
              <li>
                <span className="text-slate-400">GitHub — URL placeholder</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border-light pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} NexSoft Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link to="/privacy" className="text-muted hover:text-indigo-brand">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted hover:text-indigo-brand">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
