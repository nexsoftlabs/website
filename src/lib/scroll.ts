const SCROLL_GAP_PX = 12

export function getFixedHeaderOffset(): number {
  const nav = document.querySelector('.site-navbar')
  const announcement = document.querySelector('[data-announcement-bar]')
  let offset = nav?.getBoundingClientRect().height ?? 64
  if (announcement) {
    offset += announcement.getBoundingClientRect().height
  }
  return offset + SCROLL_GAP_PX
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function scrollToTop(instant = true) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: instant ? 'auto' : scrollBehavior(),
  })
}

export function scrollToElement(el: HTMLElement) {
  const top = el.getBoundingClientRect().top + window.scrollY - getFixedHeaderOffset()
  window.scrollTo({
    top: Math.max(0, top),
    behavior: scrollBehavior(),
  })
}

export function scrollToId(id: string, maxAttempts = 40) {
  const attempt = (n: number) => {
    const el = document.getElementById(id)
    if (el) {
      scrollToElement(el)
      return
    }
    if (n < maxAttempts) {
      requestAnimationFrame(() => attempt(n + 1))
    }
  }
  attempt(0)
}
