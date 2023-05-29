import {useEffect, useRef} from 'react'
import * as React from 'react'
import cn from 'classnames'
import {IconNavArrow} from '~/components/icons'
import {Link} from '@remix-run/react'

interface ChatLinkProps {
  message: any
  isActive?: boolean
}

export function ChatLink({message, isActive}: ChatLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <Link
      to=""
      ref={ref}
      className={cn(
        'relative flex w-full items-center justify-between rounded-none p-2 pr-2 text-left hover:bg-gray-5 lg:rounded-r-2xl',
        {
          'border-rose-40 bg-highlight text-base text-link hover:bg-highlight hover:text-link':
            isActive,
        }
      )}
    >
      {/* Esto aquí necesita ser refactorizado ofc */}
      <div className="flex flex-1 justify-between">
        <p className="text-gray-600">{message.name}</p>
        <p className="text-sm text-gray-400">{message.dateCreation}</p>
      </div>

      <span
        className={cn('pr-1', {
          'text-link': isActive,
          'text-tertiary': !isActive,
        })}
      >
        <IconNavArrow displayDirection="right" />
      </span>
      
    </Link>
  )
}
