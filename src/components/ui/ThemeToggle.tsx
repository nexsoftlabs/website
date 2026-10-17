import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeProvider'

type ToggleSurface = 'dark' | 'light'

interface ThemeToggleProps {
  surface?: ToggleSurface
  className?: string
}

export function ThemeToggle({ surface = 'light', className = '' }: ThemeToggleProps) {
  const { resolved, setPreference } = useTheme()
  const isDark = resolved === 'dark'

  const tone =
    surface === 'dark'
      ? 'text-[#b8c5da] hover:text-white hover:bg-white/10'
      : 'text-muted hover:text-heading hover:bg-surface-sunken'

  return (
    <button
      type="button"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${tone} ${className}`}
      onClick={() => setPreference(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <span key={resolved} className="motion-safe:motion-rotate-in-[-30deg] motion-safe:motion-opacity-in-0 motion-duration-300">
        {isDark ? (
          <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
        )}
      </span>
    </button>
  )
}
