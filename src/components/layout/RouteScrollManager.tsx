import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId, scrollToTop } from '@/lib/scroll'

/** Scroll to top on route changes; scroll to hash targets with sticky-header offset. */
export function RouteScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ''))
      if (id) scrollToId(id)
      return
    }
    scrollToTop()
  }, [pathname, hash])

  return null
}
