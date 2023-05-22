import {Link, useLocation, useNavigation} from '@remix-run/react'
import {useEffect, useRef, useState} from 'react'
import * as React from 'react'
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock'
import cn from 'classnames'
import {IconClose, IconHamburger} from '~/components/icons'

const LINKS = [
  {name: 'Donadores', to: '/donadores'},
  {name: 'Precios', to: '/precios'},
  {name: 'FAQ', to: '/faq'},
  {name: '', to: '/chat'},
  {name: '', to: '/solicitudes'},
  {name: '', to: '/me'},
]

const MOBILE_LINKS = [{name: 'Inicio', to: '/solicitantes'}, ...LINKS]

function NavLink({
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

function Kbd(props: {children?: React.ReactNode; wide?: boolean}) {
  const {wide, ...rest} = props
  const width = wide ? 'w-10' : 'w-5'

  return (
    <kbd
      className={`${width} dark:bg-wash-dark mr-1 inline-flex h-5 items-center justify-center rounded-md border border-transparent bg-wash p-0 text-center align-middle text-xs text-gray-30`}
      {...rest}
    />
  )
}

function Navbar() {
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

  const [showSearch, setShowSearch] = useState(false)
  const onOpenSearch = React.useCallback(() => {
    React.startTransition(() => {
      setShowSearch(true)
    })
  }, [])

  const onCloseSearch = React.useCallback(() => {
    setShowSearch(false)
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
                  <NavLink key={link.to} to={link.to}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-1.5 text-base 3xl:flex-1 3xl:justify-end">
              <div className="mx-2.5 hidden gap-1.5 lg:flex">
                <NavLink to="/acceso">Iniciar sesión</NavLink>
              </div>
              <div className="flex w-full md:hidden" />
              <div className="flex items-center -space-x-2.5 xs:space-x-0">
                <div className="flex md:hidden">
                  <Link
                    to="/acceso"
                    className="flex h-12 w-12 items-center justify-center rounded-full outline-link transition-transform hover:bg-secondary-button active:scale-95 md:hidden"
                  >
                    wefwef
                  </Link>
                </div>
                <div className="flex"></div>
                <div className="flex">
                  <a
                    href="https://www.buymeacoffee.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Compráme un cafecito ☕"
                    className="flex h-12 w-12 items-center justify-center rounded-full outline-link transition-transform hover:bg-primary/5 active:scale-95"
                    title="Compráme un cafecito ☕"
                  >
                    werferf
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
                <React.Suspense fallback={null}>
                  <div className="flex flex-row overflow-x-auto pl-3 text-base font-bold text-secondary xs:gap-0.5 xs:pl-5 xs:text-base lg:hidden">
                    {MOBILE_LINKS.map(link => (
                      <NavLink to={link.to} key={link.to}>
                        {link.name}
                      </NavLink>
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
                </React.Suspense>
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

export {Navbar}
