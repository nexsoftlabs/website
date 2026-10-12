export const SITE_URL = 'https://nexsoftlabs.in'
export const SITE_NAME = 'NexSoft Labs'
export const DEFAULT_TAGLINE = 'Engineering Ideas Into Digital Advantage.'
export const DEFAULT_DESCRIPTION =
  'We help ambitious businesses turn complex challenges into elegant software, scalable applications, and intelligent digital experiences.'

export function canonicalPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return SITE_URL
  return `${SITE_URL}${normalized}`
}

export interface PageMeta {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
}

export function pageTitle(title: string): string {
  if (title === SITE_NAME) return `${SITE_NAME} — ${DEFAULT_TAGLINE}`
  return `${title} | ${SITE_NAME}`
}
