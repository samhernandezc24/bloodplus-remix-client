import {Link} from '@remix-run/react'
import {ButtonLink} from '~/components/button'

export default function AccesoSolicitantesRoute() {
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
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Ingresa tu email"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="form-label">
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
                id="password"
                className="form-input"
                type="password"
                placeholder="Ingresa tu contraseña"
              />
            </div>
          </div>
          <div>
            <ButtonLink
              to="/"
              className="mt-1 w-full justify-center"
              type="primary"
              size="md"
            >
              Iniciar sesión
            </ButtonLink>
          </div>
        </form>
      </div>
    </>
  )
}
