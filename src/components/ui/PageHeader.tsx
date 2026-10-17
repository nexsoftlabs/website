import { Container } from '@/components/ui/Container'

interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
}

/** Light, compact header for utility pages such as legal documents. */
export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <div className="border-b border-hairline bg-surface">
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow text-brand">{eyebrow}</p>}
          <h1 className="display-md mt-4 text-heading">{title}</h1>
          {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
        </div>
      </Container>
    </div>
  )
}
