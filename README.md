# NexSoft Labs Website

Production-quality marketing site for [NexSoft Labs](https://nexsoftlabs.in) — software consultancy and digital product engineering.

## Stack

- React 19 + TypeScript (strict)
- Vite
- Tailwind CSS 4 + FlyonUI (form primitives)
- React Router
- Lucide React
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

- **`VITE_CONTACT_API_URL`** — HTTPS URL of the contact API (`/contact` on the Render service in `api/`). When set, submissions are emailed to **`labs.nexsoft@gmail.com`**. See `api/README.md` for Gmail App Password setup on Render.

### Contact form behavior

| `VITE_CONTACT_API_URL` | Result |
|------------------------|--------|
| Set                    | The browser POSTs the enquiry. On success, the message is delivered to the NexSoft Gmail inbox. |
| Unset                  | The form opens the visitor’s email app with a message to `hello@nexsoftlabs.in` already filled in. Nothing is sent until they press send, and the page says so. |

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

## Still needs owner confirmation

- [ ] Render env `GMAIL_APP_PASSWORD` for `labs.nexsoft@gmail.com`, then `VITE_CONTACT_API_URL` on Vercel pointing at the deployed `api/` service.
- [ ] Privacy Policy and Terms reviewed by counsel. Both pages are drafts and are `noindex`.
- [ ] FAQ answer on code and IP ownership (“the code we create for you belongs to you”).
- [ ] Technology list on the homepage, including the mobile stack and the cloud FAQ mention of AWS.
- [ ] Analytics, only with disclosure and consent if required.

## Project structure

See `src/app`, `src/pages`, `src/components`, and `src/data` for routes, sections, and content.

## SEO note

Metadata is managed client-side via react-helmet-async. For maximum crawlability, consider prerendering or SSR in a future iteration; it is not enabled in this build.
