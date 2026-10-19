import { BusinessValueSection } from '@/components/sections/BusinessValueSection'
import { CTASection } from '@/components/sections/CTASection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { TechnologySection } from '@/components/sections/TechnologySection'
import { WhySection } from '@/components/sections/WhySection'
import { OrganizationStructuredData, WebSiteStructuredData } from '@/components/StructuredData'
import { Seo } from '@/components/ui/Seo'
import { DEFAULT_DESCRIPTION, SITE_NAME } from '@/lib/seo'

export function HomePage() {
  return (
    <>
      <Seo title={SITE_NAME} description={DEFAULT_DESCRIPTION} path="/" />
      <OrganizationStructuredData />
      <WebSiteStructuredData />
      <HeroSection />
      <BusinessValueSection />
      <ExpertiseSection />
      <ShowcaseSection />
      <ProcessSection />
      <WhySection />
      <TechnologySection />
      <InsightsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
