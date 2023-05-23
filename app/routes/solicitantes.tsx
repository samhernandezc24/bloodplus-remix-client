import {Outlet} from '@remix-run/react'
import {Suspense} from 'react'
import {Navbar} from '~/components/layout/navbar/navbar'

export default function SolicitantesRoute() {
  return (
    <>
      <Navbar />

      {/* No hay fallback UI por lo que hay que tener cuidado de no suspender directamente dentro. */}
      <Suspense fallback={null}>
        <main className="isolate min-w-0">
          <article className="break-words font-normal text-primary">
            <Outlet />
          </article>
        </main>
      </Suspense>
    </>
  )
}
