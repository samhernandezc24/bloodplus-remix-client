import {Link, Outlet} from '@remix-run/react'
import {Suspense} from 'react'

export default function Empezando() {
  return (
    <>
      <Suspense fallback={null}>
        <main className="flex flex-col md:h-screen md:flex-row-reverse">
          <section className="mx-auto flex w-full items-start bg-rose-300 px-4 md:w-1/3 md:items-center md:px-0">
            <div className="relative mx-auto my-auto flex w-full min-w-min max-w-sm origin-left transform flex-row items-center py-4 pt-4 text-primary md:-left-2.5 md:mx-0 md:py-4">
              <div className="flex items-center space-x-1">
                {/** Aquí se puede colocar un diseño bonito para manera de presentación */}
                <Link
                  className={`relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full p-1 text-lg font-normal text-primary outline-link transition-transform active:scale-95 3xl:rounded-xl`}
                  to="/"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mr-0 h-10 w-auto origin-center text-sm text-link transition-all ease-in-out"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo TailwindCSS"
                  />
                  <span className="sr-only text-xl font-bold text-secondary 3xl:not-sr-only">
                    BloodPlus
                  </span>
                </Link>
              </div>
            </div>
          </section>
          <section className="justify-center px-4 md:flex md:w-2/3 md:border-r md:px-0">
            <div className="mx-auto my-auto w-full min-w-min max-w-sm py-4 md:w-7/12 md:py-9">
              <Outlet />
            </div>
          </section>
        </main>
      </Suspense>
    </>
  )
}
