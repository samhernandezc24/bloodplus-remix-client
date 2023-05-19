import cn from 'classnames'
import * as React from 'react'
import {AnchorOrLink} from '~/utils/misc'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  label?: string
  children: React.ReactNode | React.ReactNode[]
}

function getClassName({className}: {className?: string}) {
  return cn(
    'group relative active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 leading-snug',
    className
  )
}

function Button({
  children,
  type,
  size = 'md',
  className,
  label,
  ...buttonProps
}: ButtonProps & JSX.IntrinsicElements['button']) {
  return (
    <button {...buttonProps} className={getClassName({className})} type={type}>
      {children}
    </button>
  )
}

function LinkButton({
  className,
  underlined,
  ...buttonProps
}: {underlined?: boolean} & JSX.IntrinsicElements['button']) {
  return (
    <button
      {...buttonProps}
      className={cn(
        className,
        underlined
          ? 'underlined whitespace-nowrap focus:outline-none'
          : 'underline',
        className?.includes('block') ? '' : 'inline-block',
        'text-primary'
      )}
    />
  )
}

/**
 * Un link que parece un botón
 */
const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<typeof AnchorOrLink> & ButtonProps
>(function ButtonLink(
  {children, type = 'primary', size = 'md', className, label, ...rest},
  ref
) {
  const classes = cn(
    className,
    'active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-link focus:outline-offset-2 leading-snug',
    {
      'bg-link text-white hover:bg-opacity-80': type === 'primary',
      'text-primary shadow-secondary-button-stroke hover:bg-gray-40/5 active:bg-gray-40/10':
        type === 'secondary',
      'text-lg py-3 rounded-full px-4 sm:px-6': size === 'lg',
      'text-base rounded-full px-4 py-2': size === 'md',
    }
  )
  return (
    <AnchorOrLink ref={ref} className={classes} aria-label={label} {...rest}>
      {children}
    </AnchorOrLink>
  )
})

export {Button, ButtonLink, LinkButton}
