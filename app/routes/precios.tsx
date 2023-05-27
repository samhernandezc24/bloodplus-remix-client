import {Suspense} from 'react'
import {Button, ButtonLink} from '~/components/button'
import {IconCheck} from '~/components/icons'
import {TopNav} from '~/components/layout/top-nav'
import SocialBanner from '~/components/social-banner'

export default function PreciosRoute() {
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
                      Elige un plan adecuado para ti
                    </h1>
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-12">
                <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <div className="text-xl leading-relaxed text-primary">
                      <p className="my-4 whitespace-pre-wrap">
                        Desde una sola solicitud. Todas las cuentas de solicitante de
                        donador incluye uso de la búsqueda optimizada por mapas.
                      </p>
                      <p className="my-4 whitespace-pre-wrap">
                        Si te suscribes a un plan de BloodPlus, aceptas las
                        <a
                          className="ml-1 text-link hover:underline"
                          rel="noreferrer noopener"
                          href="https://phylo.co/blog/traccion/que-son-los-terminos-y-condiciones/"
                          target="_blank"
                        >
                          Condiciones del Servicio de BloodPlus
                        </a>
                        .
                      </p>
                    </div>
                    <hr className="my-6 block border-b border-t-0 border-border" />
                    <div className="mt-12 flex flex-col gap-5 sm:-mx-5">
                      <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
                        <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-border p-6 text-center text-secondary shadow">
                          <h3 className="mb-4 text-2xl font-semibold">
                            Plan Individual
                          </h3>
                          <p className="text-secondary sm:text-lg">
                            Elige esta opción para uso personal.
                          </p>
                          <div className="my-8 flex items-baseline justify-center">
                            <span className="mr-2 text-5xl font-bold">$10</span>
                            <span className="text-secondary">/mensual</span>
                          </div>
                          <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>1 solicitud de donación</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>Chat disponible</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>Ayuda y soporte</span>
                            </li>
                          </ul>
                          <Button
                            className="justify-center text-center"
                            onClick={() => alert('Has seleccionado este plan!')}
                          >
                            Seleccionar
                          </Button>
                        </div>
                        <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-border p-6 text-center text-secondary shadow">
                          <h3 className="mb-4 text-2xl font-semibold">
                            Plan Estándar
                          </h3>
                          <p className="text-secondary sm:text-lg">
                            Elige esta opción para uso personal.
                          </p>
                          <div className="my-8 flex items-baseline justify-center">
                            <span className="mr-2 text-5xl font-bold">$30</span>
                            <span className="text-secondary">/mensual</span>
                          </div>
                          <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>3 solicitudes de donación</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>Chat disponible</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>Ayuda y soporte</span>
                            </li>
                          </ul>
                          <ButtonLink
                            href="/"
                            className="justify-center"
                            type="primary"
                            size="md"
                          >
                            Seleccionar
                          </ButtonLink>
                        </div>
                        <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-border p-6 text-center text-secondary shadow">
                          <h3 className="mb-4 text-2xl font-semibold">
                            Plan Premium
                          </h3>
                          <p className="text-secondary sm:text-lg">
                            Elige esta opción para uso personal.
                          </p>
                          <div className="my-8 flex items-baseline justify-center">
                            <span className="mr-2 text-5xl font-bold">$100</span>
                            <span className="text-secondary">/mensual</span>
                          </div>
                          <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>10 solicitudes de donación</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>Chat disponible</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                              <span>Ayuda y soporte</span>
                            </li>
                          </ul>
                          <Button
                            className="justify-center text-center"
                            onClick={() => alert('Has seleccionado este plan!')}
                          >
                            Seleccionar
                          </Button>
                        </div>
                      </div>
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
