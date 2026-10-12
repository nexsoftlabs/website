import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { RouteScrollManager } from '@/components/layout/RouteScrollManager'

async function loadFlyonUI() {
  await import('flyonui/flyonui')
}

export function MainLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

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
      {isHome && <AnnouncementBar />}
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
