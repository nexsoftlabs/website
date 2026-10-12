import { Container } from '@/components/ui/Container'

interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <div className="border-b border-border-light bg-surface-elevated py-14 md:py-16">
      <Container className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-brand uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
        )}
      </Container>
    </div>
  )
}
