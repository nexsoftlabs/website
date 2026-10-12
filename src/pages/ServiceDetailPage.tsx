import { Link, useParams } from 'react-router-dom'
import { getServiceBySlug } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <NotFoundPage />
  }

  const Icon = getServiceIcon(service.icon)

  return (
    <>
      <Seo
        title={service.shortTitle}
        description={service.summary}
        path={`/services/${service.slug}`}
      />
      <PageHeader title={service.title} description={service.summary} eyebrow="Service" />
      <Container className="section-padding">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-muted">{service.description}</p>
            <h2 className="mt-10 text-xl font-semibold text-ink">What we help with</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {service.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-xl font-semibold text-ink">Outcomes you can expect</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {service.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-border-light bg-surface-inset p-6 lg:sticky lg:top-24 lg:self-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-brand/10 text-indigo-brand">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm text-muted">
              Ready to explore how this service fits your roadmap?
            </p>
            <Button to="/contact" className="mt-6 w-full">
              Discuss Your Project
            </Button>
            <Link
              to="/services"
              className="mt-4 block text-center text-sm font-medium text-indigo-brand hover:underline"
            >
              ← All services
            </Link>
          </aside>
        </div>
      </Container>
    </>
  )
}
