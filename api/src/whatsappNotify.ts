import type { EnquiryValues } from './enquirySchema.js'

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID?.trim()
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN?.trim()
const TWILIO_WHATSAPP_FROM =
  process.env.TWILIO_WHATSAPP_FROM?.trim() || 'whatsapp:+14155238886'
const WHATSAPP_NOTIFY_TO = process.env.WHATSAPP_NOTIFY_TO?.trim()

export function isWhatsAppConfigured(): boolean {
  return Boolean(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && WHATSAPP_NOTIFY_TO)
}

function toWhatsAppAddress(value: string): string {
  const trimmed = value.trim()
  if (trimmed.startsWith('whatsapp:')) return trimmed
  if (trimmed.startsWith('+')) return `whatsapp:${trimmed}`
  return `whatsapp:+${trimmed.replace(/\D/g, '')}`
}

export function formatWhatsAppEnquiry(values: EnquiryValues): string {
  const lines = [
    'New NexSoft Labs enquiry',
    '',
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    values.company ? `Company: ${values.company}` : null,
    `Service: ${values.service}`,
    values.budget ? `Budget: ${values.budget}` : null,
    values.timeline ? `Timeline: ${values.timeline}` : null,
    '',
    values.description.slice(0, 1200),
  ].filter((line): line is string => line !== null)

  return lines.join('\n')
}

/** Sends a WhatsApp message via Twilio. Does not throw; returns success flag. */
export async function sendWhatsAppNotification(body: string): Promise<{ ok: boolean; error?: string }> {
  if (!isWhatsAppConfigured() || !TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !WHATSAPP_NOTIFY_TO) {
    return { ok: false, error: 'not_configured' }
  }

  const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`
  const params = new URLSearchParams({
    From: toWhatsAppAddress(TWILIO_WHATSAPP_FROM),
    To: toWhatsAppAddress(WHATSAPP_NOTIFY_TO),
    Body: body,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[whatsapp] twilio error', response.status, detail)
      return { ok: false, error: `twilio_${response.status}` }
    }

    return { ok: true }
  } catch (error) {
    console.error('[whatsapp] send failed', error)
    return { ok: false, error: 'network' }
  }
}
