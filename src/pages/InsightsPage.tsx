import { Link } from 'react-router-dom'
import { insights } from '@/data/insights'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function InsightsPage() {
  return (
    <>
      <Seo
        title="Insights"
        description="Articles on SaaS architecture, legacy modernization, and practical AI adoption from NexSoft Labs."
        path="/insights"
      />
      <PageHeader
        eyebrow="Insights"
        title="Thinking beyond the code"
        description="Perspectives on architecture, modernization, and automation for product and engineering leaders."
      />
      <Container className="section-padding max-w-3xl">
        <ul className="divide-y divide-border-light">
          {insights.map((article) => (
            <li key={article.slug} className="py-8 first:pt-0">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="font-medium text-indigo-brand">{article.category}</span>
                <span>·</span>
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>·</span>
                <span>{article.readingTimeMinutes} min read</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-ink">
                <Link to={`/insights/${article.slug}`} className="hover:text-indigo-brand">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{article.summary}</p>
              <Link
                to={`/insights/${article.slug}`}
                className="mt-4 inline-block text-sm font-medium text-indigo-brand hover:underline"
              >
                Read article
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
