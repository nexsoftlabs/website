export const SITE_URL = 'https://nexsoftlabs.in'
export const SITE_NAME = 'NexSoft Labs'
export const CONTACT_EMAIL = 'hello@nexsoftlabs.in'
export const DEFAULT_TAGLINE = 'We engineer software that moves business forward.'
export const DEFAULT_DESCRIPTION =
  'NexSoft Labs designs, builds and modernizes custom software: web applications, mobile apps, SaaS platforms, AI workflow automation and cloud modernization.'
export const OG_IMAGE = `${SITE_URL}/og/og-default.png`

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
