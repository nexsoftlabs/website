import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { isContactBackendConfigured, submitContactEnquiry } from '@/lib/contactService'
import {
  contactFormSchema,
  contactServiceOptions,
  type ContactFormSchema,
} from '@/lib/validation'
import { Container } from '@/components/ui/Container'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { FloatingSelect } from '@/components/ui/FloatingSelect'
import { FloatingTextarea } from '@/components/ui/FloatingTextarea'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function ContactPage() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMode, setSuccessMode] = useState<'api' | 'mock' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: 'Software Consulting',
      consent: false,
      website: '',
    },
  })

  const onSubmit = handleSubmit(async (values) => {
    setSubmitState('loading')
    setErrorMessage('')
    const result = await submitContactEnquiry(values)
    if (result.ok) {
      setSubmitState('success')
      setSuccessMode(result.mode)
      reset()
    } else {
      setSubmitState('error')
      setErrorMessage(result.error)
    }
  })

  const backendConfigured = isContactBackendConfigured()
  const serviceOptions = contactServiceOptions.map((value) => ({ value, label: value }))

  return (
    <>
      <Seo
        title="Contact"
        description="Start a conversation with NexSoft Labs about your software project, modernization initiative, or product roadmap."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Share a little about your goals, and let's explore the right way forward."
      />
      <Container className="section-padding max-w-2xl">
        {!backendConfigured && (
          <p className="callout-warning mb-8">
            <strong>Development note:</strong> No contact API is configured. In development, submissions
            use mock mode and are logged to the console only—they are not delivered. Set{' '}
            <code>VITE_CONTACT_API_URL</code> for production delivery.
          </p>
        )}

        {submitState === 'success' ? (
          <div className="callout-success" role="status">
            <h2 className="text-lg font-semibold">Thank you for reaching out</h2>
            {successMode === 'mock' ? (
              <p className="mt-2 text-sm">
                Your message was recorded in development mock mode only and was not emailed or stored
                on a server.
              </p>
            ) : (
              <p className="mt-2 text-sm">
                We received your enquiry and will follow up using the email you provided.
              </p>
            )}
            <button
              type="button"
              className="mt-4 text-sm font-medium text-indigo-brand hover:underline"
              onClick={() => setSubmitState('idle')}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flyon-form space-y-5" noValidate>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
            </div>

            <FloatingInput
              label="Full name"
              placeholder="John Doe"
              autoComplete="name"
              required
              error={errors.fullName?.message}
              {...register('fullName')}
            />

            <FloatingInput
              label="Work email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
              error={errors.email?.message}
              {...register('email')}
            />

            <FloatingInput
              label="Company name (optional)"
              placeholder="Acme Inc."
              autoComplete="organization"
              {...register('company')}
            />

            <FloatingSelect
              label="Service of interest"
              options={serviceOptions}
              required
              {...register('service')}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <FloatingInput
                label="Estimated budget (optional)"
                placeholder="Range or TBD"
                {...register('budget')}
              />
              <FloatingInput
                label="Project timeline (optional)"
                placeholder="Q3 2026"
                {...register('timeline')}
              />
            </div>

            <FloatingTextarea
              label="Project description"
              placeholder="Goals, users, and constraints"
              required
              error={errors.description?.message}
              {...register('description')}
            />

            <div>
              <label className="flex items-start gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mt-1"
                  {...register('consent')}
                />
                <span>
                  I agree to the processing of my information as described in the{' '}
                  <Link to="/privacy" className="font-medium text-indigo-brand hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="helper-text mt-1 ps-1 text-error" role="alert">
                  {errors.consent.message}
                </p>
              )}
            </div>

            {submitState === 'error' && (
              <p className="helper-text text-error" role="alert">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={submitState === 'loading'}
              className="btn btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              {submitState === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit enquiry
            </button>
          </form>
        )}

        <p className="mt-10 text-sm text-muted">
          Prefer email?{' '}
          <a href="mailto:hello@nexsoftlabs.in" className="font-medium text-indigo-brand hover:underline">
            hello@nexsoftlabs.in
          </a>{' '}
          (proposed address—verify before relying on it in production.)
        </p>
      </Container>
    </>
  )
}
