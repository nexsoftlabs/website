import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { RouteScrollManager } from '@/components/layout/RouteScrollManager'

async function loadFlyonUI() {
  await import('flyonui/flyonui')
}

export function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    void loadFlyonUI()
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.HSStaticMethods?.autoInit?.()
    }, 100)
    return () => window.clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <RouteScrollManager />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
