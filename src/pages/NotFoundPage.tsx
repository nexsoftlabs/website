import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useRegisterDarkHero } from '@/lib/heroVisibility'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Seo } from '@/components/ui/Seo'

const destinations = [
  { label: 'Services', href: '/services', text: 'What we build and how we help' },
  { label: 'Concept Lab', href: '/work', text: 'Illustrative studies of our approach' },
  { label: 'Insights', href: '/insights', text: 'Articles on architecture and delivery' },
]

export function NotFoundPage() {
  const ref = useRef<HTMLElement>(null)
  useRegisterDarkHero(ref)

  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." path="/404" noIndex />
      <section ref={ref} className="bg-navy-radial text-white">
        <Container className="py-20 lg:py-28">
          <p className="font-mono text-sm text-blue-soft">Error 404</p>
          <h1 className="display-lg mt-5 max-w-3xl text-balance">This page doesn’t exist—but the rest of the site does.</h1>
          <p className="lede mt-6 max-w-2xl text-[#b8c5da]">
            The link may be outdated or the page may have moved. Here are a few good places to go next.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/" size="lg" variant="light" arrow>
              Back to home
            </Button>
            <Button to="/contact" size="lg" variant="outline-light">
              Contact us
            </Button>
          </div>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
            {destinations.map((d) => (
              <li key={d.href} className="bg-navy-950/60">
                <Link to={d.href} className="group flex h-full items-start justify-between gap-4 p-6 hover:bg-white/[0.04]">
                  <span>
                    <span className="block font-semibold">{d.label}</span>
                    <span className="mt-1 block text-sm text-[#8fa0ba]">{d.text}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8fa0ba] group-hover:text-white" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
