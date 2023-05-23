import {Outlet} from '@remix-run/react'

export default function DonantesRoute() {
  return (
    <div>
      <h1>Sesión como Donante 😎</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
