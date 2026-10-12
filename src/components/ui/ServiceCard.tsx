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
      className={`group relative flex flex-col rounded-2xl border border-border-light bg-surface-elevated p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-brand/25 hover:shadow-lg ${className}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-brand/10 text-indigo-brand">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-ink">{service.shortTitle}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
      <Link
        to={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-indigo-brand transition-colors group-hover:gap-2"
      >
        Explore service
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only"> — {service.shortTitle}</span>
      </Link>
    </article>
  )
}
