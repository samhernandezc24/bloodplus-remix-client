import type {LinksFunction, V2_MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from '@remix-run/react'

import {useNonce} from './utils/nonce-provider'
import stylesUrl from '~/styles/tailwind.css'
import {ButtonLink} from './components/button'

export const links: LinksFunction = () => [{rel: 'stylesheet', href: stylesUrl}]

export const meta: V2_MetaFunction = () => {
  const title = 'BloodPlus: ¡Dona vida!'
  const description =
    'Dona vida a quien más lo necesita y siempre ten la oportunidad de sonreír con BloodPlus.'
  const viewport = 'width=device-width,initial-scale=1'
  return [
    {title: title},
    {
      name: 'description',
      content: description,
    },
    {
      name: 'viewport',
      content: viewport,
    },
  ]
}

export default function App() {
  const nonce = useNonce()
  return (
    <html className="h-full" lang="en">
      <head>
        {/** Todas las metaexportaciones de todas las rutas irán aquí */}
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="bg-wash font-text text-lg font-medium leading-base text-secondary antialiased">
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  )
}

function ErrorDoc({children}: {children: React.ReactNode}) {
  const nonce = useNonce()
  return (
    <html className="h-full" lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops...</title>
        <Links />
      </head>
      <body className="bg-wash font-text text-lg font-medium leading-base text-secondary antialiased">
        {children}
        <Scripts nonce={nonce} />
      </body>
    </html>
  )
}

// mejor esfuerzo, último error boundary. Esto sólo debe atrapar errores de root
// todos los demás errores deben ser capturados por el index route que incluirá
// los elementos repetitivos en las páginas.
export function ErrorBoundary() {
  const error = useRouteError()
  const location = useLocation()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorDoc>
        <main className="isolate flex h-screen min-w-0 items-center justify-center">
          <article className="break-words font-normal text-primary">
            <div className="pl-0">
              <div className="px-5 pt-3.5 sm:px-12">
                <div className="ml-0 max-w-4xl 2xl:mx-auto">
                  <h1 className="textprimary mt-0 font-display text-5xl font-bold leading-tight">
                    No Encontrado
                  </h1>
                </div>
              </div>
              <div className="px-5 sm:px-12">
                <div className="mx-auto max-w-7xl">
                  <div className="ml-0 max-w-4xl 2xl:mx-auto">
                    <div className="font-display text-xl leading-relaxed text-primary">
                      <p className="my-4 whitespace-pre-wrap">
                        {error.status} - No existe.
                      </p>
                      <p className="my-4 whitespace-pre-wrap">
                        "{location.pathname}" no es una página en BloodPlus. Lo
                        sentimos 😶.
                      </p>
                      <ButtonLink
                        to="/"
                        type="primary"
                        size="md"
                        label="Regresar al Inicio"
                      >
                        Regresar al Inicio
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </ErrorDoc>
    )
  }

  const errorMessage =
    error instanceof Error ? error.message : 'Error desconocido'
  return (
    <ErrorDoc>
      <main className="isolate flex h-screen min-w-0 items-center justify-center">
        <article className="break-words font-normal text-primary">
          <div className="pl-0">
            <div className="px-5 pt-3.5 sm:px-12">
              <div className="ml-0 max-w-4xl 2xl:mx-auto">
                <h1 className="textprimary mt-0 font-display text-5xl font-bold leading-tight">
                  Error de Aplicación
                </h1>
              </div>
            </div>
            <div className="px-5 sm:px-12">
              <div className="mx-auto max-w-7xl">
                <div className="ml-0 max-w-4xl 2xl:mx-auto">
                  <div className="font-display text-xl leading-relaxed text-primary">
                    <p className="my-4 whitespace-pre-wrap">
                      {errorMessage} - Oh no, algo salió muy mal.
                    </p>
                    <p className="my-4 whitespace-pre-wrap">
                      "{location.pathname}" al parecer no está funcionando como
                      debería. Lo sentimos 😥.
                    </p>
                    <ButtonLink
                      to="/"
                      type="primary"
                      size="md"
                      label="Regresar al Inicio"
                    >
                      Regresar al Inicio
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </ErrorDoc>
  )
}
