import { ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { faqItems } from '@/data/faq'
import type { FaqItem } from '@/types'
import { Accordion } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function FaqStructuredData({ items }: { items: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

export function FAQSection() {
  return (
    <section className="section bg-surface" aria-labelledby="faq-heading">
      <FaqStructuredData items={faqItems} />
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-brand">FAQ</p>
            <h2 id="faq-heading" className="display-lg mt-5 text-balance text-heading">
              Questions worth asking.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Straight answers to what most teams want to know before starting a software project.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Ask us something else
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <Accordion items={faqItems} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
