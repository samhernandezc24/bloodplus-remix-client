import {Outlet, useLocation} from '@remix-run/react'
import {Suspense} from 'react'
import cn from 'classnames'
import {Navbar} from '~/components/layout/navbar/navbar'
import {ButtonLink} from '~/components/button'
import {IconNavArrow} from '~/components/icons'
import {MapList} from '~/components/layout/map'

export default function SolicitantesRoute() {
  const location = useLocation()

  let isSolicitantePage = location.pathname === '/solicitantes'
  let content

  if (isSolicitantePage) {
    content = <Outlet />
  } else {
    content = (
      <div className="pl-0">
        <Outlet />
      </div>
    )
  }

  let hasColumns = false
  let showSidebar = false
  let showTest = true

  if (isSolicitantePage) {
    hasColumns = true
    showSidebar = true
    showTest = false
  }

  return (
    <>
      <Navbar />

      <div
        className={cn(
          hasColumns &&
            'grid grid-cols-only-content lg:grid-cols-sidebar-content'
        )}
      >
        {showSidebar && (
          <div className="lg:-mt-16">
            <div className="fixed left-0 right-0 top-0 py-0 shadow lg:sticky lg:pt-16 lg:shadow-none">
              <MapList />
            </div>
          </div>
        )}
        {/* No hay fallback UI por lo que hay que tener cuidado de no suspender directamente dentro. */}
        <Suspense fallback={null}>
          <main className="isolate min-w-0">
            <article className="break-words font-normal text-primary">
              {content}
            </article>
            <div
              className={cn(
                'w-full self-stretch',
                isSolicitantePage && 'mt-[-1px] bg-wash'
              )}
            >
              {!isSolicitantePage && (
                <div className="mx-auto w-full px-5 pt-10 sm:px-12 md:px-12 md:pt-12 lg:pt-10">
                  {<hr className="mx-auto max-w-7xl border-border" />}
                  {showTest && (
                    <>
                      <div className="m-4 flex flex-col items-center p-4">
                        <p className="mb-4 text-lg font-bold text-primary">
                          ¿Qué le parece nuestra aplicación?
                        </p>
                        <div>
                          <ButtonLink
                            href="https://www.surveymonkey.co.uk/r/PYRPF3X"
                            className="mt-1"
                            type="primary"
                            size="md"
                            target="_blank"
                          >
                            ¡Responder encuesta!
                            <IconNavArrow
                              displayDirection="right"
                              className="ml-1 inline"
                            />
                          </ButtonLink>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </main>
        </Suspense>
      </div>
    </>
  )
}
