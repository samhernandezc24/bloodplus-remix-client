import {Suspense} from 'react'
import {IconChevron} from '~/components/icons'
import {TopNav} from '~/components/layout/top-nav'
import SocialBanner from '~/components/social-banner'

export default function FaqRoute() {
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
                      Preguntas más frecuentes
                    </h1>
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-12">
                <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <div className="text-xl leading-relaxed text-primary">
                      <p className="my-4 whitespace-pre-wrap">
                        Este es el apartado en donde se recogen las preguntas y
                        respuestas más habituales que suelen tener nuestros
                        clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 sm:px-12">
                <div className="mx-auto max-w-7xl lg:flex lg:flex-col lg:items-center">
                  <div className="4xl:mx-auto ml-0 max-w-7xl">
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 lg:w-1/2">
                        <div className="single-faq mb-8 w-full rounded-lg bg-wash p-4 shadow-lg sm:p-8 lg:px-6 xl:px-8">
                          <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span className="font-display text-xl font-bold leading-relaxed text-primary">
                                ¿Puedo usar este sistema gratis?
                              </span>
                              <span className="transition group-open:rotate-180">
                                <IconChevron
                                  className="text-link"
                                  displayDirection="down"
                                />
                              </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 font-text text-secondary">
                              Al ingresar al sistema usted puede tener una
                              versión de prueba en la que podrá interactuar y
                              realizar una búsqueda de donadores, por lo tanto
                              no es posible adquirir la experiencia completa del
                              sistema de forma gratuita.
                            </p>
                          </details>
                        </div>
                        <div className="single-faq mb-8 w-full rounded-lg bg-wash p-4 shadow-lg sm:p-8 lg:px-6 xl:px-8">
                          <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span className="font-display text-xl font-bold leading-relaxed text-primary">
                                ¿Es necesario crear una cuenta para contactar
                                donadores?
                              </span>
                              <span className="transition group-open:rotate-180">
                                <IconChevron
                                  className="text-link"
                                  displayDirection="down"
                                />
                              </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 font-text text-secondary">
                              La respuesta es sí, ya que esta información es
                              necesaria tanto para el usuario solicitante como
                              donante para que cada uno tenga la seguridad de
                              llevar a cabo un contacto efectivo y seguidamente
                              una donación.
                            </p>
                          </details>
                        </div>
                      </div>
                      <div className="w-full px-4 lg:w-1/2">
                        <div className="single-faq mb-8 w-full rounded-lg bg-wash p-4 shadow-lg sm:p-8 lg:px-6 xl:px-8">
                          <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span className="font-display text-xl font-bold leading-relaxed text-primary">
                                ¿Puedo suscribirme a más de un plan de donación?{' '}
                              </span>
                              <span className="transition group-open:rotate-180">
                                <IconChevron
                                  className="text-link"
                                  displayDirection="down"
                                />
                              </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 font-text text-secondary">
                              Cada plan tiene beneficios personalizados de
                              acuerdo a las necesidades de los usuarios, por lo
                              que cada uno tiene un tiempo límite de uso, de
                              acuerdo a esta información, se puede suscribir a
                              otro plan una vez que concluya el plan actual.
                            </p>
                          </details>
                        </div>
                        <div className="single-faq mb-8 w-full rounded-lg bg-wash p-4 shadow-lg sm:p-8 lg:px-6 xl:px-8">
                          <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span className="font-display text-xl font-bold leading-relaxed text-primary">
                                ¿Qué hacer en caso de presentar un problema con
                                mi cuenta?
                              </span>
                              <span className="transition group-open:rotate-180">
                                <IconChevron
                                  className="text-link"
                                  displayDirection="down"
                                />
                              </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 font-text text-secondary">
                              Con nuestra sección de "ayuda y soporte" usted se
                              puede contactar con nosotros para atender su
                              petición.
                            </p>
                          </details>
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
