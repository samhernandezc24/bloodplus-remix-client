import axios from 'axios'
import {createCookieSessionStorage, redirect} from '@remix-run/node'

type LoginForm = {
  password: string
  email: string
}

export async function login({password, email}: LoginForm) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
      email,
      password,
    })

    const token = response.data.access

    const session = await getUserSession()
    session.set('token', token)
    await storage.commitSession(session)
  } catch (error: any) {
    console.error('Error de inicio de sesión:', error)
    throw new Error('Error de inicio de sesión')
  }
}

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET debe ser definida')
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'RJ_session',
    // normalmente quieres que esto sea `secure: true`
    // pero eso no funciona en localhost para Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

function getUserSession(request?: Request) {
  return storage.getSession(request?.headers.get('Cookie'))
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/acceso', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}
