import PageHeading from '~/components/layout/page-heading'
import {IconChevron} from '~/components/icons'
import {MDXComponents} from '~/components/mdx/mdx-components'

const {p: P, h2: H2} = MDXComponents

export default function SolicitantesAyudaRoute() {
  const title = '¿Tienes alguna pregunta?'
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
                Nuestro equipo de superhéroes está a tu disposición para
                ayudarte. Si necesitas reportar algún inconveniente o necesitas
                orientación respecto alguna situacion, siéntete libre de llenar
                el formulario siguiente:
              </P>
              <hr className="my-6 block border-b border-t-0 border-border" />
              <div className="mt-12 flex flex-col gap-5 sm:-mx-5">
                <form className="text-base">
                  <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                          <label htmlFor="asunto" className="form-label">
                            Asunto
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="asunto"
                              id="asunto"
                              autoComplete="asunto"
                              className="form-input"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label htmlFor="message" className="form-label">
                            Mensaje
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              className="form-textarea"
                              defaultValue={''}
                            />
                          </div>
                          <p className="mt-3 text-base leading-6 text-gray-600">
                            Por favor, facilítenos más detalles sobre su
                            solicitud/problema
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-primary/10 pb-12">
                      <H2 id="tipo-problema">Tipo de Problema</H2>
                      <P>
                        Para poder brindarle un soporte de ayuda mejor, le
                        agradeceríamos si pudiera especificar el tipo de
                        problema que está encontrando en su experiencia por
                        BloodPlus.
                      </P>
                      <div className="mt-10 space-y-10">
                        <div className="mt-6 space-y-6">
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-link focus:ring-link"
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-base font-medium leading-6 text-primary"
                            >
                              Problemas técnicos
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-link focus:ring-link"
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-base font-medium leading-6 text-primary"
                            >
                              Problemas de seguridad
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-link focus:ring-link"
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-base font-medium leading-6 text-primary"
                            >
                              Problemas de precisión de búsqueda
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-link focus:ring-link"
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-base font-medium leading-6 text-primary"
                            >
                              Problemas de calidad del servicio
                            </label>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-link focus:ring-link"
                            />
                            <label
                              htmlFor="push-everything"
                              className="block text-base font-medium leading-6 text-primary"
                            >
                              Problemas de atención al cliente
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="submit"
                      aria-label="Enviar"
                      onClick={e => {
                        e.preventDefault()
                        window.open('https://www.github.com', '_blank')
                      }}
                      className="my-1 inline-flex items-center rounded-full border-purple-50 bg-purple-50 px-4 py-2 text-base font-bold leading-tight text-white hover:bg-purple-40 focus:bg-purple-50 focus:outline focus:outline-offset-2 active:bg-purple-50"
                    >
                      Enviar
                      <span className="ml-1">
                        <IconChevron displayDirection="right" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
