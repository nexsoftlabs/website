# NexSoft contact API

Receives POST requests from the marketing site contact form and delivers them via [Resend](https://resend.com).

## Resend setup

1. Create an account at [resend.com](https://resend.com) (sign up with `labs.nexsoft@gmail.com` or your team email).
2. **Domains** → add **`nexsoftlabs.in`** → add the DNS records Resend shows (SPF/DKIM) in your domain host.
3. **API Keys** → create a key with **Sending access**.
4. Set on Render ([website-contact-api](https://dashboard.render.com/web/srv-dbaekd67bikc73eb5kmg)):
   - `RESEND_API_KEY` — your key (secret)
   - `RESEND_FROM` — `NexSoft Labs Website <hello@nexsoftlabs.in>` (must match a verified domain)
   - `CONTACT_INBOX` — `labs.nexsoft@gmail.com` (where enquiries land)

**Testing before DNS is verified:** use `RESEND_FROM=onboarding@resend.dev` — Resend only delivers to the email you used to sign up until your domain is verified.

## Environment variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key (required) |
| `RESEND_FROM` | Sender, e.g. `NexSoft Labs Website <hello@nexsoftlabs.in>` |
| `CONTACT_INBOX` | Recipient for form submissions |
| `ALLOWED_ORIGINS` | CORS allowlist for the site |

Never commit API keys. Set secrets only in Render (or local `.env`).

## Local development

```bash
cd api
cp .env.example .env
# Fill RESEND_API_KEY in .env
npm install
npm run dev
```

In the website root:

```bash
VITE_CONTACT_API_URL=http://localhost:10000/contact
```

## Render

Active service **website-contact-api**: https://website-contact-api-vs43.onrender.com

- **Build:** `cd api && npm install && npm run build`
- **Start:** `cd api && npm start`
- **Health:** `/health` → `"mailConfigured": true` when `RESEND_API_KEY` is set

Website env on Vercel:

```bash
VITE_CONTACT_API_URL=https://website-contact-api-vs43.onrender.com/contact
```
