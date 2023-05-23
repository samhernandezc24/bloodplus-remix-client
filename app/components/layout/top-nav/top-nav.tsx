import {Suspense, useEffect, useRef, useState} from 'react'
import {Link, useLocation, useNavigation} from '@remix-run/react'
import cn from 'classnames'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'
import {IconClose, IconHamburger} from '~/components/icons'

const LINKS = [
  {name: 'Información', to: '/informacion'},
  {name: 'Precios', to: '/precios'},
  {name: 'FAQ', to: '/faq'},
]

const MOBILE_LINKS = [{name: 'Inicio', to: '/'}, ...LINKS]

const loginIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
  </svg>
)

const coffeeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"></path>
  </svg>
)

function NavItem({
  to,
  ...rest
}: Omit<Parameters<typeof Link>['0'], 'to'> & {to: string}) {
  const location = useLocation()
  const isActive =
    to === location.pathname || location.pathname.startsWith(`${to}/`)

  return (
    <div className="flex flex-auto sm:flex-1">
      <Link
        to={to}
        className={cn(
          'w-full rounded-full px-1.5 py-1.5 text-center capitalize outline-link transition-transform active:scale-95 xs:px-3 sm:px-4',
          !isActive && 'hover:bg-primary/5',
          isActive && 'bg-highlight text-link'
        )}
        {...rest}
      />
    </div>
  )
}

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollParentRef = useRef<HTMLDivElement>(null)
  const navigation = useNavigation()
  const [isScrolled, setIsScrolled] = useState(false)

  // Mientras el overlay esté abierto, desactivamos el desplazamiento del `body page`.
  useEffect(() => {
    if (isOpen) {
      const preferredScrollParent = scrollParentRef.current!
      disableBodyScroll(preferredScrollParent)
      return () => enableBodyScroll(preferredScrollParent)
    } else {
      return undefined
    }
  }, [isOpen])

  // Cerrar el overlay en cualquier navegación.
  useEffect(() => {
    setIsOpen(false)
  }, [navigation.location])

  // También cerramos el overlay si la ventana se redimensiona más allá del diseño móvil.
  // (Esto también es importante porque no queremos mantener el body page bloqueado).
  useEffect(() => {
    const media = window.matchMedia(`(max-width: 1023px)`)

    function closeIfNeeded() {
      if (!media.matches) {
        setIsOpen(false)
      }
    }

    media.addEventListener('change', closeIfNeeded)
    return () => {
      media.removeEventListener('change', closeIfNeeded)
    }
  }, [])

  const scrollDetectorRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsScrolled(!entry.isIntersecting)
        })
      },
      {
        root: null,
        rootMargin: `0px 0px`,
        threshold: 0,
      }
    )
    observer.observe(scrollDetectorRef.current!)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={scrollDetectorRef} />
      <div
        className={cn(
          isOpen
            ? 'sticky top-0 z-20 flex h-screen flex-col shadow-nav lg:bottom-0 lg:h-screen'
            : 'sticky top-0 z-50'
        )}
      >
        <nav
          className={cn(
            'z-50 flex w-full items-center justify-between bg-wash bg-opacity-90 px-1.5 backdrop-blur-lg backdrop-saturate-200 backdrop-filter transition-shadow duration-300 lg:pl-4 lg:pr-5',
            {'shadow-nav': isScrolled || isOpen}
          )}
        >
          <div className="flex h-16 w-full items-center justify-between gap-0 sm:gap-3">
            <div className="flex flex-row 3xl:flex-1">
              <button
                type="button"
                aria-label="Menu"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-full outline-link transition-transform hover:bg-primary/5 active:scale-95 lg:hidden',
                  {
                    'text-link': isOpen,
                  }
                )}
              >
                {isOpen ? <IconClose /> : <IconHamburger />}
              </button>
              <div className="flex self-center 3xl:flex-1">
                <Link
                  to="/"
                  className={`relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full p-1 text-lg font-normal text-primary outline-link transition-transform active:scale-95 3xl:rounded-xl`}
                >
                  <img
                    className="mr-0 h-10 w-auto origin-center text-sm text-link transition-all ease-in-out"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo TailwindCSS"
                  />
                  <span className="sr-only 3xl:not-sr-only">BloodPlus</span>
                </Link>
              </div>
            </div>
            <div className="hidden w-full flex-1 items-center justify-center text-base md:flex 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
              <div className="mx-2.5 hidden gap-1.5 lg:flex">
                {LINKS.map(link => (
                  <NavItem key={link.to} to={link.to}>
                    {link.name}
                  </NavItem>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-1.5 text-base 3xl:flex-1 3xl:justify-end">
              <div className="mx-2.5 hidden gap-1.5 lg:flex">
                <NavItem to="/acceso">Iniciar sesión</NavItem>
              </div>
              <div className="flex w-full md:hidden" />
              <div className="flex items-center -space-x-2.5 xs:space-x-0">
                <div className="flex md:hidden">
                  <Link
                    to="/acceso"
                    className="flex h-12 w-12 items-center justify-center rounded-full outline-link transition-transform hover:bg-secondary-button active:scale-95 md:hidden"
                  >
                    {loginIcon}
                  </Link>
                </div>
                <div className="flex">
                  <a
                    href="https://www.buymeacoffee.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Compráme un cafecito ☕"
                    className="flex h-12 w-12 items-center justify-center rounded-full outline-link transition-transform hover:bg-primary/5 active:scale-95"
                    title="Compráme un cafecito ☕"
                  >
                    {coffeeIcon}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div
            ref={scrollParentRef}
            className="no-bg-scrollbar isolate grow overflow-y-scroll bg-wash lg:w-[342px]"
          >
            <aside
              className={cn(
                `z-50 w-full flex-col pb-8 lg:flex lg:max-w-xs lg:grow lg:pb-0`,
                isOpen ? 'z-40 block' : 'hidden lg:block'
              )}
            >
              <nav
                role="navigation"
                style={{'--bg-opacity': '.2'} as React.CSSProperties} // Es necesario hacer un cast aquí porque las variables CSS no se consideran válidas en los tipos TS (porque...podrían ser cualquier cosa).
                className="scrolling-touch scrolling-gpu w-full grow pr-0 pt-4 md:pt-4 lg:h-auto lg:py-6 lg:pr-5 lg:pt-4"
              >
                <Suspense fallback={null}>
                  <div className="flex flex-row overflow-x-auto pl-3 text-base font-bold text-secondary xs:gap-0.5 xs:pl-5 xs:text-base lg:hidden">
                    {MOBILE_LINKS.map(link => (
                      <NavItem to={link.to} key={link.to}>
                        {link.name}
                      </NavItem>
                    ))}
                  </div>
                  <div
                    role="separator"
                    className="mb-2 ml-5 mt-4 border-b border-border"
                  />
                  <ul>
                    <h3 className="mb-1 ml-5 text-sm font-bold text-tertiary">
                      EMPEZANDO
                    </h3>
                    <li>
                      <Link
                        title="Iniciar Sesión"
                        target=""
                        className="relative flex w-full items-center justify-between rounded-none p-2 pl-5 pr-2 text-left text-base font-bold text-primary hover:bg-gray-5 lg:rounded-r-2xl"
                        to="/acceso"
                      >
                        <span className="">Iniciar Sesión</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Registrarse"
                        target=""
                        className="relative flex w-full items-center justify-between rounded-none p-2 pl-5 pr-2 text-left text-base font-bold text-primary hover:bg-gray-5 lg:rounded-r-2xl"
                        to="/empezando"
                      >
                        <span className="">Registrarse</span>
                      </Link>
                    </li>
                  </ul>
                </Suspense>
                <div className="h-16" />
              </nav>
              <div className="fixed bottom-0 hidden lg:block">
                {/** Podemos agregar algo más aquí como feedbacks...pero no se me ocurre nada por ahora */}
              </div>
            </aside>
          </div>
        )}
      </div>
    </>
  )
}
