import {Outlet, useLocation} from '@remix-run/react'
import {Suspense, useState} from 'react'
import cn from 'classnames'
import {Navbar} from '~/components/layout/navbar/navbar'
import {ButtonLink} from '~/components/button'
import {IconNavArrow} from '~/components/icons'
import {MapList} from '~/components/layout/map'
import {ChatList} from '~/components/layout/chat'
import { requireUserSession } from '~/session'
import { LoaderArgs } from '@remix-run/node'

export default function SolicitantesRoute() {
  const [type, setType] = useState('A+')
  const [rating, setRating] = useState('')

  const [coords, setCoords] = useState({})
  const [bounds, setBounds] = useState(null)

  const [donors, setDonors] = useState([])

  const [autocomplete, setAutocomplete] = useState(null)

  const location = useLocation()

  let isSolicitantePage = location.pathname === '/solicitantes'
  let isChatPage = location.pathname === '/solicitantes/chat'
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

  if (isSolicitantePage || isChatPage) {
    hasColumns = true
    showSidebar = true
    showTest = false
  }

  //const onLoad = (autoC: any) => setAutocomplete(autoC)

  /*const onPlaceChanged = () => {
    const lat = autocomplete.getDonor().geometry.location.lat()
    const lng = autocomplete.getDonor().geometry.location.lng()

    setCoords({lat, lng})
  }*/

  return (
    <>
      <Navbar />

      <div
        className={cn(
          hasColumns &&
            isSolicitantePage &&
            'grid grid-cols-only-content lg:grid-cols-sidebar-content',
          hasColumns &&
            isChatPage &&
            'grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc'
        )}
      >
        {showSidebar && isSolicitantePage && (
          <div className="lg:-mt-16">
            <div className="fixed left-0 right-0 top-0 py-0 shadow lg:sticky lg:pt-16 lg:shadow-none">
              <MapList />
            </div>
          </div>
        )}

        {showSidebar && isChatPage && (
          <div className="lg:-mt-16">
            <div className="fixed left-0 right-0 top-0 py-0 shadow lg:sticky lg:pt-16 lg:shadow-none">
              <ChatList />
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
                isSolicitantePage && isChatPage && 'mt-[-1px] bg-wash'
              )}
            >
              {!isSolicitantePage && !isChatPage && (
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
