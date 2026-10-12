import { useState } from 'react'
import { showcaseTabs } from '@/data/showcase'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

function ShowcaseMockup({ tabId }: { tabId: string }) {
  const base = 'h-full min-h-[220px] rounded-xl border border-border-light bg-gradient-to-br p-4'
  if (tabId === 'web') {
    return (
      <div className={`${base} from-indigo-brand/10 to-off-white`}>
        <div className="grid h-full grid-cols-4 gap-2">
          <div className="col-span-1 space-y-2 rounded-lg bg-surface-elevated p-2 shadow-sm">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 rounded bg-border-light" />
            ))}
          </div>
          <div className="col-span-3 rounded-lg bg-surface-elevated p-3 shadow-sm">
            <div className="h-3 w-24 rounded bg-indigo-brand/30" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 rounded-lg bg-surface-page" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (tabId === 'saas') {
    return (
      <div className={`${base} from-violet-brand/10 to-off-white`}>
        <div className="flex h-full flex-col rounded-lg bg-surface-elevated p-3 shadow-sm">
          <div className="flex justify-between">
            <div className="h-2 w-20 rounded bg-ink/20" />
            <div className="h-5 w-16 rounded-full bg-indigo-brand/20" />
          </div>
          <div className="mt-4 flex-1 rounded-lg border border-dashed border-border-light" />
        </div>
      </div>
    )
  }
  if (tabId === 'mobile') {
    return (
      <div className={`${base} flex items-center justify-center from-cyan-brand/10 to-off-white`}>
        <div className="h-[200px] w-[110px] rounded-[1.25rem] border-4 border-border-light bg-surface-elevated p-2 shadow-md">
          <div className="h-full rounded-xl bg-surface-page p-2">
            <div className="h-2 w-12 rounded bg-indigo-brand/30" />
            <div className="mt-3 space-y-2">
              <div className="h-8 rounded-lg bg-surface-elevated shadow-sm" />
              <div className="h-8 rounded-lg bg-surface-elevated shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`${base} from-cyan-brand/15 to-indigo-brand/5`}>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-surface-elevated p-2 shadow-sm">
            <div className="h-6 w-6 rounded bg-cyan-brand/30" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-full rounded bg-border-light" />
              <div className="h-1.5 w-2/3 rounded bg-border-light" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ShowcaseSection() {
  const [active, setActive] = useState(showcaseTabs[0].id)
  const tab = showcaseTabs.find((t) => t.id === active) ?? showcaseTabs[0]

  return (
    <section className="section-padding scroll-mt-28 bg-surface-elevated" id="solutions">
      <Container>
        <Reveal>
          <SectionHeading
            title="One engineering partner. Multiple possibilities."
            description="Explore illustrative concepts across web, SaaS, mobile, and automation—labeled as concepts, not client deliveries."
            align="center"
          />
        </Reveal>

        <div className="mt-12">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Engineering showcase categories"
          >
            {showcaseTabs.map((t) => {
              const selected = t.id === active
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => {
                    const idx = showcaseTabs.findIndex((x) => x.id === t.id)
                    if (e.key === 'ArrowRight') {
                      const next = showcaseTabs[(idx + 1) % showcaseTabs.length]
                      setActive(next.id)
                    }
                    if (e.key === 'ArrowLeft') {
                      const prev = showcaseTabs[(idx - 1 + showcaseTabs.length) % showcaseTabs.length]
                      setActive(prev.id)
                    }
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selected
                      ? 'bg-indigo-brand text-white shadow-sm'
                      : 'bg-surface-inset text-muted hover:text-ink'
                  }`}
                >
                  {t.label}
                </button>
              )
            })}
          </div>

          <div
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <p className="text-xs font-semibold tracking-wide text-indigo-brand uppercase">
                Illustrative concept
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">{tab.title}</h3>
              <p className="mt-4 text-muted leading-relaxed">{tab.description}</p>
              <div className="mt-6">
                <p className="text-sm font-medium text-ink">Example use cases</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {tab.useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {tab.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border-light bg-surface-inset px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ShowcaseMockup tabId={tab.id} />
          </div>
        </div>
      </Container>
    </section>
  )
}
