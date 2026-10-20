import type { ReactNode } from 'react'
import type { ShowcaseId } from '@/types'
import { DashboardMockup } from '@/components/mockups/ProductMockup'

const card = 'rounded-[0.7em] border border-[#e6ecf3] bg-white'

function AppFrame({ title, tag, children }: { title: string; tag: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1em] bg-white text-[#0b1730] shadow-mockup ring-1 ring-[#0b1730]/8">
      <div className="flex h-[3.6em] shrink-0 items-center gap-[0.8em] border-b border-[#e6ecf3] bg-white px-[1.5em]">
        <span className="grid h-[1.7em] w-[1.7em] place-items-center rounded-[0.45em] bg-[#0b1730]">
          <span className="h-[0.65em] w-[0.65em] rounded-full bg-blue-electric" />
        </span>
        <span className="text-[1.1em] font-semibold">{title}</span>
        <span className="rounded-[0.4em] bg-[#f2f5f9] px-[0.6em] py-[0.15em] text-[0.85em] text-[#64748b]">
          {tag}
        </span>
        <span className="ml-auto grid h-[2.1em] w-[2.1em] place-items-center rounded-full bg-[#e8eefb] text-[0.8em] font-semibold text-blue-corporate">
          MS
        </span>
      </div>
      <div className="min-h-0 flex-1 p-[1.5em]">{children}</div>
    </div>
  )
}

