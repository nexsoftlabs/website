import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail } from 'lucide-react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { isContactBackendConfigured, submitContactEnquiry } from '@/lib/contactService'
import { CONTACT_EMAIL } from '@/lib/seo'
import {
  contactFormSchema,
  contactServiceOptions,
  serviceSlugToOption,
  type ContactFormSchema,
} from '@/lib/validation'
import { Container } from '@/components/ui/Container'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { FloatingSelect } from '@/components/ui/FloatingSelect'
import { FloatingTextarea } from '@/components/ui/FloatingTextarea'
import { FadeIn } from '@/components/motion/FadeIn'
import { Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { Seo } from '@/components/ui/Seo'

const nextSteps = [
  { title: 'We read your message', text: 'Your goals, constraints and context help us understand where you are today.' },
  { title: 'We reply with questions', text: 'Expect thoughtful follow-ups and, where helpful, a suggestion for a short call.' },
  { title: 'We suggest a first step', text: 'If there is a fit, we outline a practical, clearly scoped first phase.' },
]

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMode, setSuccessMode] = useState<'api' | 'email' | null>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const backendConfigured = isContactBackendConfigured()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: serviceSlugToOption[searchParams.get('service') ?? ''] ?? 'Not sure yet',
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
      if (result.mode === 'api') reset()
      requestAnimationFrame(() => statusRef.current?.focus())
    } else {
      setSubmitState('error')
      setErrorMessage(result.error)
    }
  })

  const serviceOptions = contactServiceOptions.map((value) => ({ value, label: value }))

  return (
    <>
      <Seo
        title="Contact"
        description="Start a conversation with NexSoft Labs about your software project, modernization initiative or product roadmap."
        path="/contact"
      />
      <PageHero
        breadcrumbs={[{ label: 'Contact' }]}
        eyebrow="Contact"
        title="Let’s talk about what you’re building."
        description="Share a little about your goals and constraints. The more context you give, the more useful our first reply will be."
      />

      <section className="bg-canvas py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <div className="contact-panel">
                {submitState === 'success' ? (
                  <FadeIn>
                  <div ref={statusRef} tabIndex={-1} role="status" className="outline-none">
                    <h2 className="display-md text-heading">
                      {successMode === 'api' ? 'Thank you—your message is on its way.' : 'Almost done—please send the email.'}
                    </h2>
                    {successMode === 'api' ? (
                      <p className="mt-4 leading-relaxed text-muted">
                        We received your enquiry and will reply to the email address you provided.
                      </p>
                    ) : (
                      <p className="mt-4 leading-relaxed text-muted">
                        We opened your email app with your message ready to send to{' '}
                        <strong className="font-medium text-heading">{CONTACT_EMAIL}</strong>. Your
                        enquiry is only delivered once you press send. If nothing opened, email us
                        directly at the same address.
                      </p>
                    )}
                    <button
                      type="button"
                      className="mt-6 text-sm font-medium text-brand hover:underline"
                      onClick={() => setSubmitState('idle')}
                    >
                      {successMode === 'api' ? 'Send another message' : 'Back to the form'}
                    </button>
                  </div>
                  </FadeIn>
                ) : (
                  <form onSubmit={onSubmit} className="flyon-form space-y-5" noValidate aria-labelledby="form-heading">
                    <h2 id="form-heading" className="text-xl font-semibold text-heading">
                      Tell us about your project
                    </h2>
                    <p className="text-sm text-muted">Fields marked * are required.</p>
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FloatingInput
                        label="Full name *"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        error={errors.fullName?.message}
                        {...register('fullName')}
                      />
                      <FloatingInput
                        label="Work email *"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FloatingInput
                        label="Company"
                        placeholder="Company name"
                        autoComplete="organization"
                        {...register('company')}
                      />
                      <FloatingSelect label="What do you need help with? *" options={serviceOptions} required {...register('service')} />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FloatingInput label="Estimated budget" placeholder="A range, or not sure yet" {...register('budget')} />
                      <FloatingInput label="Ideal timeline" placeholder="e.g. within three months" {...register('timeline')} />
                    </div>

                    <FloatingTextarea
                      label="Project details *"
                      placeholder="What are you trying to achieve, who will use it, and what is in the way today?"
                      required
                      error={errors.description?.message}
                      {...register('description')}
                    />

                    <div>
                      <label className="flex items-start gap-3 text-sm text-muted">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary mt-0.5"
                          aria-invalid={Boolean(errors.consent)}
                          aria-describedby={errors.consent ? 'consent-error' : undefined}
                          {...register('consent')}
                        />
                        <span>
                          I agree to NexSoft Labs using these details to respond to my enquiry, as
                          described in the{' '}
                          <Link to="/privacy" className="font-medium text-brand underline-offset-2 hover:underline">
                            Privacy Policy
                          </Link>
                          . *
                        </span>
                      </label>
                      {errors.consent && (
                        <p id="consent-error" className="helper-text mt-1 ps-1 text-error" role="alert">
                          {errors.consent.message}
                        </p>
                      )}
                    </div>

                    {submitState === 'error' && (
                      <p className="helper-text text-error" role="alert">
                        {errorMessage}
                      </p>
                    )}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={submitState === 'loading'}
                        className="btn-animate inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-corporate px-6 text-[0.9375rem] font-medium text-white shadow-[0_1px_2px_rgb(11_23_48/0.08),0_4px_12px_-4px_rgb(23_70_162/0.35)] transition-[color,background-color,transform,box-shadow] duration-300 hover:bg-blue-corporate-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-corporate disabled:opacity-60"
                      >
                        {submitState === 'loading' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                        {backendConfigured ? 'Send enquiry' : 'Continue in email app'}
                      </button>
                      {!backendConfigured && (
                        <p className="text-xs text-muted">Opens your email app with your message pre-filled.</p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
            <aside aria-label="Contact information">
              <h2 className="eyebrow text-muted">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="font-mono text-xs leading-6 text-muted">0{i + 1}</span>
                    <div>
                      <p className="font-semibold text-heading">{s.title}</p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border-t border-hairline pt-8">
                <h2 className="eyebrow text-muted">Prefer email?</h2>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-4 inline-flex items-center gap-2.5 text-lg font-medium text-heading hover:text-brand"
                >
                  <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="mt-10 rounded-xl border border-hairline bg-surface p-6">
                <p className="font-semibold text-heading">Helpful to include</p>
                <ul className="mt-3 space-y-2 text-[0.9375rem] text-muted">
                  <li>What the software needs to do, and for whom</li>
                  <li>Any existing systems or code involved</li>
                  <li>Deadlines or constraints we should know about</li>
                </ul>
              </div>
            </aside>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
