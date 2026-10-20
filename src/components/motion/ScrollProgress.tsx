import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  if (reduceMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-blue-corporate via-blue-electric to-blue-corporate shadow-[0_0_12px_rgb(61_121_242/0.45)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
