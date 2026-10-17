# NexSoft contact API

Receives POST requests from the marketing site contact form and delivers them to the NexSoft Gmail inbox.

## Environment variables

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address used to send mail (e.g. `labs.nexsoft@gmail.com`) |
| `GMAIL_APP_PASSWORD` | [Google App Password](https://myaccount.google.com/apppasswords) for that account |
| `CONTACT_INBOX` | Where enquiries are delivered (default: `labs.nexsoft@gmail.com`) |
| `ALLOWED_ORIGINS` | CORS allowlist for the site (include production URL and local dev ports) |

Never commit real passwords. Set secrets only in Render (or local `.env`).

## Local development

```bash
cd api
cp .env.example .env
# Fill GMAIL_APP_PASSWORD in .env
npm install
npm run dev
```

In the website root, set:

```bash
VITE_CONTACT_API_URL=http://localhost:10000/contact
```

## Render (Nexsoft Workspace)

Service **nexsoft-contact-api** is on Render: https://nexsoft-contact-api.onrender.com

In [Render settings](https://dashboard.render.com/web/srv-db9umsmq1p3s739lk810), set:

- **Root directory:** `api` (required — the MCP create step may leave this blank)
- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`
- **Health check path:** `/health`

After deploy, set the website env on Vercel:

```bash
VITE_CONTACT_API_URL=https://<your-service>.onrender.com/contact
```
