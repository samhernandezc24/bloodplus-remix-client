import {type OptionalTheme} from '~/utils/misc'

function polarToCartesian(x: number, y: number, r: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180.0
  return [x + r * Math.cos(radians), y + r * Math.sin(radians)]
}

function getSegmentPath(
  {
    size,
    margin = 0.1,
    segments,
    radius = size / 2,
    width = 1,
  }: {
    size: number
    margin?: number
    segments: number
    radius?: number
    width?: number
  },
  segment: number,
  span = 1
) {
  const center = size / 2
  const degrees = 360 / segments
  const shift = margin === 0 ? -90 : -90 + (degrees * margin) / 2
  const start = shift + degrees * segment
  const end =
    shift + degrees * (segment + span - margin) + (margin == 0 ? 1 : 0)
  const innerRadius = radius - width

  const arc = Math.abs(start - end) > 180 ? 1 : 0
  const point = (rad: number, deg: number) =>
    polarToCartesian(center, center, rad, deg)
      .map(n => n.toPrecision(5))
      .join(',')

  return [
    `M${point(radius, start)}`,
    `A${radius},${radius},0,${arc},1,${point(radius, end)}`,
    `L${point(radius - width, end)}`,
    `A${innerRadius},${innerRadius},0,${arc},0,${point(innerRadius, start)}`,
    'Z',
  ].join('')
}

const colors: Record<OptionalTheme, string> = {
  YELLOW: 'text-team-yellow',
  BLUE: 'text-team-blue',
  RED: 'text-team-red',
  UNKNOWN: 'text-team-unknown',
}

function Circle({
  size,
  width = 2,
  theme,
}: {
  size: number
  width?: number
  theme: OptionalTheme
}) {
  let options = {size, width, margin: 0.05, segments: 3}

  if (theme === 'UNKNOWN') {
    return (
      <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <path
          d={getSegmentPath(options, 0)}
          className="text-team-yellow"
          fill="currentColor"
        />
        <path
          d={getSegmentPath(options, 1)}
          className="text-team-blue"
          fill="currentColor"
        />
        <path
          d={getSegmentPath(options, 2)}
          className="text-team-red"
          fill="currentColor"
        />
      </svg>
    )
  }

  const [themeOne, themeTwo] = Object.keys(colors).filter(x => x !== theme) as [
    OptionalTheme,
    OptionalTheme
  ]

  // El tamaño relativo del "theme actual" en comparación con los demás themes. A 3
  // significa que el theme actual se representa 3 veces más grande que los otros themes.
  const themeSpan = 3
  options = {...options, segments: 2 + 2 * themeSpan}

  return (
    <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
      <path
        d={getSegmentPath(options, 0, themeSpan)}
        className={colors[theme]}
        fill="currentColor"
      />
      <path
        d={getSegmentPath(options, themeSpan)}
        className={colors[themeOne]}
        fill="currentColor"
      />
      <path
        d={getSegmentPath(options, themeSpan + 1, themeSpan)}
        className={colors[theme]}
        fill="currentColor"
      />
      <path
        d={getSegmentPath(options, options.segments - 1)}
        className={colors[themeTwo]}
        fill="currentColor"
      />
    </svg>
  )
}

export {Circle}