import {Button} from '~/components/button'
import {IconCheck} from '~/components/icons'
import PageHeading from '~/components/layout/page-heading'
import {MDXComponents} from '~/components/mdx/mdx-components'

const {h3: H3, p: P} = MDXComponents

export default function SolicitantesPreciosRoute() {
  const title = 'Elige un plan adecuado para ti'
  return (
    <>
      <div className="">
        <PageHeading title={title} />
      </div>
      <div className="px-5 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="ml-0 max-w-4xl 2xl:mx-auto">
            <div className="font-display text-xl leading-relaxed text-primary">
              <P>
                Desde una solicitud. Todas las cuentas de solicitante de donador
                incluye uso de la búsqueda optimizada por mapas.
              </P>
              <P>
                Si te suscribes a un plan de BloodPlus, aceptas las{' '}
                <a
                  className="ml-1 text-link hover:underline"
                  rel="noreferrer noopener"
                  href="https://phylo.co/blog/traccion/que-son-los-terminos-y-condiciones/"
                  target="_blank"
                >
                  Condiciones del Servicio de BloodPlus
                </a>
                .
              </P>
              <hr className="my-6 block border-b border-t-0 border-border" />
              <div className="mt-12 flex flex-col gap-5 sm:-mx-5">
                <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
                  <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-border p-6 text-center text-secondary shadow">
                    <H3 id="plan-individual">Plan Individual</H3>
                    <p className="text-secondary sm:text-lg">
                      Elige esta opción para uso personal.
                    </p>
                    <div className="my-8 flex items-baseline justify-center">
                      <span className="mr-2 text-5xl font-bold">$10</span>
                      <span className="text-secondary">/mensual</span>
                    </div>
                    <ul
                      role="list"
                      className="mb-8 space-y-4 text-left text-lg"
                    >
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
                    <H3 id="plan-estandard">Plan Estándar</H3>
                    <p className="text-secondary sm:text-lg">
                      Elige esta opción para uso personal.
                    </p>
                    <div className="my-8 flex items-baseline justify-center">
                      <span className="mr-2 text-5xl font-bold">$30</span>
                      <span className="text-secondary">/mensual</span>
                    </div>
                    <ul
                      role="list"
                      className="mb-8 space-y-4 text-left text-lg"
                    >
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
                    <Button
                      className="justify-center rounded-full bg-link px-4 py-2 text-center text-white hover:bg-opacity-80"
                      onClick={() => alert('Has seleccionado este plan!')}
                    >
                      Seleccionar
                    </Button>
                  </div>
                  <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-border p-6 text-center text-secondary shadow">
                    <H3 id="plan-premium">Plan Premium</H3>
                    <p className="text-secondary sm:text-lg">
                      Elige esta opción para uso personal.
                    </p>
                    <div className="my-8 flex items-baseline justify-center">
                      <span className="mr-2 text-5xl font-bold">$100</span>
                      <span className="text-secondary">/mensual</span>
                    </div>
                    <ul
                      role="list"
                      className="mb-8 space-y-4 text-left text-lg"
                    >
                      <li className="flex items-center space-x-3">
                        <IconCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" />
                        <span>Solicitudes ilimitadas</span>
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
    </>
  )
}
