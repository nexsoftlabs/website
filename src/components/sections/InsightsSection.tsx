import { Link } from 'react-router-dom'
import { insights } from '@/data/insights'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function InsightsSection() {
  return (
    <section className="section-padding bg-surface-page">
      <Container>
        <Reveal>
          <SectionHeading
            title="Thinking beyond the code."
            description="Practical perspectives on architecture, modernization, and automation."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border-light bg-surface-elevated p-6 shadow-soft">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="font-medium text-indigo-brand">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingTimeMinutes} min read</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  <Link
                    to={`/insights/${article.slug}`}
                    className="hover:text-indigo-brand"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.summary}</p>
                <Link
                  to={`/insights/${article.slug}`}
                  className="mt-4 text-sm font-medium text-indigo-brand hover:underline"
                >
                  Read article
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link to="/insights" className="text-sm font-medium text-indigo-brand hover:underline">
            View all insights
          </Link>
        </p>
      </Container>
    </section>
  )
}
