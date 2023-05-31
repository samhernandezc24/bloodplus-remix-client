import {createCookieSessionStorage, redirect} from '@remix-run/node'
import axios from 'axios'

type LoginForm = {
  password: string
  email: string
}

export async function login({password, email}: LoginForm) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', {
      email: email,
      password: password,
    })

    if (response.status === 200) {
      const token = response.data.access
      return token
    } else {
      console.error('Estado de respuesta inesperado:', response.status)
      return null
    }
  } catch (error: any) {
    console.error(
      'Error al iniciar sesión:',
      error?.response.data || error.message
    )
    return null
  }
}

const sessionSecret = process.env.SESSION_SECRET || 'secreto^_~'
if (!sessionSecret) {
  throw new Error('SESSION_SECRET debe ser definido.')
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

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    return null
  }
  return userId
}

export async function requiresUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/acceso?${searchParams}`)
  }
  return userId
}

export async function getUser(request: Request) {
  const token = await getUserId(request)
  if (typeof token !== 'string') {
    return null
  }

  try {
    // get an specific user
    const userId = 23
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/usuarios/${userId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    if (response.status === 200) {
      const user = response.data
      return user
    } else {
      throw new Error('Error al recuperar el usuario')
    }
  } catch (error) {
    throw logout(request)
  }
}

export async function logout(request: Request) {
  const session = await getUserSession(request)
  return redirect('/acceso', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}

export async function createUserSession(token: string, redirectTo: string) {
  const session = await storage.getSession()
  session.set('access_token', token)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}
