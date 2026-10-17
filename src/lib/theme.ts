export const THEME_STORAGE_KEY = 'nexsoft-color-scheme'

export type ThemePreference = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference === 'system') return getSystemTheme()
  return preference
}

export function readStoredPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  } catch {
    /* ignore */
  }
  return 'light'
}

export function applyDocumentTheme(resolved: ResolvedTheme): void {
  const root = document.documentElement
  root.setAttribute('data-theme', resolved)
  root.style.colorScheme = resolved

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', resolved === 'dark' ? '#08111F' : '#0B1730')
  }

  const lightController = document.querySelector<HTMLInputElement>(
    'input.theme-controller[data-theme-value="light"]',
  )
  const darkController = document.querySelector<HTMLInputElement>(
    'input.theme-controller[data-theme-value="dark"]',
  )
  if (lightController && darkController) {
    const useDark = resolved === 'dark'
    lightController.checked = !useDark
    darkController.checked = useDark
  }
}
