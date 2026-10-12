import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Draft privacy policy for NexSoft Labs. Requires legal review before production use."
        path="/privacy"
        noIndex
      />
      <PageHeader
        title="Privacy Policy"
        description="Draft document for business and legal review. Not legal advice."
      />
      <Container className="section-padding max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
        <p className="callout-warning">
          This is a placeholder privacy policy template. NexSoft Labs should have qualified counsel
          review and customize it before publishing as a binding policy.
        </p>
        <section>
          <h2 className="text-lg font-semibold text-ink">Information we collect</h2>
          <p className="mt-2">
            When you submit our contact form, we may collect your name, email address, company name,
            project details, and optional budget or timeline information you choose to provide.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">How we use information</h2>
          <p className="mt-2">
            We use enquiry information to respond to your request, evaluate fit for a potential
            engagement, and communicate about services you expressed interest in.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">Retention and security</h2>
          <p className="mt-2">
            Retention periods and security measures should be defined in your finalized policy and
            aligned with applicable laws and your data processing agreements.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">Contact</h2>
          <p className="mt-2">
            For privacy-related questions, contact{' '}
            <a href="mailto:hello@nexsoftlabs.in" className="text-indigo-brand hover:underline">
              hello@nexsoftlabs.in
            </a>{' '}
            once this address is operational.
          </p>
        </section>
      </Container>
    </>
  )
}
