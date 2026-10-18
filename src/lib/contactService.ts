import { CONTACT_EMAIL } from '@/lib/seo'
import type { ContactFormValues } from '@/types'

export type ContactSubmitResult =
  | { ok: true; mode: 'api' | 'email' }
  | { ok: false; error: string }

const API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined

export function isContactBackendConfigured(): boolean {
  return Boolean(API_URL?.trim())
}

export function buildMailtoLink(values: ContactFormValues): string {
  const lines = [`Name: ${values.fullName}`, `Email: ${values.email}`]
  if (values.company) lines.push(`Company: ${values.company}`)
  lines.push(`Service: ${values.service}`)
  if (values.budget) lines.push(`Budget: ${values.budget}`)
  if (values.timeline) lines.push(`Timeline: ${values.timeline}`)
  lines.push('', values.description)
  const subject = `Project enquiry — ${values.company || values.fullName}`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

export async function submitContactEnquiry(values: ContactFormValues): Promise<ContactSubmitResult> {
  if (values.website) {
    return { ok: false, error: 'Submission rejected.' }
  }

  if (!API_URL?.trim()) {
    window.location.href = buildMailtoLink(values)
    return { ok: true, mode: 'email' }
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: values.fullName,
        email: values.email,
        company: values.company,
        service: values.service,
        budget: values.budget,
        timeline: values.timeline,
        description: values.description,
        website: values.website ?? '',
      }),
    })

    if (!response.ok) {
      let detail = ''
      try {
        const body = (await response.json()) as { error?: string }
        if (body.error?.trim()) detail = body.error.trim()
      } catch {
        /* ignore non-JSON */
      }
      return {
        ok: false,
        error:
          detail ||
          `We could not send your message. Please try again or email ${CONTACT_EMAIL} directly.`,
      }
    }

    return { ok: true, mode: 'api' }
  } catch {
    return {
      ok: false,
      error: `Network error. Please check your connection, or email ${CONTACT_EMAIL} directly.`,
    }
  }
}
