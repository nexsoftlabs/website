import { services } from '@/data/services'
import { PageHeader } from '@/components/ui/PageHeader'
import { Seo } from '@/components/ui/Seo'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Container } from '@/components/ui/Container'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Software consulting, web and mobile development, SaaS engineering, AI automation, and cloud modernization for ambitious businesses."
        path="/services"
      />
      <PageHeader
        eyebrow="What we do"
        title="Engineering services for every stage of your product"
        description="From advisory and architecture to delivery and modernization—we partner as an engineering extension of your team."
      />
      <Container className="section-padding">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </>
  )
}
