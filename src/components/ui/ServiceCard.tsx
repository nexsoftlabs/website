import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getServiceIcon } from '@/lib/icons'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className = '' }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon)
  const href = `/services/${service.slug}`

  return (
    <article
      className={`card-animate group relative flex flex-col rounded-xl border border-hairline bg-surface p-6 shadow-soft hover:border-blue-corporate/25 ${className}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-corporate/10 text-brand transition-colors duration-300 group-hover:bg-blue-corporate group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-heading">{service.shortTitle}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
      <Link
        to={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand transition-[gap,color] duration-300 group-hover:gap-2"
      >
        Explore service
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only"> — {service.shortTitle}</span>
      </Link>
    </article>
  )
}
