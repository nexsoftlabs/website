# NexSoft Labs Website

Production-quality marketing site for [NexSoft Labs](https://nexsoftlabs.in) — software consultancy and digital product engineering.

## Stack

- React 19 + TypeScript (strict)
- Vite
- Tailwind CSS 4 + FlyonUI 2.x
- React Router
- Framer Motion, Lucide React
- React Hook Form + Zod
- react-helmet-async for SEO metadata

## Getting started

```bash
cd website
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Local development server             |
| `npm run build`| Production build + TypeScript check  |
| `npm run preview` | Preview production build          |
| `npm run lint` | Oxlint                               |

## Environment variables

Copy `.env.example` to `.env.local` (not committed):

- **`VITE_CONTACT_API_URL`** — HTTPS endpoint that accepts JSON POST enquiries from the browser. Implement server-side validation, rate limiting, and email delivery (e.g. Resend, SendGrid, or your API).
- **`VITE_CONTACT_MOCK`** — When `true`, submissions are mocked even outside dev (use only for demos).

### Contact form behavior

| Environment | `VITE_CONTACT_API_URL` | Result |
|-------------|--------------------------|--------|
| Development | unset                    | Mock mode — console log only, UI explains this |
| Production  | set                      | POST to your API |
| Production  | unset                    | Submission fails with a clear message |

Never embed API keys in frontend env vars. Secrets belong on the server.

## Deployment

This is a client-rendered SPA. For direct navigation to routes (e.g. `/services/web-development`), configure your host to rewrite all paths to `index.html`.

### Vercel (nexsoft-labs team)

Connect the repo and set the root directory to `website`. Vercel adds SPA rewrites automatically for Vite.

### Static hosting

After `npm run build`, deploy the `dist/` folder. Example Apache/nginx: serve `index.html` for unknown paths.

### Production domain

1. Point DNS for `nexsoftlabs.in` to your host.
2. Enable HTTPS.
3. Set canonical URLs in `src/lib/seo.ts` if the domain differs.
4. Update `public/sitemap.xml` and `public/robots.txt` if needed.

## Placeholders requiring real information

- [ ] Verified `hello@nexsoftlabs.in` mailbox and contact form backend
- [ ] LinkedIn and GitHub URLs in the footer
- [ ] Privacy Policy and Terms reviewed by legal counsel
- [ ] Organization structured data (address/phone only if accurate)
- [ ] Social profiles and OG image assets (optional PNG upgrade from SVG)
- [ ] Analytics (only with disclosure and consent if required)

## Project structure

See `src/app`, `src/pages`, `src/components`, and `src/data` for routes, sections, and content.

## SEO note

Metadata is managed client-side via react-helmet-async. For maximum crawlability, consider prerendering or SSR in a future iteration; it is not enabled in this build.
