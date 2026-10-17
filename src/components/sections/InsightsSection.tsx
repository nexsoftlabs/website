import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { insights } from '@/data/insights'
import { ArticleCover } from '@/components/ui/ArticleCover'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function InsightsSection() {
  const [lead, ...rest] = insights

  return (
    <section className="section bg-canvas" aria-labelledby="insights-heading">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow text-brand">Insights</p>
            <h2 id="insights-heading" className="display-lg mt-5 text-balance text-heading">
              Thinking beyond the code.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              All insights
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <Reveal as="article" className="lg:col-span-7">
            <Link to={`/insights/${lead.slug}`} className="group block">
              <ArticleCover category={lead.category} className="aspect-[16/9] transition-opacity group-hover:opacity-90" />
              <p className="mt-6 text-sm text-muted">
                <span className="font-medium text-brand">{lead.category}</span> · {lead.readingTimeMinutes} min read
              </p>
              <h3 className="display-md mt-3 text-balance text-heading group-hover:text-brand">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{lead.summary}</p>
            </Link>
          </Reveal>

          <ul className="flex flex-col divide-y divide-hairline border-y border-hairline lg:col-span-5">
            {rest.map((article, i) => (
              <Reveal as="li" key={article.slug} delay={0.08 * (i + 1)}>
                <Link to={`/insights/${article.slug}`} className="group flex gap-5 py-8">
                  <ArticleCover category={article.category} className="hidden aspect-square w-28 shrink-0 sm:block" />
                  <div>
                    <p className="text-sm text-muted">
                      <span className="font-medium text-brand">{article.category}</span> ·{' '}
                      {article.readingTimeMinutes} min read
                    </p>
                    <h3 className="mt-2 text-xl leading-snug font-semibold tracking-[-0.015em] text-heading group-hover:text-brand">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-relaxed text-muted">{article.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
