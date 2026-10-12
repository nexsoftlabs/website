import { Helmet } from 'react-helmet-async'
import { canonicalPath, pageTitle, SITE_NAME, SITE_URL, type PageMeta } from '@/lib/seo'

interface SeoProps extends PageMeta {
  noIndex?: boolean
}

export function Seo({ title, description, path, ogType = 'website', noIndex }: SeoProps) {
  const fullTitle = pageTitle(title)
  const url = canonicalPath(path)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${SITE_URL}/og/og-default.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