function SaasMockup() {
  const tenants = [
    { name: 'Northgate Physio', plan: 'Growth', seats: '14 / 20', status: 'Active' },
    { name: 'Lakeside Dental', plan: 'Scale', seats: '42 / 50', status: 'Active' },
    { name: 'Avenue Clinic', plan: 'Starter', seats: '3 / 5', status: 'Trial · 6 days' },
    { name: 'Riverside Health', plan: 'Growth', seats: '19 / 20', status: 'Upgrade due' },
  ]
  const planTone: Record<string, string> = {
    Starter: 'bg-[#f2f5f9] text-[#475569]',
    Growth: 'bg-[#e8eefb] text-blue-corporate',
    Scale: 'bg-[#0b1730] text-white',
  }

  return (
    <AppFrame title="Brightline" tag="Platform admin">
      <div className="flex h-full flex-col gap-[1.2em]">
        <div className="grid grid-cols-3 gap-[1em]">
          {[
            { label: 'Active workspaces', value: '214' },
            { label: 'Trials in progress', value: '18' },
            { label: 'Seats in use', value: '87%' },
          ].map((k) => (
            <div key={k.label} className={`${card} px-[1.1em] py-[0.9em]`}>
              <p className="text-[0.9em] text-[#64748b]">{k.label}</p>
              <p className="mt-[0.25em] text-[1.8em] leading-none font-semibold tracking-[-0.02em]">{k.value}</p>
            </div>
          ))}
        </div>
        <div className={`${card} min-h-0 flex-1 overflow-hidden`}>
          <div className="grid grid-cols-[2fr_1fr_1fr_1.3fr] border-b border-[#eef2f7] px-[1.1em] py-[0.8em] text-[0.82em] font-medium text-[#64748b]">
            <span>Workspace</span>
            <span>Plan</span>
            <span>Seats</span>
            <span>Status</span>
          </div>
          {tenants.map((t) => (
            <div
              key={t.name}
              className="grid grid-cols-[2fr_1fr_1fr_1.3fr] items-center border-b border-[#eef2f7] px-[1.1em] py-[0.85em] text-[0.92em] last:border-0"
            >
              <span className="truncate font-medium">{t.name}</span>
              <span>
                <span className={`rounded-[0.35em] px-[0.5em] py-[0.15em] text-[0.85em] font-medium ${planTone[t.plan]}`}>
                  {t.plan}
                </span>
              </span>
              <span className="font-mono text-[0.9em] text-[#64748b]">{t.seats}</span>
              <span className={`text-[0.9em] ${t.status === 'Active' ? 'text-[#0f7a4f]' : 'text-[#9a5b00]'}`}>
                {t.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppFrame>
  )
}

function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="h-full rounded-[2.4em] bg-[#0b1730] p-[0.5em] shadow-mockup">
      <div className="flex h-full flex-col overflow-hidden rounded-[2em] bg-white px-[1.2em] pt-[1.1em] pb-[1.2em] text-[#0b1730]">
        <div className="mx-auto mb-[1em] h-[1.2em] w-[4.4em] rounded-full bg-[#0b1730]" />
        {children}
      </div>
    </div>
  )
}

function PortalMockup() {
  const bars = [46, 58, 52, 70, 64, 48, 40]
  return (
    <div className="flex h-full items-center justify-center gap-[2.4em] bg-transparent p-[0.4em]">
      <div className="h-full w-[19em]">
        <Phone>
          <p className="text-[0.8em] text-[#64748b]">Good morning, Priya</p>
          <p className="text-[1.3em] font-semibold tracking-[-0.02em]">Your account</p>
          <div className="mt-[0.9em] rounded-[0.9em] bg-[#0b1730] p-[1em] text-white">
            <p className="text-[0.78em] text-[#9bbcff]">Amount due · 12 Nov</p>
            <p className="mt-[0.2em] text-[1.9em] leading-none font-semibold">₹2,340</p>
            <div className="mt-[0.9em] rounded-[0.6em] bg-white py-[0.6em] text-center text-[0.85em] font-semibold text-[#0b1730]">
              Pay now
            </div>
          </div>
          <div className="mt-[0.9em] rounded-[0.9em] bg-white p-[1em]">
            <p className="text-[0.85em] font-medium">Usage this week</p>
            <div className="mt-[0.7em] flex h-[5em] items-end gap-[0.45em]">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-t-[0.25em] ${i === 3 ? 'bg-blue-corporate' : 'bg-[#c9d8f5]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </Phone>
      </div>
      <div className="h-[88%] w-[17em]">
        <Phone>
          <p className="text-[1.15em] font-semibold tracking-[-0.02em]">Service request</p>
          <p className="text-[0.8em] text-[#64748b]">SR-40218 · Meter fault</p>
          <ol className="mt-[1.1em] space-y-[0.9em] text-[0.85em]">
            {[
              { t: 'Request received', d: 'Mon 09:12', s: 'done' },
              { t: 'Engineer assigned', d: 'Mon 11:40', s: 'done' },
              { t: 'Visit scheduled', d: 'Wed 10–12', s: 'current' },
              { t: 'Resolved', d: '—', s: 'todo' },
            ].map((step) => (
              <li key={step.t} className="flex gap-[0.7em]">
                <span
                  className={`mt-[0.2em] h-[0.9em] w-[0.9em] shrink-0 rounded-full border-2 ${
                    step.s === 'done'
                      ? 'border-[#16a36a] bg-[#16a36a]'
                      : step.s === 'current'
                        ? 'border-blue-electric bg-white'
                        : 'border-[#cfd8e3] bg-white'
                  }`}
                />
                <span>
                  <span className={`block font-medium ${step.s === 'todo' ? 'text-[#94a3b8]' : ''}`}>{step.t}</span>
                  <span className="text-[#94a3b8]">{step.d}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-auto rounded-[0.7em] border border-[#dce4ee] bg-white py-[0.65em] text-center text-[0.85em] font-medium">
            Reschedule visit
          </div>
        </Phone>
      </div>
    </div>
  )
}

function DocumentsMockup() {
  const fields = [
    { k: 'Policy number', v: 'BRK-2207-1184', c: 99 },
    { k: 'Claimant', v: 'Harbour Freight Ltd', c: 97 },
    { k: 'Incident date', v: '03 Oct 2026', c: 94 },
    { k: 'Claim amount', v: '₹4,80,000', c: 71, review: true },
  ]
  return (
    <AppFrame title="Intake" tag="Claims · Inbox">
      <div className="grid h-full grid-cols-[0.95fr_1.25fr] gap-[1.2em]">
        <div className={`${card} relative overflow-hidden p-[1.2em]`}>
          <p className="text-[0.8em] font-medium text-[#64748b]">claim-form-0448.pdf</p>
          <div className="mt-[0.9em] space-y-[0.55em]">
            {[90, 70, 82, 55, 88, 64, 76, 50, 84, 60].map((w, i) => (
              <span
                key={i}
                className={`block h-[0.55em] rounded-full ${
                  i === 2 || i === 5 ? 'bg-[#c9d8f5] ring-2 ring-blue-electric/40' : i === 7 ? 'bg-[#fde7c2] ring-2 ring-[#f0b44c]/50' : 'bg-[#e6ecf3]'
                }`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-white" />
        </div>
        <div className="flex min-h-0 flex-col gap-[0.9em]">
          <div className={`${card} p-[1.1em]`}>
            <p className="text-[0.9em] font-medium">Extracted fields</p>
            <ul className="mt-[0.6em] space-y-[0.55em] text-[0.88em]">
              {fields.map((f) => (
                <li key={f.k} className="flex items-center gap-[0.6em]">
                  <span className="w-[8.5em] shrink-0 text-[#64748b]">{f.k}</span>
                  <span className="truncate font-medium">{f.v}</span>
                  <span
                    className={`ml-auto rounded-[0.35em] px-[0.45em] py-[0.1em] font-mono text-[0.8em] ${
                      f.review ? 'bg-[#fdf1dc] text-[#9a5b00]' : 'bg-[#e3f4ec] text-[#0f7a4f]'
                    }`}
                  >
                    {f.c}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[0.7em] border border-[#f0d39c] bg-[#fffaf0] px-[1.1em] py-[0.8em] text-[0.88em]">
            <p className="font-medium text-[#9a5b00]">Needs review: claim amount</p>
            <p className="mt-[0.15em] text-[#7c5a1c]">Confidence below 85% threshold — assigned to a reviewer.</p>
          </div>
          <div className={`${card} mt-auto flex items-center gap-[0.6em] px-[1.1em] py-[0.8em] text-[0.82em]`}>
            {['Received', 'Extracted', 'Review', 'Routed'].map((s, i) => (
              <span key={s} className="flex items-center gap-[0.6em]">
                {i > 0 && <span className="h-px w-[1.2em] bg-[#cfd8e3]" />}
                <span className={i < 2 ? 'font-medium text-[#0f7a4f]' : i === 2 ? 'font-medium text-blue-corporate' : 'text-[#94a3b8]'}>
                  {s}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </AppFrame>
  )
}

export function ConceptMockup({ id }: { id: ShowcaseId }) {
  return (
    <div className="w-full [container-type:inline-size]">
      <div className="aspect-[56/38] text-[1.7857cqw]">
        {id === 'operations' && <DashboardMockup />}
        {id === 'saas' && <SaasMockup />}
        {id === 'portal' && <PortalMockup />}
        {id === 'documents' && <DocumentsMockup />}
      </div>
    </div>
  )
}
