import { LegalDocument } from '@/components/ui/LegalDocument'
import { Seo } from '@/components/ui/Seo'
import { CONTACT_EMAIL } from '@/lib/seo'

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Use"
        description="Terms that apply to your use of the NexSoft Labs website."
        path="/terms"
        noIndex
      />
      <LegalDocument
        title="Terms of Use"
        description="The terms that apply when you use this website."
        sections={[
          {
            heading: 'Website use',
            body: (
              <p>
                This website provides general information about NexSoft Labs and our services. Nothing
                on it is a binding offer; every engagement is governed by a separate written agreement.
              </p>
            ),
          },
          {
            heading: 'Illustrative content',
            body: (
              <p>
                Concept studies, product mockups and example figures on this website are illustrative.
                They do not represent client projects, real companies or guaranteed results.
              </p>
            ),
          },
          {
            heading: 'Intellectual property',
            body: (
              <p>
                The content, design and branding of this website belong to NexSoft Labs unless stated
                otherwise, and may not be reproduced without permission.
              </p>
            ),
          },
          {
            heading: 'Limitation of liability',
            body: (
              <p>
                We work to keep this website accurate and available, but provide it “as is” and, to the
                extent permitted by law, accept no liability for losses arising from its use.
              </p>
            ),
          },
          {
            heading: 'Contact',
            body: (
              <p>
                Questions about these terms can be sent to{' '}
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
