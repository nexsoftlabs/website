import { Container } from '@/components/ui/Container'

const principles = [
  {
    title: 'Business-first thinking',
    text: 'Technology choices follow outcomes, constraints, and measurable goals—not trends.',
  },
  {
    title: 'Thoughtful engineering',
    text: 'We favor clarity, maintainability, and quality practices over shortcuts.',
  },
  {
    title: 'Scalable architecture',
    text: 'Systems are designed to grow with your users, data, and team.',
  },
  {
    title: 'Transparent collaboration',
    text: 'You stay informed on progress, trade-offs, and decisions that matter.',
  },
]

export function ValueProposition() {
  return (
    <section className="border-y border-border-light bg-surface-elevated py-12 md:py-14">
      <Container>
        <h2 className="text-center text-xl font-semibold text-ink md:text-2xl">
          Technology should move your business forward.
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <li key={item.title}>
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
