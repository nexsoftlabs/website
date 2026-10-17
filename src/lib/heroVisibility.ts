import { useEffect, useSyncExternalStore, type RefObject } from 'react'

/** Shares "is a dark hero under the header?" between page heroes and the Navbar. */
let underHeader = false
const listeners = new Set<() => void>()

function set(value: boolean) {
  if (value === underHeader) return
  underHeader = value
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useDarkHeroUnderHeader() {
  return useSyncExternalStore(subscribe, () => underHeader, () => false)
}

export function useRegisterDarkHero(ref: RefObject<HTMLElement | null>, headerHeight = 72) {
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => set(entry.isIntersecting), {
      rootMargin: `0px 0px -${Math.max(0, window.innerHeight - headerHeight - 8)}px 0px`,
      threshold: 0,
    })
    observer.observe(node)
    return () => {
      observer.disconnect()
      set(false)
    }
  }, [ref, headerHeight])
}
