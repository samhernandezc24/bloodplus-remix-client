import {Suspense} from 'react'
import {HomeContent} from '~/components/layout/home-content'
import {TopNav} from '~/components/layout/top-nav'
import SocialBanner from '~/components/social-banner'

export default function IndexRoute() {
  return (
    <>
      <SocialBanner />
      <TopNav />

      <Suspense fallback={null}>
        <main className="isolate min-w-0">
          <article className="break-words font-normal text-primary">
            <HomeContent />
          </article>
        </main>
      </Suspense>
    </>
  )
}
