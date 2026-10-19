# SEO & Google Search visibility

Technical SEO is enabled in this repo (meta tags, sitemap, structured data, redirects). **Ranking “first on Google”** also depends on content, backlinks, and time—use Search Console to monitor and improve.

## Already configured

- Per-page titles, descriptions, canonical URLs (`src/components/ui/Seo.tsx`)
- `public/robots.txt` and auto-generated `public/sitemap.xml` (build script)
- JSON-LD: Organization, WebSite, FAQ, Breadcrumbs, BlogPosting on articles
- Apex canonical domain `https://nexsoftlabs.in` (`src/lib/seo.ts`)
- Vercel **301** redirects: `www` → apex, legacy service URLs
- Open Graph / Twitter cards and `/og/og-default.png`

## You must do in Google (one-time)

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `https://nexsoftlabs.in`
   - Verify via **DNS TXT** (recommended, on BigRock) or HTML tag:
     - Tag: set `VITE_GOOGLE_SITE_VERIFICATION` in Vercel (Production) to the `content=` value Google gives you, redeploy.
2. **Submit sitemap** in Search Console: `https://nexsoftlabs.in/sitemap.xml`
3. **Request indexing** for the homepage and key service URLs after launch or major changes (URL Inspection → Request indexing).

## Ongoing

- Add real **case studies** and **insights** (unique text beats thin pages).
- Get **credible backlinks** (directories, partners, guest posts)—avoid spam farms.
- Keep **NAP** consistent if you add Google Business Profile for local brand queries.
- When adding routes or articles, run `npm run build` so `sitemap.xml` updates (or run `node scripts/generate-sitemap.mjs`).

## Optional next steps (not in repo)

- **SSR / prerender** for faster crawler HTML on inner pages
- **Core Web Vitals** monitoring in Search Console
- Per-article OG images
- `hreflang` if you add localized sites
