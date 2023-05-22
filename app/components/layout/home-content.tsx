import cn from 'classnames'
import {ButtonLink} from '../button'

function Section({children, background = null}: any) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-col',
        background === null && 'max-w-7xl',
        background === 'left-card' &&
          'border-t border-primary/10 bg-gradient-left',
        background === 'right-card' &&
          'border-t border-primary/5 bg-gradient-right'
      )}
      style={{
        contain: 'content',
      }}
    >
      <div className="mx-auto my-20 flex w-full grow flex-col items-center gap-2 lg:my-32">
        {children}
      </div>
    </div>
  )
}

function Header({children}: any) {
  return (
    <h2 className="-mt-4 mb-7 w-full max-w-3xl font-display text-5xl font-semibold leading-xl text-primary lg:max-w-xl lg:text-6xl">
      {children}
    </h2>
  )
}

function Para({children}: any) {
  return (
    <p className="mx-auto max-w-3xl text-lg leading-normal text-secondary lg:text-xl">
      {children}
    </p>
  )
}

function Center({children}: any) {
  return (
    <div className="flex max-w-4xl flex-col items-center justify-center px-5 text-white text-opacity-80 lg:px-0 lg:text-center">
      {children}
    </div>
  )
}

export function HomeContent() {
  return (
    <>
      <div className="pl-0">
        <div className="mx-5 mb-20 mt-12 flex flex-col justify-center lg:mb-32 lg:mt-24">
          <h1 className="flex self-center text-5xl font-semibold leading-snug text-primary lg:text-6xl">
            BloodPlus
          </h1>
          <p className="max-w-lg self-center py-1 text-center text-4xl leading-snug text-secondary md:max-w-full">
            Dona vida a quien más lo necesite
          </p>
          <div className="mt-5 flex w-full flex-col gap-2 self-center sm:w-auto sm:flex-row">
            <ButtonLink
              to={'/empezando'}
              type="primary"
              size="lg"
              className="w-full justify-center sm:w-auto"
              label="Registrarse"
            >
              Registrarse
            </ButtonLink>
            <ButtonLink
              to={'/acceso'}
              type="secondary"
              size="lg"
              className="w-full justify-center sm:w-auto"
              label="Iniciar Sesión"
            >
              Iniciar Sesión
            </ButtonLink>
          </div>
        </div>

        <Section background="left-card">
          <Center>
            <Header>¿Por qué Donar Sangre?</Header>
            <Para>
              Donar es una acción de generosidad. Ayuda a las personas que lo
              necesitan y a quienes forman parte de nuestra comunidad. Cuando
              donas sangre, otros pueden vivir.
            </Para>
          </Center>
        </Section>

        <Section background="right-card">
          <div className="w-full">
            <div className="mx-auto flex max-w-4xl flex-col">
              <Center>
                <Header>
                  Empieza apoyando <br className="hidden lg:inline" />a esta
                  comunidad
                </Header>
                <Para>
                  No eres el único. Millones de personas de todo el mundo día
                  con día necesitan de donadores de sangre.
                </Para>
              </Center>
            </div>
          </div>

          <div className="mb-6 mt-20 max-w-4xl px-5 text-center text-opacity-80 lg:px-0">
            <img
              className="mx-auto mb-10 self-start lg:mb-8"
              src="/assets/images/bloodplus.png"
              width={500}
              height={500}
              alt="Imagen de Fondo de Donaciones"
            />
            <ButtonLink
              href={'/empezando'}
              type="primary"
              size="lg"
              label="Empezar Ahora"
            >
              Empezar Ahora
            </ButtonLink>
          </div>
        </Section>
      </div>
    </>
  )
}
