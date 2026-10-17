import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { insights } from '@/data/insights'
import { CTASection } from '@/components/sections/CTASection'
import { ArticleCover } from '@/components/ui/ArticleCover'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Seo } from '@/components/ui/Seo'

export function InsightsPage() {
  return (
    <>
      <Seo
        title="Insights"
        description="Practical perspectives on SaaS architecture, legacy modernization and AI adoption for product and engineering leaders."
        path="/insights"
      />
      <PageHero
        breadcrumbs={[{ label: 'Insights' }]}
        eyebrow="Insights"
        title="Thinking beyond the code."
        description="Practical perspectives on architecture, modernization and automation—written for the people who have to make the decisions."
      />

      <section className="section bg-surface" aria-label="Articles">
        <Container>
          <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((article, i) => (
              <Reveal as="li" key={article.slug} delay={0.06 * i}>
                <article>
                  <Link to={`/insights/${article.slug}`} className="group block">
                    <ArticleCover
                      category={article.category}
                      className="aspect-[4/3] transition-opacity group-hover:opacity-90"
                    />
                    <p className="mt-6 text-sm text-muted">
                      <span className="font-medium text-brand">{article.category}</span> ·{' '}
                      {article.readingTimeMinutes} min read
                    </p>
                    <h2 className="mt-3 text-2xl leading-snug font-semibold tracking-[-0.02em] text-balance text-heading group-hover:text-brand">
                      {article.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">{article.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Have a question these articles didn’t answer?"
        text="If you are weighing an architecture, modernization or automation decision, we are happy to talk it through."
        ctaLabel="Start a Conversation"
      />
    </>
  )
}
