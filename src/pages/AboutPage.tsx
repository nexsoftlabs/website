import { Building2, FileText, PackageCheck, Rocket, Scale, Search, Users } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { Container } from '@/components/ui/Container'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Seo } from '@/components/ui/Seo'

const beliefIcons = [Search, Scale, FileText, PackageCheck]
const partnerIcons = [Rocket, Building2, Users]

const beliefs = [
  {
    title: 'Understand before we build',
    text: 'Every engagement starts with the business: who uses the system, what it must change and what constraints are real. Code comes after that picture is clear.',
  },
  {
    title: 'Simple until proven otherwise',
    text: 'We choose the least complex architecture that meets today’s needs and leaves room for tomorrow’s. Complexity has to earn its place.',
  },
  {
    title: 'Decisions you can read later',
    text: 'Architecture choices, trade-offs and risks are written down in plain language, so your team understands why the system looks the way it does.',
  },
  {
    title: 'Built to be handed over',
    text: 'Clean repositories, documentation and deployment pipelines mean the software stays maintainable—whether by us, your team or someone new.',
  },
]

const partners = [
  {
    title: 'Founders and startups',
    text: 'Turning an idea into a focused first release, with foundations that will not need rebuilding at the first sign of traction.',
  },
  {
    title: 'Growing businesses',
    text: 'Replacing spreadsheets, disconnected tools and manual handoffs with software designed around how the business actually runs.',
  },
  {
    title: 'Established teams',
    text: 'Adding senior engineering capacity, modernizing aging systems or bringing an outside view to an architecture decision.',
  },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="NexSoft Labs is a software engineering consultancy focused on thoughtful architecture, maintainable products and long-term partnership with ambitious businesses."
        path="/about"
      />
      <PageHero
        breadcrumbs={[{ label: 'About' }]}
        eyebrow="About NexSoft Labs"
        title="An engineering partner, not just a delivery vendor."
        description="We help businesses turn complex operational and product challenges into clear, reliable software—combining product thinking with hands-on engineering across web, mobile, SaaS, cloud and automation."
      />

      <section className="section bg-surface" aria-labelledby="mission-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-brand">Our mission</p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-8">
              <h2 id="mission-heading" className="display-md text-balance text-heading">
                To make software a dependable advantage for the businesses that rely on it—not a
                source of risk, rework or confusion.
              </h2>
              <div className="mt-8 grid gap-6 text-[1.0625rem] leading-relaxed text-muted md:grid-cols-2">
                <p>
                  Too many software projects fail quietly: the product ships, but it is hard to
                  change, poorly understood and disconnected from the problem it was meant to solve.
                </p>
                <p>
                  NexSoft Labs exists to do the opposite. We keep engineering anchored to business
                  outcomes, explain our reasoning, and build systems that remain useful long after
                  launch.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-canvas" aria-labelledby="beliefs-heading">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand">How we think</p>
            <h2 id="beliefs-heading" className="display-md mt-4 text-heading">
              Principles that shape every engagement.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            {beliefs.map((b, i) => (
              <Reveal as="li" key={b.title} delay={0.05 * i} className="h-full">
                <FeatureCard icon={beliefIcons[i]} index={i} title={b.title} text={b.text} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="partners-heading">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-brand">Who we work with</p>
            <h2 id="partners-heading" className="display-md mt-4 text-heading">
              Businesses at different stages, with the same need for clarity.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {partners.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.06 * i} className="h-full">
                <FeatureCard icon={partnerIcons[i]} index={i} title={p.title} text={p.text} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessSection />

      <CTASection
        title="Let’s see if we’re a good fit."
        text="A first conversation is about understanding your situation—no pitch deck, no obligation. If we are not the right partner, we’ll tell you."
      />
    </>
  )
}
