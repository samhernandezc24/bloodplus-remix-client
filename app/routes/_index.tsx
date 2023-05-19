import {TopNav} from '~/components/layout/top-nav'
import SocialBanner from '~/components/social-banner'

export default function IndexRoute() {
  return (
    <>
      <SocialBanner />
      <TopNav />
      <main>
        <h1>Hello Index Route</h1>
        <div className="mt-5 flex w-full flex-col gap-2 self-center sm:flex-row">
          lwjbfjwebfjwebfwjfbwhifwkmnfbwhiuebf
        </div>
      </main>
    </>
  )
}
