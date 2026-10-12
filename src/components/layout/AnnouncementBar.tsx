import { X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'nx-announcement-dismissed'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) !== '1'
    } catch {
      return true
    }
  })

  if (!visible) return null

  return (
    <div
      data-announcement-bar
      className="relative border-b border-white/10 bg-midnight/90 text-center text-sm text-slate-200 backdrop-blur-md"
    >
      <div className="max-content flex items-center justify-center gap-2 py-2.5 pr-10">
        <p>
          Have a product idea?{' '}
          <Link
            to="/contact"
            className="font-medium text-cyan-brand underline-offset-2 hover:underline"
          >
            Let&apos;s turn it into a roadmap
          </Link>
          .
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          setVisible(false)
          try {
            sessionStorage.setItem(STORAGE_KEY, '1')
          } catch {
            /* ignore */
          }
        }}
        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:bg-white/10 hover:text-white"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
