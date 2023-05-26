import {Suspense} from 'react'
import {Button} from '~/components/button'
import {IconChevron} from '~/components/icons'

export default function SolicitantesAyudaRoute() {
  return (
    <>
      <Suspense fallback={null}>
        <main className="isolate min-w-0">
          <article className="break-words font-normal text-primary">
            <div className="pl-0">
              <div className="mx-auto max-w-5xl px-0 lg:px-4">
                <div className="px-5 pt-3.5 sm:px-12">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <h1 className="-mx-.5 mt-0 break-words text-5xl font-bold leading-tight text-primary">
                      ¿Tienes alguna pregunta?
                    </h1>
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-12">
                <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <div className="font-display text-xl leading-relaxed text-primary">
                      <p className="my-4 whitespace-pre-wrap">
                        Nuestro equipo de superhéroes está a tu disposición para
                        ayudarte. Si necesitas reportar algún inconveniente o
                        necesitas orientación respecto alguna situacion,
                        siéntete libre de llenar el formulario siguiente:
                      </p>
                    </div>
                    <div className="mt-12 flex flex-col gap-5 sm:-mx-5">
                      <form>
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
                            <h2 className="font-display font-semibold leading-7 text-primary">
                              Tipo de Problema
                            </h2>
                            <p className="mt-1 leading-6 text-secondary">
                              Para poder brindarle un soporte de ayuda mejor, le
                              agradeceríamos si pudiera especificar el tipo de
                              problema que está encontrando en su experiencia
                              por BloodPlus.
                            </p>

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
