import { ArrowRight, Info } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { showcaseTabs } from '@/data/showcase'
import { getServiceBySlug } from '@/data/services'
import type { ShowcaseId } from '@/types'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ConceptMockup } from '@/components/mockups/ConceptMockups'

export function ConceptLabel({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium ${
        tone === 'dark' ? 'bg-white/10 text-[#d5deeb]' : 'bg-surface text-heading ring-1 ring-hairline'
      }`}
    >
      <Info className="h-3.5 w-3.5" aria-hidden="true" />
      Illustrative concept — not a client project
    </span>
  )
}

export function ShowcaseSection() {
  const [active, setActive] = useState<ShowcaseId>(showcaseTabs[0].id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const tab = showcaseTabs.find((t) => t.id === active) ?? showcaseTabs[0]
  const service = getServiceBySlug(tab.relatedService)

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = showcaseTabs.length - 1
    const map: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    if (!(e.key in map)) return
    e.preventDefault()
    const next = showcaseTabs[map[e.key]]
    setActive(next.id)
    tabRefs.current[next.id]?.focus()
  }

  return (
    <section id="solutions" className="section scroll-mt-24 bg-surface" aria-labelledby="showcase-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-brand">Concept lab</p>
            <h2 id="showcase-heading" className="display-lg mt-5 text-balance text-heading">
              Built around real-world complexity.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed text-muted">
              Four illustrative products that show how we think through a problem, from the first
              workflow map to the system behind the screens.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <div
            role="tablist"
            aria-label="Illustrative concepts"
            className="-mx-5 flex gap-1 overflow-x-auto border-b border-hairline px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {showcaseTabs.map((t, i) => {
              const selected = t.id === active
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[t.id] = el
                  }}
                  type="button"
                  role="tab"
                  id={`concept-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`concept-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`relative shrink-0 px-4 py-4 text-[0.9375rem] font-medium whitespace-nowrap transition-colors first:pl-0 ${
                    selected ? 'text-heading' : 'text-muted hover:text-heading'
                  }`}
                >
                  <span className="mr-2 font-mono text-xs text-muted">0{i + 1}</span>
                  {t.label}
                  {selected && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-corporate" aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>

          <div
            key={tab.id}
            id={`concept-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`concept-tab-${tab.id}`}
            tabIndex={0}
            className="motion-safe:motion-opacity-in-0 motion-duration-500 mt-10 grid gap-10 rounded-sm lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-surface-sunken p-4 sm:p-8 lg:p-10">
                <div className="mb-5 sm:mb-6">
                  <ConceptLabel />
                </div>
                <div aria-hidden="true">
                  <ConceptMockup id={tab.id} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="display-md text-balance text-heading">{tab.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{tab.description}</p>

              <dl className="mt-8 divide-y divide-hairline border-y border-hairline">
                <div className="grid gap-2 py-5 sm:grid-cols-[7.5rem_1fr]">
                  <dt className="eyebrow pt-0.5 text-muted">Problem</dt>
                  <dd className="text-body">{tab.problem}</dd>
                </div>
                <div className="grid gap-2 py-5 sm:grid-cols-[7.5rem_1fr]">
                  <dt className="eyebrow pt-0.5 text-muted">Approach</dt>
                  <dd>
                    <ul className="space-y-2 text-body">
                      {tab.approach.map((a) => (
                        <li key={a} className="flex gap-3">
                          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-blue-corporate" aria-hidden="true" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="grid gap-2 py-5 sm:grid-cols-[7.5rem_1fr]">
                  <dt className="eyebrow pt-0.5 text-muted">Potential value</dt>
                  <dd className="font-medium text-heading">{tab.value}</dd>
                </div>
              </dl>

              <p className="mt-6 text-sm text-muted">
                <span className="sr-only">Technologies: </span>
                {tab.technologies.join(' · ')}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
                {service && (
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-brand hover:underline"
                  >
                    {service.shortTitle}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
                <Link to="/work" className="inline-flex items-center gap-1.5 text-heading hover:underline">
                  Explore the Concept Lab
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
