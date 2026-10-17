import { Helmet } from 'react-helmet-async'
import { CONTACT_EMAIL, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo'

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: DEFAULT_DESCRIPTION,
    email: CONTACT_EMAIL,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
