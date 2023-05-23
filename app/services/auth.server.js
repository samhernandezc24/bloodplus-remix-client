import {createCookieSessionStorage, redirect} from '@remix-run/node'
import axios from './axios.server'

let storage = createCookieSessionStorage({
  cookie: {
    name: 'bloodplus_session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.SESSION_SECRET],
    sameSite: 'lax',
    path: '/',
    maxAge: 15552000,
    httpOnly: true,
  },
})

export async function login({request, email, password}) {
  let response
  let session = await storage.getSession(request.headers.get('Cookie'))

  try {
    response = await axios.post('/api/v1/token/', {email, password})
  } catch (error) {
    return {errors: Object.values(error.response.data.errors).flat()}
  }
  session.set('userToken', response.data.token)

  return {
    redirector: redirect('/', {
      headers: {
        'Set-Cookie': await storage.commitSession(session),
      },
    }),
  }
}

export async function logout({request}) {
  const session = await storage.getSession(request.headers.get('Cookie'))

  let token = session.get('userToken')

  await axios.post(
    '/api/v1/logout/',
    {},
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  )
  return redirect('/acceso', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}
