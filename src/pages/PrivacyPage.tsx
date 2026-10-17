import { LegalDocument } from '@/components/ui/LegalDocument'
import { Seo } from '@/components/ui/Seo'
import { CONTACT_EMAIL } from '@/lib/seo'

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How NexSoft Labs handles information you share through this website."
        path="/privacy"
        noIndex
      />
      <LegalDocument
        title="Privacy Policy"
        description="How we handle the information you share with us through this website."
        sections={[
          {
            heading: 'Information we collect',
            body: (
              <p>
                When you contact us, we receive the details you choose to share: typically your name,
                email address, company, the service you are interested in, and any project, budget or
                timeline information you include.
              </p>
            ),
          },
          {
            heading: 'How we use it',
            body: (
              <p>
                We use this information only to respond to your enquiry, understand whether we can help,
                and communicate with you about a potential engagement. We do not sell your information.
              </p>
            ),
          },
          {
            heading: 'Retention and security',
            body: (
              <p>
                We keep enquiry information only as long as it is needed for these purposes and take
                reasonable steps to protect it. Specific retention periods will be confirmed in the
                finalized policy.
              </p>
            ),
          },
          {
            heading: 'Your choices',
            body: (
              <p>
                You can ask us to access, correct or delete the information you have shared with us at
                any time by emailing us.
              </p>
            ),
          },
          {
            heading: 'Contact',
            body: (
              <p>
                For privacy questions, email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  )
}
