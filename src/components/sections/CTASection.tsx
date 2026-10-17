import { Mail } from 'lucide-react'
import { CONTACT_EMAIL } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

interface CTASectionProps {
  title?: string
  text?: string
  ctaLabel?: string
}

export function CTASection({
  title = 'Let’s build what’s next.',
  text = 'Tell us what you’re creating, improving or rethinking. We’ll help you find a practical way forward.',
  ctaLabel = 'Start a Conversation',
}: CTASectionProps) {
  return (
    <section className="bg-navy-radial text-white" aria-labelledby="cta-heading">
      <Container className="py-24 lg:py-36">
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2
              id="cta-heading"
              className="text-[clamp(2.75rem,1.6rem+4.4vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance"
            >
              {title}
            </h2>
            <p className="lede mt-8 max-w-xl text-[#b8c5da]">{text}</p>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-4 lg:items-end">
            <Button to="/contact" size="lg" variant="light" arrow className="w-full sm:w-auto">
              {ctaLabel}
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-[#b8c5da] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
