export type AppLocale = 'tr' | 'en'
export type SlugPair = { tr: string, en: string }
export type SlugMap = Record<string, SlugPair>

/** Canonical id = mevcut TR slug */
export const appSlugs: SlugMap = {
  talepler: { tr: 'talepler', en: 'requests' },
  musteriler: { tr: 'musteriler', en: 'customers' },
  teklifler: { tr: 'teklifler', en: 'quotes' },
  'teklif-3d': { tr: 'teklif-3d', en: '3d-scaffolding' },
  'teklif-pdf': { tr: 'teklif-pdf', en: 'pdf-studio' },
  santiyeler: { tr: 'santiyeler', en: 'sites' },
  kiralama: { tr: 'kiralama', en: 'rental' },
  planlama: { tr: 'planlama', en: 'planning' },
  takvim: { tr: 'takvim', en: 'calendar' },
  depo: { tr: 'depo', en: 'warehouse' },
  'depo-fisleri': { tr: 'depo-fisleri', en: 'shipments-returns' },
  saha: { tr: 'saha', en: 'field' },
  araclar: { tr: 'araclar', en: 'vehicles' },
  tedarikciler: { tr: 'tedarikciler', en: 'suppliers' },
  satinalma: { tr: 'satinalma', en: 'purchasing' },
  malzemeler: { tr: 'malzemeler', en: 'materials' },
  faturalar: { tr: 'faturalar', en: 'invoices' },
  odemeler: { tr: 'odemeler', en: 'payments' },
  cekler: { tr: 'cekler', en: 'checks' },
  kasa: { tr: 'kasa', en: 'cash' },
  'nakit-akisi': { tr: 'nakit-akisi', en: 'cash-flow' },
  giderler: { tr: 'giderler', en: 'expenses' },
  'santiye-bakiyesi': { tr: 'santiye-bakiyesi', en: 'site-balance' },
  calisanlar: { tr: 'calisanlar', en: 'employees' },
  puantaj: { tr: 'puantaj', en: 'timesheets' },
  mesailer: { tr: 'mesailer', en: 'overtime' },
  izinler: { tr: 'izinler', en: 'leave' },
  maas: { tr: 'maas', en: 'payroll' },
  pano: { tr: 'pano', en: 'dashboard' },
  raporlar: { tr: 'raporlar', en: 'reports' },
  kullanicilar: { tr: 'kullanicilar', en: 'users' },
}

export const categorySlugs: SlugMap = {
  ticari: { tr: 'ticari', en: 'commercial' },
  operasyon: { tr: 'operasyon', en: 'operations' },
  tedarik: { tr: 'tedarik', en: 'procurement' },
  finans: { tr: 'finans', en: 'finance' },
  ik: { tr: 'ik', en: 'hr' },
  yonetim: { tr: 'yonetim', en: 'management' },
}

export function localizeSlug(map: SlugMap, canonical: string, locale: string) {
  const pair = map[canonical]
  if (!pair) return canonical
  return locale === 'en' ? pair.en : pair.tr
}

export function canonicalSlug(map: SlugMap, slug: string) {
  if (slug in map) return slug
  for (const [id, pair] of Object.entries(map)) {
    if (pair.tr === slug || pair.en === slug) return id
  }
  return null
}

export function i18nSlugParams(map: SlugMap, canonical: string, key = 'slug') {
  return {
    tr: { [key]: localizeSlug(map, canonical, 'tr') },
    en: { [key]: localizeSlug(map, canonical, 'en') },
  }
}

/** Path helper her zaman TR (canonical) path üretir; useI18nPath lokalize eder */
export function appPath(appId: string) {
  return `/uygulamalar/${localizeSlug(appSlugs, appId, 'tr')}`
}

export function appsPath(categoryId?: string) {
  if (!categoryId) return '/uygulamalar'
  return `/uygulamalar#${localizeSlug(categorySlugs, categoryId, 'tr')}`
}

export function appLoc(appId: string, locale: AppLocale = 'tr') {
  const slug = localizeSlug(appSlugs, appId, locale)
  return locale === 'en' ? `/en/apps/${slug}` : `/uygulamalar/${slug}`
}
