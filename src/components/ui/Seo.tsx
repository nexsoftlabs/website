import { Helmet } from 'react-helmet-async'
import { canonicalPath, DEFAULT_TAGLINE, OG_IMAGE, pageTitle, SITE_NAME, type PageMeta } from '@/lib/seo'

interface SeoProps extends PageMeta {
  noIndex?: boolean
  /** Google Search Console HTML tag verification (set VITE_GOOGLE_SITE_VERIFICATION). */
  googleSiteVerification?: string
}

export function Seo({
  title,
  description,
  path,
  ogType = 'website',
  noIndex,
  googleSiteVerification,
}: SeoProps) {
  const fullTitle = pageTitle(title)
  const url = canonicalPath(path)
  const verification =
    googleSiteVerification?.trim() || import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim()

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      {verification && <meta name="google-site-verification" content={verification} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${DEFAULT_TAGLINE}`} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
