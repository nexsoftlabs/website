import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const PORT = Number(process.env.PORT) || 10000
const INBOX = process.env.CONTACT_INBOX?.trim() || 'labs.nexsoft@gmail.com'
const GMAIL_USER = process.env.GMAIL_USER?.trim()
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD?.trim()

const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ??
  'https://nexsoftlabs.in,https://www.nexsoftlabs.in,http://localhost:5173,http://localhost:5180'
)
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

const enquirySchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional(),
  service: z.string().trim().min(1).max(80),
  budget: z.string().trim().max(80).optional(),
  timeline: z.string().trim().max(80).optional(),
  description: z.string().trim().min(20).max(4000),
  website: z.string().max(0).optional(),
})

function formatEnquiry(values: z.infer<typeof enquirySchema>): { text: string; html: string } {
  const lines = [
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Service: ${values.service}`,
    values.budget ? `Budget: ${values.budget}` : null,
    values.timeline ? `Timeline: ${values.timeline}` : null,
    '',
    values.description,
  ].filter((line): line is string => line !== null)

  const text = lines.join('\n')
  const html = lines
    .map((line) => (line === '' ? '<br/>' : `<p style="margin:0 0 8px">${escapeHtml(line)}</p>`))
    .join('')

  return { text, html }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const app = express()
app.set('trust proxy', 1)

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
)

app.use(express.json({ limit: '32kb' }))

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    mailConfigured: Boolean(GMAIL_USER && GMAIL_APP_PASSWORD),
    inbox: INBOX,
  })
})

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many enquiries. Please try again later or email us directly.' },
})

app.post('/contact', contactLimiter, async (req, res) => {
  const parsed = enquirySchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'Please check the form and try again.' })
    return
  }

  if (parsed.data.website) {
    res.status(400).json({ error: 'Submission rejected.' })
    return
  }

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    res.status(503).json({ error: 'Contact delivery is not configured on the server.' })
    return
  }

  const subject = `Project enquiry — ${parsed.data.company || parsed.data.fullName}`
  const { text, html } = formatEnquiry(parsed.data)

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"NexSoft Labs Website" <${GMAIL_USER}>`,
      to: INBOX,
      replyTo: parsed.data.email,
      subject,
      text,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#0b1730">${html}</div>`,
    })

    res.json({ ok: true })
  } catch (error) {
    console.error('[contact] send failed', error)
    res.status(500).json({ error: 'We could not send your message. Please try again later.' })
  }
})

app.listen(PORT, () => {
  console.info(`Contact API listening on port ${PORT}`)
})
