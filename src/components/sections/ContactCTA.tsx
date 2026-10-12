import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-midnight py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgb(99 91 255 / 0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgb(69 214 232 / 0.2), transparent 40%)',
        }}
      />
      <svg
        className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 text-white/5"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path d="M20 180 L100 20 L180 100 L100 180 Z" fill="currentColor" />
      </svg>
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Have a challenge worth solving?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Tell us what you&apos;re building, what needs to improve, or where technology could
              take your business next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact">Start a Conversation</Button>
              <Button to="/services" variant="outline-light">Explore Our Services</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
