import {Suspense} from 'react'
import cn from 'classnames'
import {ChatListTree} from './chat-list-tree'

export function ChatList() {
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
            style={{'--bg-opacity': '.2'} as React.CSSProperties} // Es necesario hacer un casting aquí porque los vars CSS no se consideran válidos en los tipos TS (porque podrían ser cualquier cosa)
            className="scrolling-touch scrolling-gpu w-full grow pr-0 pt-6 md:pt-4 lg:h-auto lg:pb-16 lg:pr-5 lg:pt-4"
          >
            {/* No hay fallback UI por lo que hay que tener cuidado de no suspender directamente dentro. */}
            <Suspense fallback={null}>
              <ChatListTree />
            </Suspense>
            <div className="h-20" />
          </nav>
          <div className="fixed bottom-0 hidden lg:block">
            {/** Podemos agregar algo más aquí como feedbacks...pero no se me ocurre nada por ahora */}
          </div>
        </aside>
      </div>
    </div>
  )
}
