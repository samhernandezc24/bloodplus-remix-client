import {H1} from '../mdx/heading'

interface PageHeadingProps {
  title: string
  status?: string
  description?: string
}

function PageHeading({title, status, description}: PageHeadingProps) {
  return (
    <div className="px-5 pt-3.5 sm:px-12">
      <div className="ml-0 max-w-4xl 2xl:mx-auto">
        <H1 className="-mx-.5 mt-0 break-words text-primary">
          {title}
          {status ? <em>-{status}</em> : ''}
        </H1>
        {description && (
          <p
            className="mb-6 mt-4 text-xl leading-large text-primary
            "
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default PageHeading
