import type { ContactFormValues } from '@/types'

export type ContactSubmitResult =
  | { ok: true; mode: 'api' | 'mock' }
  | { ok: false; error: string }

const API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined
const MOCK_MODE = import.meta.env.VITE_CONTACT_MOCK === 'true'

export function isContactBackendConfigured(): boolean {
  return Boolean(API_URL?.trim())
}

export async function submitContactEnquiry(
  values: ContactFormValues,
): Promise<ContactSubmitResult> {
  if (values.website) {
    return { ok: false, error: 'Submission rejected.' }
  }

  if (API_URL?.trim()) {
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
        }),
      })

      if (!response.ok) {
        return {
          ok: false,
          error: 'We could not send your message. Please try again or email us directly.',
        }
      }

      return { ok: true, mode: 'api' }
    } catch {
      return {
        ok: false,
        error: 'Network error. Please check your connection and try again.',
      }
    }
  }

  if (import.meta.env.DEV || MOCK_MODE) {
    await new Promise((r) => setTimeout(r, 800))
    console.info('[contact mock] enquiry received (not delivered):', {
      ...values,
      consent: values.consent,
    })
    return { ok: true, mode: 'mock' }
  }

  return {
    ok: false,
    error:
      'Contact delivery is not configured yet. Please reach out via hello@nexsoftlabs.in when available.',
  }
}
