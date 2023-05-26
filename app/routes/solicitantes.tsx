import {Outlet, useLocation} from '@remix-run/react'
import {Suspense} from 'react'
import Map from '~/components/layout/map/map'
import {Navbar} from '~/components/layout/navbar/navbar'
import {SidebarNav} from '~/components/layout/sidebar-nav'

export default function SolicitantesRoute() {
  const location = useLocation()
  let isSolicitantePage = location.pathname === '/solicitantes'
  let content

  if (isSolicitantePage) {
    content = (
      <div className="grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
        <div className="lg:-mt-16">
          <div className="fixed left-0 right-0 top-0 py-0 shadow lg:sticky lg:pt-16 lg:shadow-none">
            <SidebarNav />
          </div>
        </div>
        {/* No hay fallback UI por lo que hay que tener cuidado de no suspender directamente dentro. */}
        <Suspense fallback={null}>
          <main className="isolate min-w-0">
            <article className="break-words font-normal text-primary">
              <Map />
            </article>
          </main>
        </Suspense>
      </div>
    )
  }

  let hasColumns = true
  let showSidebar = true
  if (isSolicitantePage) {
    hasColumns = true
    showSidebar = true
  }

  return (
    <>
      <Navbar />

      {content}

      <Outlet />
    </>
  )
}
