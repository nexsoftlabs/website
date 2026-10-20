import { useId } from 'react'

interface ArticleCoverProps {
  category: string
  className?: string
  image?: string
  alt?: string
}

const stroke = { fill: 'none', stroke: 'rgba(255,255,255,0.35)', strokeWidth: 1.25 }
const box = { fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.22)', strokeWidth: 1.25, rx: 6 }
const accentBox = { fill: 'rgba(61,121,242,0.22)', stroke: '#3D79F2', strokeWidth: 1.5, rx: 6 }

function ArchitectureIllustration() {
  return (
    <>
      <rect x="150" y="40" width="100" height="36" {...accentBox} />
      {[60, 170, 280].map((x) => (
        <rect key={x} x={x} y="122" width="60" height="32" {...box} />
      ))}
      <rect x="110" y="196" width="180" height="26" {...box} />
      <path d="M200 76v22M90 98h220M90 98v24M200 98v24M310 98v24M90 154v26h220v-26M200 154v42" {...stroke} />
      <circle cx="200" cy="58" r="4" fill="#9BBCFF" />
    </>
  )
}

function ModernizationIllustration() {
  return (
    <>
      <rect x="40" y="70" width="110" height="110" {...box} strokeDasharray="4 4" />
      {[86, 112, 138, 164].map((y) => (
        <path key={y} d={`M56 ${y - 6}h78`} {...stroke} opacity="0.6" />
      ))}
      <path d="M168 125h56m-10-10 10 10-10 10" {...stroke} stroke="#9BBCFF" />
      {[
        [244, 54],
        [304, 54],
        [244, 112],
        [304, 112],
        [244, 170],
        [304, 170],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="48" height="40" {...(i === 2 ? accentBox : box)} />
      ))}
    </>
  )
}

function AutomationIllustration() {
  return (
    <>
      <rect x="40" y="80" width="70" height="90" {...box} />
      {[100, 116, 132, 148].map((y) => (
        <path key={y} d={`M54 ${y}h42`} {...stroke} opacity="0.6" />
      ))}
      <path d="M110 125h56" {...stroke} />
      <circle cx="190" cy="125" r="24" {...accentBox} />
      <path d="m190 113 3 8.5 8.5 3.5-8.5 3.5-3 8.5-3-8.5-8.5-3.5 8.5-3.5 3-8.5Z" fill="#9BBCFF" />
      <path d="M214 125c30 0 30-60 60-60M214 125h60M214 125c30 0 30 60 60 60" {...stroke} />
      <rect x="274" y="48" width="86" height="34" {...box} />
      <rect x="274" y="108" width="86" height="34" {...box} />
      <rect x="274" y="168" width="86" height="34" fill="rgba(240,180,76,0.12)" stroke="rgba(240,180,76,0.7)" strokeWidth="1.25" rx="6" />
    </>
  )
}

function IllustrationFallback({ category }: { category: string }) {
  const gradientId = `cover${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const art =
    category === 'Modernization' ? (
      <ModernizationIllustration />
    ) : category.startsWith('AI') ? (
      <AutomationIllustration />
    ) : (
      <ArchitectureIllustration />
    )

  return (
    <svg
      viewBox="0 0 400 250"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="400" height="250" fill={`url(#${gradientId})`} />
      <defs>
        <radialGradient id={gradientId} cx="0.8" cy="0" r="1">
          <stop offset="0" stopColor="#1C3157" />
          <stop offset="1" stopColor="#142544" />
        </radialGradient>
      </defs>
      {art}
    </svg>
  )
}

export function ArticleCover({ category, className = '', image, alt }: ArticleCoverProps) {
  if (image) {
    return (
      <div className={`article-cover relative overflow-hidden rounded-xl bg-navy-900 ${className}`}>
        <img
          src={image}
          alt={alt ?? ''}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
    )
  }

  return (
    <div
      className={`article-cover overflow-hidden rounded-xl bg-navy-900 ${className}`}
      aria-hidden="true"
    >
      <IllustrationFallback category={category} />
    </div>
  )
}
