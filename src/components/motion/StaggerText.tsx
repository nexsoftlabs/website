import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

interface StaggerTextProps {
  as?: 'h1' | 'h2' | 'p'
  className?: string
  children: ReactNode
  /** Base delay before the first child animates (seconds) */
  delay?: number
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.055, delayChildren: delay },
  }),
}

const item = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease },
  },
}

function WordSpans({ words }: { words: string[] }) {
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={item}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? '0.28em' : undefined }}
        >
          {word}
        </motion.span>
      ))}
    </>
  )
}

/** Splits text on spaces and staggers each word — best for short headlines. */
export function StaggerText({ as: Tag = 'h1', className = '', children, delay = 0.05 }: StaggerTextProps) {
  const reduceMotion = useReducedMotion()
  const text = typeof children === 'string' ? children : null

  if (reduceMotion || !text) {
    return <Tag className={className}>{children}</Tag>
  }

  const words = text.split(' ')

  if (Tag === 'h1') {
    return (
      <motion.h1
        className={className}
        variants={container}
        initial="hidden"
        animate="show"
        custom={delay}
      >
        <WordSpans words={words} />
      </motion.h1>
    )
  }

  if (Tag === 'h2') {
    return (
      <motion.h2
        className={className}
        variants={container}
        initial="hidden"
        animate="show"
        custom={delay}
      >
        <WordSpans words={words} />
      </motion.h2>
    )
  }

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      custom={delay}
    >
      <WordSpans words={words} />
    </motion.p>
  )
}
