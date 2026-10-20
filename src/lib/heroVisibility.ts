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

/** True while the hero’s upper band is still behind the sticky header (~first screen of the hero). */
function heroUnderHeader(node: HTMLElement, headerHeight: number) {
  const rect = node.getBoundingClientRect()
  const heroBand = Math.min(120, Math.max(headerHeight, node.offsetHeight * 0.12))
  return rect.top <= headerHeight && rect.top > -heroBand
}

export function useRegisterDarkHero(ref: RefObject<HTMLElement | null>, headerHeight = 72) {
  useEffect(() => {
    const node = ref.current
    if (!node) return

    const update = () => set(heroUnderHeader(node, headerHeight))

    update()
    requestAnimationFrame(() => update())
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null
    ro?.observe(node)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      ro?.disconnect()
      set(false)
    }
  }, [ref, headerHeight])
}
