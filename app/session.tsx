import {createCookieSessionStorage, redirect} from '@remix-run/node'
import type {Request} from '@remix-run/node'

interface Session {
  has(key: string): boolean
}

const {getSession} = createCookieSessionStorage()

export async function requireUserSession(request: Request): Promise<Session> {
  // obtener la sesión
  const cookie = request.headers.get('cookie')
  const session = await getSession(cookie)

  if (!session.has('userId')) {
    // si no hay ninguna sesión, redirigir a la página de acceso
    throw redirect('/acceso')
  }
  return session
}
