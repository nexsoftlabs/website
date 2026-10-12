import { motion, useReducedMotion } from 'framer-motion'

export function HeroIllustration() {
  const reduceMotion = useReducedMotion()

  const floatTransition = { duration: 5, repeat: Infinity, ease: 'easeInOut' as const }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full text-indigo-brand/30"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path
          d="M200 80 L320 200 L200 320 L80 200 Z"
          stroke="url(#heroGrad)"
          strokeWidth="1"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="heroGrad" x1="80" y1="80" x2="320" y2="320">
            <stop stopColor="#635BFF" />
            <stop offset="1" stopColor="#45D6E8" />
          </linearGradient>
        </defs>
        {[
          [200, 80],
          [320, 200],
          [200, 320],
          [80, 200],
          [200, 200],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#8B7CFF" opacity="0.9" />
            {i < 4 && (
              <line
                x1={200}
                y1={200}
                x2={cx}
                y2={cy}
                stroke="#635BFF"
                strokeWidth="0.75"
                opacity="0.35"
              />
            )}
          </g>
        ))}
      </svg>

      <motion.div
        className="absolute top-[8%] right-[5%] w-[42%] rounded-xl border border-white/10 bg-white/5 p-3 shadow-glow backdrop-blur-sm"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={reduceMotion ? undefined : { ...floatTransition, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-medium text-white/80">API Gateway</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-white/15" />
          <div className="h-1.5 w-3/4 rounded bg-indigo-brand/40" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[38%] left-0 w-[48%] rounded-xl border border-white/10 bg-midnight/80 p-3 shadow-lg"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={reduceMotion ? undefined : { ...floatTransition, delay: 0.5 }}
      >
        <p className="text-[10px] font-semibold text-cyan-brand">Cloud</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="h-8 rounded-lg bg-indigo-brand/25" />
          <div className="h-8 rounded-lg bg-cyan-brand/20" />
        </div>
        <p className="mt-2 text-[9px] text-slate-400">Deploy · Monitor · Scale</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] right-[8%] w-[44%] rounded-xl border border-white/10 bg-white/5 p-3"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={reduceMotion ? undefined : { ...floatTransition, delay: 0.8 }}
      >
        <p className="text-[10px] font-medium text-white/90">Application</p>
        <div className="mt-2 flex gap-1">
          {['Data', 'Auth', 'UI'].map((label) => (
            <span
              key={label}
              className="rounded-md bg-white/10 px-1.5 py-0.5 text-[8px] text-slate-300"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
