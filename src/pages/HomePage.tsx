import { ContactCTA } from '@/components/sections/ContactCTA'
import { FAQSection } from '@/components/sections/FAQSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { TechnologySection } from '@/components/sections/TechnologySection'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { WhySection } from '@/components/sections/WhySection'
import { OrganizationStructuredData } from '@/components/StructuredData'
import { Seo } from '@/components/ui/Seo'
import { DEFAULT_DESCRIPTION, SITE_NAME } from '@/lib/seo'

export function HomePage() {
  return (
    <>
      <Seo title={SITE_NAME} description={DEFAULT_DESCRIPTION} path="/" />
      <OrganizationStructuredData />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <ShowcaseSection />
      <WhySection />
      <ProcessSection />
      <PortfolioSection />
      <TechnologySection />
      <InsightsSection />
      <FAQSection />
      <ContactCTA />
    </>
  )
}
