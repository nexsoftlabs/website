import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  applyDocumentTheme,
  readStoredPreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  type ResolvedTheme,
} from '@/lib/theme'
import type { ThemePreference } from '@/lib/theme'

interface ThemeContextValue {
  preference: ThemePreference
  resolved: ResolvedTheme
  setPreference: (preference: ThemePreference) => void
  toggleResolved: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => readStoredPreference())
  const [resolved, setResolved] = useState<ResolvedTheme>(() => resolveTheme(readStoredPreference()))

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    const nextResolved = resolveTheme(next)
    setResolved(nextResolved)
    applyDocumentTheme(nextResolved)
  }, [])

  const toggleResolved = useCallback(() => {
    const next: ThemePreference = resolved === 'dark' ? 'light' : 'dark'
    setPreference(next)
  }, [resolved, setPreference])

  useEffect(() => {
    const nextResolved = resolveTheme(preference)
    setResolved(nextResolved)
    applyDocumentTheme(nextResolved)
  }, [preference])

  useEffect(() => {
    if (preference !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const nextResolved = resolveTheme('system')
      setResolved(nextResolved)
      applyDocumentTheme(nextResolved)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [preference])

  const value = useMemo(
    () => ({ preference, resolved, setPreference, toggleResolved }),
    [preference, resolved, setPreference, toggleResolved],
  )

  return (
    <ThemeContext.Provider value={value}>
      <input
        type="radio"
        name="nexsoft-theme"
        value="light"
        className="theme-controller sr-only"
        data-theme-value="light"
        tabIndex={-1}
        aria-hidden="true"
        readOnly
      />
      <input
        type="radio"
        name="nexsoft-theme"
        value="dark"
        className="theme-controller sr-only"
        data-theme-value="dark"
        tabIndex={-1}
        aria-hidden="true"
        readOnly
      />
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
