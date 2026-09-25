import { productApps } from '~/data/apps'
import { appSlugs, localizeSlug } from '~/constants/slugs'

const site = 'https://iskelepro.com'

const pages: Array<[string, string]> = [
  ['/', '/en'],
  ['/uygulamalar', '/en/apps'],
  ['/fiyatlandirma', '/en/pricing'],
  ['/iskele-hesapla', '/en/scaffold-calculator'],
  ['/iletisim', '/en/contact'],
  ['/yardim', '/en/help'],
  ['/kvkk', '/en/kvkk'],
  ['/gizlilik', '/en/privacy'],
  ['/kullanim-kosullari', '/en/terms'],
  ...productApps.map(app => [
    `/uygulamalar/${localizeSlug(appSlugs, app.slug, 'tr')}`,
    `/en/apps/${localizeSlug(appSlugs, app.slug, 'en')}`,
  ] as [string, string]),
]

function abs(path: string) {
  return path === '/' ? site : `${site}${path}`
}

function entry(loc: string, tr: string, en: string) {
  return `  <url>
    <loc>${abs(loc)}</loc>
    <lastmod>2026-09-25</lastmod>
    <changefreq>weekly</changefreq>
    <xhtml:link rel="alternate" hreflang="tr" href="${abs(tr)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(tr)}"/>
  </url>`
}

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  const urls = pages.flatMap(([tr, en]) => [entry(tr, tr, en), entry(en, tr, en)]).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
})
