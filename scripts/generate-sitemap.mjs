/**
 * Regenerates public/sitemap.xml from route data files. Run before vite build.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const SITE_URL = 'https://nexsoftlabs.in'

function extractServiceSlugs() {
  const text = fs.readFileSync(path.join(root, 'src/data/serviceDetails.ts'), 'utf8')
  return [...text.matchAll(/^  '([a-z0-9-]+)': \{/gm)].map((m) => m[1])
}

function extractInsightEntries() {
  const text = fs.readFileSync(path.join(root, 'src/data/insights.ts'), 'utf8')
  const slugs = [...text.matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
  const dates = [...text.matchAll(/publishedAt: '([^']+)'/g)].map((m) => m[1])
  return slugs.map((slug, i) => ({ slug, lastmod: dates[i] ?? new Date().toISOString().slice(0, 10) }))
}

const staticRoutes = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/services', changefreq: 'weekly', priority: '0.9' },
  { loc: '/work', changefreq: 'monthly', priority: '0.8' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/insights', changefreq: 'weekly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.85' },
]

const today = new Date().toISOString().slice(0, 10)

const urls = [
  ...staticRoutes.map((r) => ({ ...r, lastmod: today })),
  ...extractServiceSlugs().map((slug) => ({
    loc: `/services/${slug}`,
    changefreq: 'monthly',
    priority: '0.85',
    lastmod: today,
  })),
  ...extractInsightEntries().map(({ slug, lastmod }) => ({
    loc: `/insights/${slug}`,
    changefreq: 'monthly',
    priority: '0.75',
    lastmod,
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc === '/' ? '/' : u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const out = path.join(root, 'public/sitemap.xml')
fs.writeFileSync(out, `${xml}\n`)
console.info(`Wrote ${urls.length} URLs to public/sitemap.xml`)
