import type {ActionArgs} from '@remix-run/node'
import {Form, Link, useActionData, useSearchParams} from '@remix-run/react'
import {badRequest} from '~/utils/request.server'
import {createUserSession, login} from '~/utils/session.server'

function validateEmail(email: string) {
  if (email.length < 6) {
    return 'El email debe tener al menos 6 caracteres.'
  }

  // Verifica si el email tiene un formato válido utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'El email debe tener un formato válido'
  }

  return null
}

function validatePassword(password: string) {
  if (password.length < 8) {
    return 'La contraseña debe tener al menos 8 caracteres.'
  }

  // Si todas las validaciones pasan, retorna null
  return null
}

function validateUrl(url: string) {
  const urls = ['/solicitantes', '/', 'https://remix.run']
  if (urls.includes(url)) {
    return url
  }
  return '/solicitantes'
}

export const action = async ({request}: ActionArgs) => {
  const form = await request.formData()
  const password = form.get('password')
  const email = form.get('email')
  const redirectTo = validateUrl(
    (form.get('redirectTo') as string) || '/solicitantes'
  )

  if (typeof password !== 'string' || typeof email !== 'string') {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: 'El formulario no se ha enviado correctamente.',
    })
  }

  const fields = {password, email}
  const fieldErrors = {
    password: validatePassword(password),
    email: validateEmail(email),
  }

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    })
  }

  const token = await login({email, password})
  //console.log({token})
  if (!token) {
    return badRequest({
      fieldErrors: null,
      fields,
      formError: 'Usuario y/o contraseña son inválidos.',
    })
  }
  return createUserSession(token, redirectTo)
}

export default function AccesoSolicitantesRoute() {
  const actionData = useActionData<typeof action>()
  const [searchParams] = useSearchParams()

  return (
    <>
      <h1 className="-mx-.5 break-words text-3xl font-bold leading-tight text-primary md:text-4xl">
        Iniciar sesión
      </h1>
      <p className="py-1 text-secondary">
        ¿Eres nuevo en BloodPlus?{' '}
        <Link
          className="ml-0 text-link hover:underline sm:ml-1"
          to="/empezando"
        >
          Regístrate
        </Link>
        .
      </p>
      <div className="my-4">
        <Form className="space-y-6" method="post" autoComplete="off">
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get('redirectTo') ?? undefined}
          />
          <div>
            <label htmlFor="email-input" className="form-label">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email-input"
                className="form-input"
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                defaultValue={actionData?.fields?.email}
                aria-invalid={Boolean(actionData?.fieldErrors?.email)}
                aria-errormessage={
                  actionData?.fieldErrors?.email ? 'email-error' : undefined
                }
              />
              {actionData?.fieldErrors?.email ? (
                <p
                  className="text-sm text-red-50"
                  role="alert"
                  id="email-error"
                >
                  {actionData.fieldErrors.email}
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password-input" className="form-label">
                Contraseña
              </label>
              <div className="text-sm">
                <Link className="font-medium text-link hover:underline" to="/">
                  ¿Se te olvidó la contraseña?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password-input"
                className="form-input"
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                defaultValue={actionData?.fields?.password}
                aria-invalid={Boolean(actionData?.fieldErrors?.password)}
                aria-errormessage={
                  actionData?.fieldErrors?.password
                    ? 'password-error'
                    : undefined
                }
              />
              {actionData?.fieldErrors?.password ? (
                <p
                  className="text-sm text-red-50"
                  role="alert"
                  id="password-error"
                >
                  {actionData.fieldErrors.password}
                </p>
              ) : null}
            </div>
          </div>
          <div id="form-error-message">
            {actionData?.formError ? (
              <p className="text-sm text-red-50" role="alert">
                {actionData.formError}
              </p>
            ) : null}
          </div>
          <div>
            <button
              className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-link px-4 py-2 text-base font-bold leading-snug text-white outline-none transition-transform hover:bg-opacity-80 focus:outline-none focus:outline-offset-2 focus-visible:outline focus-visible:outline-link active:scale-[.98]"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}
