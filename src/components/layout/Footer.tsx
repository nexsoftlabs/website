import { Link } from 'react-router-dom'
import { serviceNavItems } from '@/data/services'
import { CONTACT_EMAIL } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy-950 text-[#b8c5da]">
      <Container className="pt-16 pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#9aa8be]">
              Architecture-led software consultancy for web, mobile, SaaS and cloud—engagements built
              on clarity, accountability and engineering discipline.
            </p>
            <p className="mt-6 text-xs tracking-wide text-[#6d7d96] uppercase">
              India · Remote delivery worldwide
            </p>
          </div>

          <nav aria-label="Services" className="lg:col-span-4 lg:col-start-6">
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {serviceNavItems.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="link-animate text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="link-animate text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 block text-sm break-all transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.08] pt-8 text-xs text-[#8fa0ba] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NexSoft Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
