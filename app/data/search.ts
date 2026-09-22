import { appPath } from '~/constants/slugs'
import { productApps } from '~/data/apps'

export type SearchItem = {
  title: string
  blurb: string
  to: string
  kind: 'app' | 'page'
  icon?: string
}

export const searchPages: SearchItem[] = [
  { title: 'Uygulamalar', blurb: 'Tüm uygulama seti', to: '/uygulamalar', kind: 'page' },
  { title: 'Fiyatlandırma', blurb: 'Başlangıç, Operasyon ve Kurumsal paketler', to: '/fiyatlandirma', kind: 'page' },
  { title: 'Yardım', blurb: 'Demo, yetki ve tenant soruları', to: '/yardim', kind: 'page' },
  { title: 'İletişim', blurb: 'Demo talebi ve danışman görüşmesi', to: '/iletisim', kind: 'page' },
]

export const searchApps: SearchItem[] = productApps.map(app => ({
  title: app.name,
  blurb: app.tagline,
  to: appPath(app.slug),
  kind: 'app',
  icon: app.icon,
}))

const catalog = [...searchPages, ...searchApps]

function fold(value: string) {
  return value.toLocaleLowerCase('tr-TR')
}

export function searchSite(query: string, limit = 8): SearchItem[] {
  const q = fold(query.trim())
  if (!q) return []

  return catalog
    .map((item) => {
      const title = fold(item.title)
      const blurb = fold(item.blurb)
      const score = title.startsWith(q) ? 3 : title.includes(q) ? 2 : blurb.includes(q) ? 1 : 0
      return { item, score }
    })
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'tr'))
    .slice(0, limit)
    .map(entry => entry.item)
}

export function searchCategoryName(kind: SearchItem['kind']) {
  return kind === 'app' ? 'Uygulama' : 'Sayfa'
}
