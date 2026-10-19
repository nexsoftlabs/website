import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getInsightBySlug, insights } from '@/data/insights'
import { getServiceBySlug } from '@/data/services'
import { ArticleBody } from '@/components/ArticleBody'
import { CTASection } from '@/components/sections/CTASection'
import { ArticleCover } from '@/components/ui/ArticleCover'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { ArticleStructuredData } from '@/components/StructuredData'
import { Seo } from '@/components/ui/Seo'
import { NotFoundPage } from '@/pages/NotFoundPage'
import type { ServiceSlug } from '@/types'

const categoryService: Record<string, ServiceSlug> = {
  Architecture: 'software-consulting',
  Modernization: 'cloud-modernization',
  'AI & Automation': 'ai-automation',
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getInsightBySlug(slug) : undefined

  if (!article) {
    return <NotFoundPage />
  }

  const service = getServiceBySlug(categoryService[article.category] ?? 'software-consulting')
  const related = insights.filter((a) => a.slug !== article.slug)

  return (
    <>
      <Seo title={article.title} description={article.summary} path={`/insights/${article.slug}`} ogType="article" />
      <ArticleStructuredData
        title={article.title}
        description={article.summary}
        path={`/insights/${article.slug}`}
        publishedAt={article.publishedAt}
        category={article.category}
      />
      <PageHero
        breadcrumbs={[{ label: 'Insights', href: '/insights' }, { label: article.category }]}
        eyebrow={`${article.category} · ${article.readingTimeMinutes} min read`}
        title={article.title}
        description={article.summary}
      />

      <article className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="max-w-[68ch] lg:col-span-8">
              <ArticleBody blocks={article.body} />
            </div>
            {service && (
              <aside className="lg:col-span-3 lg:col-start-10" aria-label="Related service">
                <div className="rounded-xl border border-hairline bg-canvas p-6 lg:sticky lg:top-28">
                  <p className="eyebrow text-muted">Related service</p>
                  <p className="mt-3 text-lg font-semibold text-heading">{service.shortTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <div className="mt-6 border-t border-hairline pt-6">
                    <Button to="/contact" size="sm" arrow>
                      Discuss your project
                    </Button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="section bg-canvas" aria-labelledby="related-heading">
          <Container>
            <h2 id="related-heading" className="display-md text-heading">
              Keep reading
            </h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {related.map((a) => (
                <li key={a.slug}>
                  <Link to={`/insights/${a.slug}`} className="group grid gap-6 sm:grid-cols-[10rem_1fr]">
                    <ArticleCover category={a.category} className="aspect-[4/3] sm:aspect-square" />
                    <div>
                      <p className="text-sm text-muted">
                        <span className="font-medium text-brand">{a.category}</span> · {a.readingTimeMinutes} min read
                      </p>
                      <h3 className="mt-2 text-xl leading-snug font-semibold tracking-[-0.015em] text-heading group-hover:text-brand">
                        {a.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  )
}
