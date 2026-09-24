import type { LocationQueryRaw, RouteLocationRaw } from 'vue-router'

function parseQuery(search?: string): LocationQueryRaw | undefined {
  if (!search) return undefined
  return Object.fromEntries(new URLSearchParams(search))
}

const SECTION_ALIASES: Record<string, string> = {
  uygulamalar: 'uygulamalar',
  apps: 'uygulamalar',
  sektor: 'sektor',
  industries: 'sektor',
  fiyatlandirma: 'fiyatlandirma',
  pricing: 'fiyatlandirma',
  'iskele-hesapla': 'iskele-hesapla',
  'scaffold-calculator': 'iskele-hesapla',
  iletisim: 'iletisim',
  contact: 'iletisim',
  yardim: 'yardim',
  help: 'yardim',
}

const STATIC_ALIASES: Record<string, string> = {
  sektor: 'sektor',
  industries: 'sektor',
  fiyatlandirma: 'fiyatlandirma',
  pricing: 'fiyatlandirma',
  'iskele-hesapla': 'iskele-hesapla',
  'scaffold-calculator': 'iskele-hesapla',
  iletisim: 'iletisim',
  contact: 'iletisim',
  yardim: 'yardim',
  help: 'yardim',
  urunler: 'urunler',
  products: 'urunler',
  cozumler: 'cozumler',
  solutions: 'cozumler',
}

function pathToNamed(pathname: string): RouteLocationRaw {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return { name: 'index' }

  const segments = path.replace(/^\//, '').split('/')
  const section = SECTION_ALIASES[segments[0]] ?? segments[0]

  if (section === 'uygulamalar') {
    if (segments.length === 1) return { name: 'uygulamalar' }
    return { name: 'uygulamalar-slug', params: { slug: segments[1] } }
  }

  if (segments.length === 1 && STATIC_ALIASES[segments[0]]) {
    return { name: STATIC_ALIASES[segments[0]] }
  }

  return path
}

export function toNamedRoute(to: RouteLocationRaw): RouteLocationRaw {
  if (typeof to !== 'string') return to

  const [withoutHash, hash] = to.split('#')
  const [pathname, search] = withoutHash.split('?')
  const named = pathToNamed(pathname)
  const query = parseQuery(search)

  if (typeof named === 'string') {
    return to
  }

  return {
    ...named,
    ...(query ? { query } : {}),
    ...(hash ? { hash: `#${hash}` } : {}),
  }
}
