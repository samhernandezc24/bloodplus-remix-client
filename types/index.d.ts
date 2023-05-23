/* NR: Nerd Rage */

type NRSitemapEntry = {
  route: string
  lastmod?: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
}

type NRHandle = {
  /** esto sólo nos permite identificar las rutas más directamente en lugar de depender de los nombres de ruta */
  id?: string
  getSitemapEntries?: (
    request: Request
  ) =>
    | Promise<Array<NRSitemapEntry | null> | null>
    | Array<NRSitemapEntry | null>
    | null
}

type Theme = 'RED' | 'BLUE' | 'YELLOW'
type OptionalTheme = Theme | 'UNKNOWN'

export {Theme, OptionalTheme, NRHandle, NRSitemapEntry}
