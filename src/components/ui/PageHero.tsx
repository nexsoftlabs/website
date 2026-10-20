import { ChevronRight } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useRegisterDarkHero } from '@/lib/heroVisibility'
import { BreadcrumbStructuredData } from '@/components/StructuredData'
import { Container } from '@/components/ui/Container'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  breadcrumbs?: Crumb[]
  children?: ReactNode
  aside?: ReactNode
}

export function PageHero({ eyebrow, title, description, breadcrumbs, children, aside }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  useRegisterDarkHero(ref)

  return (
    <section ref={ref} className="hero-ambient bg-navy-radial text-white">
      <Container className="pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        {breadcrumbs && (
          <>
            <BreadcrumbStructuredData crumbs={breadcrumbs} />
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#8fa0ba]">
              {[{ label: 'Home', href: '/' }, ...breadcrumbs].map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-[#d5deeb]">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          </>
        )}
        <div className={`grid gap-12 ${aside ? 'lg:grid-cols-12 lg:items-end' : ''}`}>
          <div className={aside ? 'lg:col-span-7' : 'max-w-4xl'}>
            {eyebrow && <p className="eyebrow-rule text-blue-soft">{eyebrow}</p>}
            <h1 className="display-lg mt-2 text-balance">{title}</h1>
            {description && <p className="lede mt-6 max-w-2xl text-pretty text-[#b8c5da]">{description}</p>}
            {children && <div className="mt-9">{children}</div>}
          </div>
          {aside && <div className="lg:col-span-4 lg:col-start-9">{aside}</div>}
        </div>
      </Container>
    </section>
  )
}
