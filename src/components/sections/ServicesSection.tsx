import { Link } from 'react-router-dom'
import { featuredServices } from '@/data/services'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'

export function ServicesSection() {
  return (
    <section className="section-padding scroll-mt-28 bg-surface-page" id="services">
      <Container>
        <Reveal>
          <SectionHeading
            title="From first idea to production-ready software."
            description="Practical technology expertise for every stage of your digital journey."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <ServiceCard
                service={service}
                className={i === 0 ? 'lg:row-span-1' : ''}
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          <Link to="/services" className="font-medium text-indigo-brand hover:underline">
            View all service capabilities
          </Link>
        </p>
      </Container>
    </section>
  )
}
