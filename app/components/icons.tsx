import {memo} from 'react'
import cn from 'classnames'

export const IconClose = memo<JSX.IntrinsicElements['svg']>(function IconClose(
  props
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.33em"
      height="1.33em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  )
})

export const IconHamburger = memo<JSX.IntrinsicElements['svg']>(
  function IconHamburger(props) {
    return (
      <svg
        width="1.33em"
        height="1.33em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    )
  }
)

export const IconCheck = memo<JSX.IntrinsicElements['svg']>(function IconCheck({
  className,
}) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
})

export const IconSearch = memo<JSX.IntrinsicElements['svg']>(
  function IconSearch(props) {
    return (
      <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    )
  }
)

export const IconMessage = memo<JSX.IntrinsicElements['svg']>(
  function IconMessage(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="currentColor"
          d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"
        ></path>
        <path
          fill="currentColor"
          d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"
        ></path>
      </svg>
    )
  }
)

export const IconUser = memo<JSX.IntrinsicElements['svg']>(function IconUser({
  className,
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
        fill="currentColor"
      ></path>
      <path
        d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
        fill="currentColor"
      ></path>
    </svg>
  )
})

export const IconNote = memo<JSX.IntrinsicElements['svg']>(function IconNote({
  className,
}) {
  return (
    <svg
      className={className}
      width="2em"
      height="2em"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_40_48064)">
        <path
          d="M24 27C24 25.3431 25.3431 24 27 24H45C46.6569 24 48 25.3431 48 27C48 28.6569 46.6569 30 45 30H27C25.3431 30 24 28.6569 24 27Z"
          fill="currentColor"
        />
        <path
          d="M24 39C24 37.3431 25.3431 36 27 36H39C40.6569 36 42 37.3431 42 39C42 40.6569 40.6569 42 39 42H27C25.3431 42 24 40.6569 24 39Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18C12 13.0294 16.0294 9 21 9H51C55.9706 9 60 13.0294 60 18V54C60 58.9706 55.9706 63 51 63H21C16.0294 63 12 58.9706 12 54V18ZM21 15H51C52.6569 15 54 16.3431 54 18V54C54 55.6569 52.6569 57 51 57H21C19.3431 57 18 55.6569 18 54V18C18 16.3431 19.3431 15 21 15Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_48064">
          <rect width="72" height="72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
})

export const IconChevron = memo<
  JSX.IntrinsicElements['svg'] & {
    displayDirection: 'up' | 'down' | 'left' | 'right'
  }
>(function IconChevron({className, displayDirection}) {
  const classes = cn(
    {
      'rotate-0': displayDirection === 'down',
      'rotate-90': displayDirection === 'left',
      'rotate-180': displayDirection === 'up',
      '-rotate-90': displayDirection === 'right',
    },
    className
  )
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-446 -398)">
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z"
          transform="translate(356.5 164.5)"
        />
        <polygon points="446 418 466 418 466 398 446 398" />
      </g>
    </svg>
  )
})

export const IconNavArrow = memo<
  JSX.IntrinsicElements['svg'] & {
    displayDirection: 'right' | 'down' | 'left'
  }
>(function IconNavArrow({displayDirection = 'right', className}) {
  const classes = cn(
    'duration-100 ease-in transition',
    {
      'rotate-0': displayDirection === 'down',
      '-rotate-90': displayDirection === 'right',
      'rotate-90': displayDirection === 'left',
    },
    className
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={classes}
      style={{minWidth: 20, minHeight: 20}}
    >
      <g fill="none" fillRule="evenodd" transform="translate(-446 -398)">
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z"
          transform="translate(356.5 164.5)"
        />
        <polygon points="446 418 466 418 466 398 446 398" />
      </g>
    </svg>
  )
})
