import { Link, useParams } from 'react-router-dom'
import { getInsightBySlug } from '@/data/insights'
import { ArticleBody } from '@/components/ArticleBody'
import { Container } from '@/components/ui/Container'
import { Seo } from '@/components/ui/Seo'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getInsightBySlug(slug) : undefined

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <Seo
        title={article.title}
        description={article.summary}
        path={`/insights/${article.slug}`}
        ogType="article"
      />
      <article className="border-b border-border-light bg-surface-elevated py-14 md:py-16">
        <Container className="max-w-3xl">
          <Link
            to="/insights"
            className="text-sm font-medium text-indigo-brand hover:underline"
          >
            ← Insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted">
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
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{article.summary}</p>
        </Container>
      </article>
      <Container className="section-padding max-w-3xl bg-surface-page">
        <ArticleBody blocks={article.body} />
      </Container>
    </>
  )
}
