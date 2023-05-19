import cn from 'classnames'

const bannerText = 'BloodPlus v0.1.0 🩸'
const bannerLegend = 'Para poder acceder a la aplicación necesitas registrarte.'

export default function SocialBanner() {
  return (
    <div
      className={cn(
        `z-[100] hidden h-[40px] w-full flex-col items-center justify-center bg-gradient-to-r from-rose-400 to-gray-100 py-2 text-base sm:flex-row sm:py-0 md:text-lg lg:flex`
      )}
    >
      <p className="hidden sm:block">
        <strong>{bannerText}</strong>
        <span className="mx-2 font-normal">{bannerLegend}</span>
      </p>
    </div>
  )
}
