import { useId } from 'react'

/**
 * Illustrative product ecosystem for a fictional operations platform ("Corvane").
 * All mockups are sized in `em` and the wrapper sets font-size from its own width
 * (container query units), so the composition scales as one coherent object.
 */

const chartLine =
  'M0 92 C14 89 18 86 28 86 S48 89 57 88 S75 76 85 74 S104 79 113 78 S133 66 142 64 S161 69 170 68 S189 54 198 52 S218 57 227 56 S246 46 255 44 S274 41 283 40'
const chartArea = `${chartLine} L283 120 L0 120 Z`
const forecastLine = 'M283 40 C296 37 302 34 312 32 S332 25 340 22'

function StatusDot({ tone }: { tone: 'ok' | 'busy' | 'idle' }) {
  const cls =
    tone === 'ok' ? 'bg-[#16a36a]' : tone === 'busy' ? 'bg-blue-electric' : 'bg-[#c3cddb]'
  return <span className={`inline-block h-[0.6em] w-[0.6em] shrink-0 rounded-full ${cls}`} />
}

export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  const areaId = `area${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1em] bg-white text-[#0b1730] shadow-mockup ring-1 ring-[#0b1730]/5">
      {/* App bar */}
      <div className="flex h-[3.8em] shrink-0 items-center gap-[1.6em] border-b border-[#e6ecf3] px-[1.6em]">
        <div className="flex items-center gap-[0.6em]">
          <span className="grid h-[1.8em] w-[1.8em] place-items-center rounded-[0.45em] bg-[#0b1730]">
            <span className="h-[0.7em] w-[0.7em] rotate-45 bg-blue-electric" />
          </span>
          <span className="text-[1.15em] font-semibold tracking-[-0.01em]">Corvane</span>
        </div>
        {!compact && (
          <nav className="flex gap-[1.4em] text-[1em] text-[#64748b]">
            <span className="font-medium text-[#0b1730]">Overview</span>
            <span>Orders</span>
            <span>Fleet</span>
            <span>Reports</span>
          </nav>
        )}
        <div className="ml-auto flex items-center gap-[0.8em]">
          {!compact && (
            <span className="flex h-[2.2em] w-[11em] items-center rounded-[0.5em] bg-[#f2f5f9] px-[0.8em] text-[0.95em] text-[#94a3b8]">
              Search orders…
            </span>
          )}
          <span className="grid h-[2.2em] w-[2.2em] place-items-center rounded-full bg-[#e8eefb] text-[0.85em] font-semibold text-blue-corporate">
            AR
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-[1.4em] p-[1.6em]">
        {/* Title row */}
        <div className="flex items-end justify-between gap-[1em]">
          <div>
            <p className="text-[1.55em] leading-tight font-semibold tracking-[-0.02em]">
              Operations overview
            </p>
            <p className="mt-[0.2em] text-[0.95em] text-[#64748b]">All regions · Last 30 days</p>
          </div>
          <div className="flex rounded-[0.5em] bg-[#f2f5f9] p-[0.25em] text-[0.9em] font-medium text-[#64748b]">
            <span className="px-[0.7em] py-[0.25em]">7D</span>
            <span className="rounded-[0.35em] bg-white px-[0.7em] py-[0.25em] text-[#0b1730] shadow-sm">
              30D
            </span>
            <span className="px-[0.7em] py-[0.25em]">90D</span>
          </div>
        </div>

        {/* KPIs */}
        <div className={`grid gap-[1em] ${compact ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {[
            { label: 'Orders fulfilled', value: '12,480', delta: '+8.4%' },
            { label: 'On-time rate', value: '96.2%', delta: '+1.9%' },
            { label: 'Open work orders', value: '184', delta: '−12' },
          ]
            .slice(0, compact ? 2 : 3)
            .map((kpi) => (
              <div key={kpi.label} className="rounded-[0.7em] border border-[#e6ecf3] px-[1.1em] py-[0.9em]">
                <p className="text-[0.92em] text-[#64748b]">{kpi.label}</p>
                <div className="mt-[0.3em] flex items-baseline gap-[0.6em]">
                  <span className="text-[1.9em] leading-none font-semibold tracking-[-0.02em]">
                    {kpi.value}
                  </span>
                  <span className="rounded-[0.35em] bg-[#e3f4ec] px-[0.45em] py-[0.1em] text-[0.82em] font-medium text-[#0f7a4f]">
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Chart + list */}
        <div className={`grid min-h-0 flex-1 gap-[1em] ${compact ? '' : 'grid-cols-[1.75fr_1fr]'}`}>
          <div className="flex min-h-0 flex-col rounded-[0.7em] border border-[#e6ecf3] p-[1.1em]">
            <div className="flex items-center justify-between">
              <p className="text-[1em] font-medium">Fulfillment volume</p>
              <div className="flex items-center gap-[1em] text-[0.82em] text-[#64748b]">
                <span className="flex items-center gap-[0.35em]">
                  <span className="h-[0.2em] w-[1em] rounded bg-blue-corporate" /> Actual
                </span>
                <span className="flex items-center gap-[0.35em]">
                  <span className="h-[0.2em] w-[1em] rounded bg-[#9bbcff]" /> Forecast
                </span>
              </div>
            </div>
            <svg viewBox="0 0 340 120" preserveAspectRatio="none" className="mt-[0.8em] min-h-0 w-full flex-1">
              <defs>
                <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1746A2" stopOpacity="0.18" />
                  <stop offset="1" stopColor="#1746A2" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[20, 50, 80, 110].map((y) => (
                <line key={y} x1="0" x2="340" y1={y} y2={y} stroke="#eef2f7" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              ))}
              <path d={chartArea} fill={`url(#${areaId})`} />
              <path
                d={chartLine}
                fill="none"
                stroke="#1746A2"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength={1200}
                className="chart-draw"
              />
              <path
                d={forecastLine}
                fill="none"
                stroke="#9BBCFF"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx="283" cy="40" r="3.5" fill="#fff" stroke="#1746A2" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          {!compact && (
            <div className="flex min-h-0 flex-col rounded-[0.7em] border border-[#e6ecf3] p-[1.1em]">
              <p className="text-[1em] font-medium">Live work orders</p>
              <ul className="mt-[0.7em] flex flex-1 flex-col justify-between text-[0.9em]">
                {[
                  { id: 'WO-2817', name: 'Chiller inspection', tone: 'busy' as const },
                  { id: 'WO-2814', name: 'Dock door repair', tone: 'ok' as const },
                  { id: 'WO-2809', name: 'Fleet service', tone: 'ok' as const },
                  { id: 'WO-2803', name: 'Site survey', tone: 'idle' as const },
                ].map((row) => (
                  <li key={row.id} className="flex items-center gap-[0.6em] border-t border-[#eef2f7] pt-[0.55em] first:border-0 first:pt-0">
                    <StatusDot tone={row.tone} />
                    <span className="truncate">{row.name}</span>
                    <span className="ml-auto font-mono text-[0.85em] text-[#94a3b8]">{row.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function PhoneMockup() {
  const steps = [
    { label: 'Assigned', time: '08:12', state: 'done' as const },
    { label: 'En route', time: '08:40', state: 'done' as const },
    { label: 'On site', time: 'Now', state: 'current' as const },
    { label: 'Sign-off', time: '—', state: 'todo' as const },
  ]

  return (
    <div className="h-full rounded-[2.6em] bg-[#0b1730] p-[0.55em] shadow-mockup ring-1 ring-white/15">
      <div className="flex h-full flex-col overflow-hidden rounded-[2.1em] bg-[#f4f7fb] text-[#0b1730]">
        <div className="flex items-center justify-between px-[1.6em] pt-[1.1em] text-[0.85em] font-semibold">
          <span>9:41</span>
          <span className="h-[1.3em] w-[4.6em] rounded-full bg-[#0b1730]" />
          <span className="flex gap-[0.2em]">
            <span className="h-[0.7em] w-[0.25em] rounded-sm bg-[#0b1730]" />
            <span className="h-[0.7em] w-[0.25em] rounded-sm bg-[#0b1730]" />
            <span className="h-[0.7em] w-[0.25em] rounded-sm bg-[#0b1730]/30" />
          </span>
        </div>

        <div className="flex items-center justify-between px-[1.3em] pt-[1.3em]">
          <div>
            <p className="text-[0.8em] text-[#64748b]">Corvane Field</p>
            <p className="text-[1.35em] leading-tight font-semibold tracking-[-0.02em]">Today’s jobs</p>
          </div>
          <span className="grid h-[2.3em] w-[2.3em] place-items-center rounded-full bg-[#e8eefb] text-[0.8em] font-semibold text-blue-corporate">
            DK
          </span>
        </div>

        <div className="mx-[1em] mt-[1.1em] rounded-[1em] bg-white p-[1.1em] shadow-[0_1px_2px_rgb(11_23_48/0.06),0_6px_16px_-10px_rgb(11_23_48/0.25)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.78em] text-[#94a3b8]">WO-2817</span>
            <span className="flex items-center gap-[0.35em] rounded-full bg-[#e8eefb] px-[0.6em] py-[0.15em] text-[0.75em] font-medium text-blue-corporate">
              <span className="status-pulse h-[0.5em] w-[0.5em] rounded-full bg-blue-electric" />
              On site
            </span>
          </div>
          <p className="mt-[0.5em] text-[1.1em] leading-snug font-semibold">Chiller inspection</p>
          <p className="text-[0.85em] text-[#64748b]">Harbour Rd · Unit 4</p>

          <ol className="mt-[0.9em] space-y-[0.55em]">
            {steps.map((step) => (
              <li key={step.label} className="flex items-center gap-[0.6em] text-[0.85em]">
                <span
                  className={`grid h-[1.3em] w-[1.3em] place-items-center rounded-full border ${
                    step.state === 'done'
                      ? 'border-[#16a36a] bg-[#16a36a]'
                      : step.state === 'current'
                        ? 'border-blue-electric bg-white'
                        : 'border-[#cfd8e3] bg-white'
                  }`}
                >
                  {step.state === 'done' && (
                    <svg viewBox="0 0 12 12" className="h-[0.75em] w-[0.75em]">
                      <path d="M2.5 6.2 5 8.5l4.5-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {step.state === 'current' && <span className="h-[0.5em] w-[0.5em] rounded-full bg-blue-electric" />}
                </span>
                <span className={step.state === 'todo' ? 'text-[#94a3b8]' : 'font-medium'}>{step.label}</span>
                <span className="ml-auto text-[#94a3b8]">{step.time}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-auto px-[1em] pb-[1.4em]">
          <div className="rounded-[0.8em] bg-blue-corporate py-[0.9em] text-center text-[0.95em] font-semibold text-white">
            Complete checklist
          </div>
          <div className="mx-auto mt-[0.9em] h-[0.35em] w-[6em] rounded-full bg-[#0b1730]/80" />
        </div>
      </div>
    </div>
  )
}

const archNodes = [
  { x: 8, y: 22, w: 74, label: 'Web app' },
  { x: 8, y: 76, w: 74, label: 'Mobile app' },
  { x: 116, y: 49, w: 84, label: 'API gateway', primary: true },
  { x: 234, y: 8, w: 70, label: 'Orders' },
  { x: 234, y: 52, w: 70, label: 'Dispatch' },
  { x: 234, y: 96, w: 70, label: 'Billing' },
  { x: 318, y: 52, w: 66, label: 'PostgreSQL' },
]

const archLinks = [
  'M82 36 C100 36 98 63 116 63',
  'M82 90 C100 90 98 63 116 63',
  'M200 63 C217 63 217 20 234 20',
  'M200 63 L234 64',
  'M200 63 C217 63 217 108 234 108',
  'M304 20 C311 20 311 64 318 64',
  'M304 108 C311 108 311 64 318 64',
]

export function ArchitectureMockup() {
  return (
    <div className="flex h-full flex-col rounded-[1em] bg-navy-800 p-[1.3em] text-white shadow-mockup ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <p className="text-[0.8em] font-medium tracking-[0.16em] text-[#9bbcff] uppercase">
          Platform architecture
        </p>
        <p className="flex items-center gap-[0.45em] text-[0.85em] text-[#b8c5da]">
          <span className="status-pulse h-[0.55em] w-[0.55em] rounded-full bg-[#34d399]" />
          All services healthy
        </p>
      </div>
      <svg viewBox="0 0 390 124" className="mt-[0.9em] min-h-0 w-full flex-1" fontFamily="inherit">
        {archLinks.map((d) => (
          <path key={d} d={d} fill="none" stroke="#3D79F2" strokeOpacity="0.75" strokeWidth="1.25" className="flow-line" />
        ))}
        {archNodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height="24"
              rx="5"
              fill={n.primary ? 'rgba(61,121,242,0.22)' : 'rgba(255,255,255,0.05)'}
              stroke={n.primary ? '#3D79F2' : 'rgba(255,255,255,0.18)'}
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + 15.5}
              textAnchor="middle"
              fontSize="9.5"
              fontWeight={n.primary ? 600 : 500}
              fill={n.primary ? '#ffffff' : 'rgba(255,255,255,0.82)'}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function Connector({ className, d, viewBox }: { className: string; d: string; viewBox: string }) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={`absolute overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path d={d} fill="none" stroke="#3D79F2" strokeWidth="1.25" className="flow-line" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

/** Full desktop/tablet composition. */
export function ProductEcosystem() {
  return (
    <div className="relative w-full [container-type:inline-size]">
      <div className="relative aspect-[60/56] text-[1.6667cqw]">
        <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[2em] motion-duration-[1000ms] motion-delay-[150ms] motion-ease-[cubic-bezier(0.22,1,0.36,1)] absolute top-0 left-[10%] h-[64.3%] w-[90%]">
          <DashboardMockup />
        </div>

        <Connector viewBox="0 0 10 10" d="M5 0 V10" className="top-[64.3%] left-[71%] h-[5.4%] w-[1em]" />
        <Connector viewBox="0 0 10 10" d="M0 5 H10" className="top-[82%] left-[29.2%] h-[1em] w-[5.8%]" />

        <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[2em] motion-duration-[1000ms] motion-delay-[450ms] motion-ease-[cubic-bezier(0.22,1,0.36,1)] absolute top-[69.6%] left-[35%] h-[30.4%] w-[65%]">
          <ArchitectureMockup />
        </div>

        <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[3em] motion-duration-[1000ms] motion-delay-[300ms] motion-ease-[cubic-bezier(0.22,1,0.36,1)] absolute top-[30%] left-0 h-[66%] w-[29.2%]">
          <PhoneMockup />
        </div>
      </div>
    </div>
  )
}

/** Simplified mobile composition — one focused screen, not a shrunken collage. */
export function ProductEcosystemCompact() {
  return (
    <div className="relative w-full [container-type:inline-size]">
      <div className="motion-safe:motion-opacity-in-0 motion-safe:motion-translate-y-in-[16px] motion-duration-[900ms] motion-delay-[150ms] relative aspect-[40/34] text-[2.5cqw]">
        <DashboardMockup compact />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5 text-center text-[0.6875rem] text-[#b8c5da]">
        {['Web app', 'Mobile', 'API', 'Cloud'].map((item) => (
          <span key={item} className="rounded-md border border-white/12 py-1.5">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
