import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  absoluteAssetUrl,
  canonicalPath,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo'

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og/og-default.png`,
    image: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    email: CONTACT_EMAIL,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Software consulting',
      'Web application development',
      'Mobile app development',
      'SaaS development',
      'AI workflow automation',
      'Cloud modernization',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export function WebSiteStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

interface BreadcrumbCrumb {
  label: string
  href?: string
}

export function BreadcrumbStructuredData({ crumbs }: { crumbs: BreadcrumbCrumb[] }) {
  const { pathname } = useLocation()
  const trail = [{ label: 'Home', href: '/' }, ...crumbs]

  const itemListElement = trail.map((crumb, index) => {
    const isLast = index === trail.length - 1
    const path = crumb.href ?? (isLast ? pathname : undefined)
    const item = path ? canonicalPath(path) : undefined

    return {
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(item ? { item } : {}),
    }
  })

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export interface ArticleStructuredDataProps {
  title: string
  description: string
  path: string
  publishedAt: string
  category: string
  image?: string
}

export function ArticleStructuredData({
  title,
  description,
  path,
  publishedAt,
  category,
  image,
}: ArticleStructuredDataProps) {
  const url = canonicalPath(path)

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og/og-default.png`,
      },
    },
    image: image ? absoluteAssetUrl(image) : OG_IMAGE,
    articleSection: category,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
