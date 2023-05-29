import {MDXComponents} from '../mdx/mdx-components'

const {p: P} = MDXComponents

interface PageContextProps {
  description?: string
  childrenDesc?: React.ReactNode
  mutlipleP?: boolean
}

function PageContext({description, mutlipleP, childrenDesc}: PageContextProps) {
  return (
    <>
      <div className="ml-0 max-w-4xl 2xl:mx-auto">
        <div className="text-xl leading-relaxed text-primary">
          {mutlipleP ? (
            <>
              <P>{description}</P>
              <P>{childrenDesc}</P>
            </>
          ) : (
            <P>{description}</P>
          )}
        </div>
      </div>

      <hr className="my-6 block border-b border-t-0 border-border" />
    </>
  )
}

export default PageContext
