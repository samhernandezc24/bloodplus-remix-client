import type {LinksFunction, V2_MetaFunction} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import stylesUrl from '~/styles/tailwind.css'

export const links: LinksFunction = () => [{rel: 'stylesheet', href: stylesUrl}]

export const meta: V2_MetaFunction = () => {
  const title = 'BloodPlus: ¡Dona vida!'
  const description =
    'Dona vida a quien más lo necesite y siempre ten la oportunidad de sonreír con BloodPlus.'
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
