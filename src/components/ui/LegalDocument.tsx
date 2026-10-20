import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'

interface LegalDocumentProps {
  title: string
  description: string
  sections: { heading: string; body: ReactNode }[]
  /** Optional draft disclaimer (e.g. Terms while legal review is in progress). */
  showDraftNotice?: boolean
}

export function LegalDocument({ title, description, sections, showDraftNotice }: LegalDocumentProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={description} />
      <section className="bg-surface pb-24">
        <Container>
          <div className="max-w-3xl space-y-10 pt-12 text-[1.0625rem] leading-[1.75] text-body">
            {showDraftNotice && (
              <p className="rounded-lg border border-hairline bg-canvas px-5 py-4 text-sm text-muted">
                This document is a working draft and is being reviewed before it is finalized. If you
                have a question about it, please contact us.
              </p>
            )}
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-semibold tracking-[-0.015em] text-heading">{s.heading}</h2>
                <div className="mt-3 space-y-4">{s.body}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
