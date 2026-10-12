import { ContactCTA } from '@/components/sections/ContactCTA'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'
import { DEFAULT_TAGLINE } from '@/lib/seo'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="NexSoft Labs is a software consultancy focused on thoughtful engineering, scalable products, and long-term partnership with ambitious businesses."
        path="/about"
      />
      <PageHeader
        eyebrow="About us"
        title="An engineering partner—not just a delivery vendor"
        description={DEFAULT_TAGLINE}
      />
      <Container className="section-padding max-w-3xl">
        <div className="prose prose-slate max-w-none space-y-6 text-muted leading-relaxed">
          <p>
            NexSoft Labs helps businesses turn complex challenges into elegant software. We combine
            product thinking with hands-on engineering across web, mobile, SaaS, cloud, and
            automation—so technology decisions stay aligned with real outcomes.
          </p>
          <p>
            We work with startups validating their first product, growing companies digitizing
            operations, and teams modernizing legacy systems. Our engagements emphasize clarity,
            maintainable architecture, and transparent collaboration from discovery through launch
            and beyond.
          </p>
          <h2 className="text-xl font-semibold text-ink">How we work</h2>
          <p>
            We start by understanding the problem: users, constraints, risks, and what success looks
            like. We then shape an appropriate technical direction—avoiding over-engineering while
            building foundations that can scale. Throughout delivery, we communicate trade-offs openly
            and document decisions your team can build on.
          </p>
          <p>
            Whether you need advisory support, a focused build, or embedded engineers alongside your
            team, we adapt to your context while maintaining a high bar for quality and
            professionalism.
          </p>
        </div>
      </Container>
      <ContactCTA />
    </>
  )
}
