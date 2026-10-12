import { motion, useReducedMotion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeProvider'

type ToggleSurface = 'dark' | 'light'

interface ThemeToggleProps {
  surface?: ToggleSurface
  className?: string
}

export function ThemeToggle({ surface = 'light', className = '' }: ThemeToggleProps) {
  const { resolved, setPreference } = useTheme()
  const reduceMotion = useReducedMotion()
  const isDark = resolved === 'dark'
  const useDarkChrome = isDark || surface === 'dark'

  const buttonClass = useDarkChrome
    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
    : 'border-border-light bg-surface-elevated text-ink hover:bg-surface-inset'

  return (
    <button
      type="button"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${buttonClass} ${className}`}
      onClick={() => setPreference(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <motion.span
        key={resolved}
        initial={reduceMotion ? false : { rotate: -35, opacity: 0, scale: 0.85 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {isDark ? (
          <Sun className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4" aria-hidden="true" />
        )}
      </motion.span>
    </button>
  )
}
