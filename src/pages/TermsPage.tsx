import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="Draft terms of service for NexSoft Labs. Requires legal review before production use."
        path="/terms"
        noIndex
      />
      <PageHeader
        title="Terms of Service"
        description="Draft document for business and legal review. Not legal advice."
      />
      <Container className="section-padding max-w-3xl space-y-6 text-sm leading-relaxed text-muted">
        <p className="callout-warning">
          This is a placeholder terms template. Engagements are governed by separate written
          agreements. Have legal counsel review before publication.
        </p>
        <section>
          <h2 className="text-lg font-semibold text-ink">Website use</h2>
          <p className="mt-2">
            This website provides information about NexSoft Labs services. Content is for general
            information and does not constitute a binding offer until confirmed in a signed agreement.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">Intellectual property</h2>
          <p className="mt-2">
            Site content, branding, and materials are owned by NexSoft Labs unless otherwise noted.
            Unauthorized reproduction may be prohibited.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink">Limitation of liability</h2>
          <p className="mt-2">
            To the extent permitted by law, NexSoft Labs disclaims warranties regarding website
            availability and accuracy. Liability limitations should be finalized with legal counsel.
          </p>
        </section>
      </Container>
    </>
  )
}
