import {Suspense} from 'react'
import {TopNav} from '~/components/layout/top-nav'
import SocialBanner from '~/components/social-banner'

export default function DonadoresRoute() {
  return (
    <>
      <SocialBanner />
      <TopNav />

      <Suspense fallback={null}>
        <main className="isolate min-w-0">
          <article className="break-words font-normal text-primary">
            <div className="pl-0">
              <div className="mx-auto max-w-5xl px-0 lg:px-4">
                <div className="px-5 pt-3.5 sm:px-12">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <h1 className="-mx-.5 mt-0 break-words text-5xl font-bold leading-tight text-primary">
                      Buscar donadores
                    </h1>
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-12">
                <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <div className="text-xl leading-relaxed text-primary">
                      <p className="my-4 whitespace-pre-wrap">
                        Encontrar donadores cercanos a tu área utilizando una
                        aplicación como BloodPlus generalmente implica una serie
                        de pasos sencillos que puedes seguir para poder
                        facilitarte la disponibilidad de los donadores de una
                        manera segura y eficiente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className="w-full self-stretch">
            <div className="mx-auto w-full px-5 pt-10 sm:px-12 md:px-12 md:pt-12 lg:pt-10">
              <hr className="mx-auto max-w-7xl border-border" />
            </div>
          </div>
        </main>
      </Suspense>
    </>
  )
}
