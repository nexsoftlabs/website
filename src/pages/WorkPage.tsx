import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getServiceBySlug } from '@/data/services'
import { showcaseTabs } from '@/data/showcase'
import { ConceptMockup } from '@/components/mockups/ConceptMockups'
import { CTASection } from '@/components/sections/CTASection'
import { ConceptLabel } from '@/components/sections/ShowcaseSection'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Seo } from '@/components/ui/Seo'

export function WorkPage() {
  return (
    <>
      <Seo
        title="Concept Lab"
        description="Illustrative concept studies showing how NexSoft Labs approaches operations platforms, SaaS products, mobile portals and AI document workflows."
        path="/work"
      />
      <PageHero
        eyebrow="Work · Concept Lab"
        title="How we think, shown through four concept studies."
        description="Each study below is an illustrative concept, not a client engagement. Companies, names and figures are fictional; the problems, approaches and engineering decisions are the kind we work through every day."
      >
        <nav aria-label="Concept studies">
          <ol className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {showcaseTabs.map((c, i) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="text-[#b8c5da] hover:text-white">
                  <span className="mr-1.5 font-mono text-xs text-[#7d8fae]">0{i + 1}</span>
                  {c.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageHero>

      {showcaseTabs.map((concept, i) => {
        const service = getServiceBySlug(concept.relatedService)
        const flip = i % 2 === 1
        return (
          <section
            key={concept.id}
            id={concept.id}
            className={`section scroll-mt-16 ${i % 2 === 0 ? 'bg-surface' : 'bg-canvas'}`}
            aria-labelledby={`${concept.id}-title`}
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
                <Reveal className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                  <div className={`rounded-2xl p-4 sm:p-8 lg:p-10 ${i % 2 === 0 ? 'bg-surface-sunken' : 'bg-surface'}`}>
                    <div className="mb-6">
                      <ConceptLabel />
                    </div>
                    <div aria-hidden="true">
                      <ConceptMockup id={concept.id} />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1} className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                  <p className="font-mono text-xs text-muted">
                    Study 0{i + 1} · {concept.label}
                  </p>
                  <h2 id={`${concept.id}-title`} className="display-md mt-4 text-balance text-heading">
                    {concept.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">{concept.description}</p>

                  <dl className="mt-8 space-y-7">
                    <div>
                      <dt className="eyebrow text-muted">The problem</dt>
                      <dd className="mt-2 text-body">{concept.problem}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-muted">Our approach</dt>
                      <dd className="mt-3">
                        <ol className="space-y-2.5 text-body">
                          {concept.approach.map((a, n) => (
                            <li key={a} className="grid grid-cols-[1.75rem_1fr]">
                              <span className="font-mono text-xs leading-6 text-muted">{n + 1}.</span>
                              {a}
                            </li>
                          ))}
                        </ol>
                      </dd>
                    </div>
                    <div className="border-l-2 border-blue-corporate pl-5">
                      <dt className="eyebrow text-muted">Potential value</dt>
                      <dd className="mt-2 font-medium text-heading">{concept.value}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 grid gap-6 border-t border-hairline pt-6 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-medium text-heading">Applies to</p>
                      <p className="mt-1.5 leading-relaxed text-muted">{concept.useCases.join(', ')}</p>
                    </div>
                    <div>
                      <p className="font-medium text-heading">Typical stack</p>
                      <p className="mt-1.5 leading-relaxed text-muted">{concept.technologies.join(', ')}</p>
                    </div>
                  </div>

                  {service && (
                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                    >
                      {service.shortTitle}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </Reveal>
              </div>
            </Container>
          </section>
        )
      })}

      <CTASection
        title="Facing a problem like one of these?"
        text="Tell us what you are working with today. We’ll share how we would approach it and what a sensible first phase could look like."
      />
    </>
  )
}
