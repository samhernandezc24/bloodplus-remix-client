import {Suspense} from 'react'
import cn from 'classnames'

export default function SidebarNav() {
  return (
    <div
      className={cn(
        'sticky top-0 flex flex-col lg:bottom-0 lg:h-[calc(100vh-4rem)]'
      )}
    >
      <div
        className="no-bg-scrollbar grow overflow-y-scroll bg-wash lg:w-[342px]"
        style={{overscrollBehavior: 'contain'}}
      >
        <aside
          className={cn(
            `z-10 hidden w-full flex-col pb-8 lg:block lg:max-w-xs lg:grow lg:pb-0`
          )}
        >
          <nav
            role="navigation"
            style={{'--bg-opacity': '.2'} as React.CSSProperties} // Es necesario hacer un molde aquí porque las variables CSS no se consideran válidas en los tipos TS (porque podrían ser cualquier cosa).
            className="scrolling-touch scrolling-gpu w-full grow pr-0 pt-6 md:pt-4 lg:h-auto lg:pb-16 lg:pr-5 lg:pt-4"
          >
            <Suspense fallback={null}>
              {/** aqui se mostrara la información de los donadores */}
            </Suspense>
            <div className="h-20" />
          </nav>
          <div className="fixed bottom-0 hidden lg:block">
            {/** aqui tambien se puede mostrar otra información adicional */}
          </div>
        </aside>
      </div>
    </div>
  )
}
