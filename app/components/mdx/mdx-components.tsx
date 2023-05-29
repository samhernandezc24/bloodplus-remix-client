import {H1, H2, H3, H4} from './heading'

const P = (p: JSX.IntrinsicElements['p']) => (
  <p className="my-4 whitespace-pre-wrap" {...p} />
)

const Strong = (strong: JSX.IntrinsicElements['strong']) => (
  <strong className="font-bold" {...strong} />
)

export const MDXComponents = {
  p: P,
  strong: Strong,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
}

for (let key in MDXComponents) {
  if (MDXComponents.hasOwnProperty(key)) {
    const MDXComponent: any = (MDXComponents as any)[key]
    MDXComponent.mdxName = key
  }
}
