import type {LinksFunction} from '@remix-run/node'
import {Links, LiveReload, Outlet, Scripts} from '@remix-run/react'

import stylesUrl from '~/styles/tailwind.css'

export const links: LinksFunction = () => [{rel: 'stylesheet', href: stylesUrl}]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BloodPlus: ¡Dona vida!</title>
        <Links />
      </head>
      <body className="bg-wash font-text text-lg font-medium leading-base text-secondary antialiased">
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
