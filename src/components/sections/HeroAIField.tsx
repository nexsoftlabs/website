import { useId } from 'react'

const NODES: { x: number; y: number; r: number; delay: number }[] = [
  { x: 120, y: 140, r: 4, delay: 0 },
  { x: 280, y: 95, r: 3.5, delay: 0.4 },
  { x: 420, y: 180, r: 5, delay: 0.8 },
  { x: 640, y: 120, r: 4, delay: 1.2 },
  { x: 880, y: 200, r: 3.5, delay: 0.6 },
  { x: 1050, y: 90, r: 4.5, delay: 1.4 },
  { x: 180, y: 320, r: 3, delay: 1.1 },
  { x: 520, y: 380, r: 4, delay: 0.2 },
  { x: 760, y: 340, r: 3.5, delay: 0.9 },
  { x: 980, y: 420, r: 4, delay: 1.6 },
  { x: 340, y: 520, r: 3.5, delay: 0.5 },
  { x: 720, y: 560, r: 4, delay: 1.3 },
]

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 6],
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 8],
  [5, 9],
  [6, 7],
  [7, 8],
  [8, 9],
  [6, 10],
  [7, 10],
  [8, 11],
  [9, 11],
  [10, 11],
  [2, 8],
]

const PARTICLES = [
  { left: '12%', top: '22%', delay: '0s' },
  { left: '28%', top: '48%', delay: '-2.4s' },
  { left: '54%', top: '18%', delay: '-4.1s' },
  { left: '71%', top: '36%', delay: '-1.2s' },
  { left: '86%', top: '58%', delay: '-3.5s' },
  { left: '38%', top: '68%', delay: '-5s' },
]

/** Ambient AI network — nodes, signal paths, and floating tokens (decorative). */
export function HeroAIField() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const glowId = `hero-ai-glow-${uid}`

  return (
    <div className="hero-ai-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-ai-scan absolute inset-y-0 left-0 w-[min(28vw,220px)] will-change-transform" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.55] sm:opacity-65"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id={glowId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 280) rotate(90) scale(320 420)">
            <stop stopColor="#3D79F2" stopOpacity="0.22" />
            <stop offset="1" stopColor="#3D79F2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="700" fill={`url(#${glowId})`} />

        {EDGES.map(([a, b], i) => {
          const from = NODES[a]
          const to = NODES[b]
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              className="hero-ai-edge"
              stroke="#9BBCFF"
              strokeWidth="1"
              strokeOpacity="0.35"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          )
        })}

        {NODES.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 6}
              fill="#3D79F2"
              fillOpacity="0.08"
              className="hero-ai-node-halo"
              style={{ animationDelay: `${node.delay}s` }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#3D79F2"
              className="hero-ai-node"
              style={{ animationDelay: `${node.delay}s` }}
            />
            <circle cx={node.x} cy={node.y} r={node.r * 0.45} fill="#FFFFFF" fillOpacity="0.85" />
          </g>
        ))}

        {/* Inference pulses traveling along key paths */}
        <circle r="3" fill="#9BBCFF" className="hero-ai-signal hero-ai-signal--a">
          <animateMotion dur="5s" repeatCount="indefinite" path="M120,140 L280,95 L420,180 L760,340" />
        </circle>
        <circle r="2.5" fill="#FFFFFF" fillOpacity="0.9" className="hero-ai-signal hero-ai-signal--b">
          <animateMotion dur="6.5s" repeatCount="indefinite" path="M640,120 L880,200 L980,420 L720,560" />
        </circle>
      </svg>

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-ai-token absolute font-mono text-[0.625rem] font-semibold tracking-wider text-blue-soft/70"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        >
          {i % 3 === 0 ? '{ai}' : i % 3 === 1 ? 'λ' : '01'}
        </span>
      ))}
    </div>
  )
}
