import {Suspense} from 'react'
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
            </div>
          </article>
          <div className="w-full self-stretch">
            <div className="mx-auto w-full px-5 pt-10 sm:px-12 md:px-12 md:pt-12 lg:pt-10">
              <hr className="mx-auto max-w-7xl border-border" />
            </div>
          </div>
        </main>        
      </Suspense>

      <section>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-xl leading-relaxed text-primary font-bold">¿Puedo usar este sistema gratis?</span>
                      <span className="transition group-open:rotate-180">
                      <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#FB7185"
                        stroke="#FB7185"
                      />
                    </svg>
                      </span>
                  </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Al ingresar al sistema usted puede tener una versión de prueba en la que podrá interactuar
                      y realizar una búsqueda de donadores, por lo tanto no es posible adquirir la experiencia completa 
                      del sistema de forma gratuita.
                    </p>
                </details>
              </div>

              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-xl leading-relaxed text-primary font-bold">¿Es necesario crear una cuenta para contactar donadores?</span>
                      <span className="transition group-open:rotate-180">
                      <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#FB7185"
                        stroke="#FB7185"
                      />
                    </svg>
                      </span>
                  </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      La respuesta es sí, ya que esta información es necesaria tanto para el usuario solicitante como donante
                      para que cada uno tenga la seguridad de llevar a cabo un contacto efectivo y seguidamente una donación.
                    </p>
                </details>
              </div>

            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-xl leading-relaxed text-primary font-bold">¿Puedo suscribirme a más de un plan de donación? </span>
                      <span className="transition group-open:rotate-180">
                      <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#FB7185"
                        stroke="#FB7185"
                      />
                    </svg>
                      </span>
                  </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Cada plan tiene beneficios personalizados de acuerdo a las necesidades de los usuarios,
                      por lo que cada uno tiene un tiempo límite de uso, de acuerdo a esta información, se puede suscribir a otro plan
                      una vez que concluya el plan actual.
                    </p>
                </details>
              </div>

              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-xl leading-relaxed text-primary font-bold">¿Qué hacer en caso de presentar un problema con mi cuenta?</span>
                      <span className="transition group-open:rotate-180">
                      <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#FB7185"
                        stroke="#FB7185"
                      />
                    </svg>
                      </span>
                  </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Con nuestra sección de "ayuda y soporte" usted se puede contactar con nosotros para
                      atender su petición.
                    </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
