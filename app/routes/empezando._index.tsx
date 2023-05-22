import {Link} from '@remix-run/react'

export default function EmpezandoIndexRoute() {
  return (
    <>
      <h1 className="-mx-.5 break-words text-3xl font-bold leading-tight text-primary md:text-4xl">
        ¿Cómo usarás BloodPlus? ✨
      </h1>
      <div className="my-4">
        <Link
          className="focus block h-full w-full rounded-2xl outline-none focus:outline-none focus:outline-offset-2 focus-visible:outline focus-visible:outline-link"
          to="/empezando/solicitantes"
        >
          <div className="flex h-full w-full flex-1 cursor-pointer flex-col justify-between rounded-2xl p-5 text-xl leading-relaxed text-primary shadow-secondary-button-stroke hover:bg-gray-40/5 active:bg-gray-40/10 sm:p-5">
            <div className="flex w-full flex-row gap-3">
              <h2 className="mb-4 flex-1 text-lg font-semibold leading-snug lg:text-2xl">
                Quiero encontrar donadores
              </h2>
            </div>
            <div>
              <div className="flex flex-row items-center justify-start gap-2 text-base">
                <span className="inline-flex items-center rounded-md bg-green-5 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Prueba gratis 30 días
                </span>
              </div>
              <span className="text-base text-secondary">
                <p className="mt-4 whitespace-pre-wrap">
                  Me gustaría encontrar donadores cercanos a mi área de una
                  manera rápida y segura.
                </p>
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="my-4">
        <Link
          className="focus block h-full w-full rounded-2xl outline-none focus:outline-none focus:outline-offset-2 focus-visible:outline focus-visible:outline-link"
          to="/empezando/donantes"
        >
          <div className="flex h-full w-full flex-1 cursor-pointer flex-col justify-between rounded-2xl p-5 text-xl leading-relaxed text-primary shadow-secondary-button-stroke hover:bg-gray-40/5 active:bg-gray-40/10 sm:p-5">
            <div className="flex w-full flex-row gap-3">
              <h2 className="mb-4 flex-1 text-lg font-semibold leading-snug lg:text-2xl">
                Quiero donar sangre
              </h2>
            </div>
            <div>
              <span className="text-base text-secondary">
                <p className="whitespace-pre-wrap">
                  Acude a la petición de un solicitante de donador y empieza a
                  salvar vidas.
                </p>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
