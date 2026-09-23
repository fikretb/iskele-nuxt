export type SiteImage = {
  src: string
  alt: string
  width: number
  height: number
}

const LANDSCAPE = { width: 1168, height: 784 } as const
const PORTRAIT = { width: 784, height: 1168 } as const

export const SITE_IMAGES = {
  heroLaptop: {
    src: '/iskelepro-assets/hero/hero-laptop-dashboard.jpg',
    alt: 'İskele Pro ofis ekranı: laptop üzerinde teklif ve şantiye paneli',
    ...LANDSCAPE,
  },
  heroCephe: {
    src: '/iskelepro-assets/hero/hero-cephe-iskele-3d.jpg',
    alt: 'Cephe iskelesi 3D görünümü: sarı platform ve lacivert dikmelerle kurulu bina',
    ...LANDSCAPE,
  },
  heroInner: {
    src: '/iskelepro-assets/hero/hero-ic-sayfa-iskele-metafor.jpg',
    alt: 'Lacivert iskele strüktürü, altın renkli birleşim vurgusu',
    ...LANDSCAPE,
  },
  featureTrio: {
    src: '/iskelepro-assets/hero/feature-teklif-depo-saha.jpg',
    alt: 'İskele Pro üç temel süreç: teklif, depo ve saha',
    ...LANDSCAPE,
  },
  mockupSaha: {
    src: '/iskelepro-assets/mockups/mockup-saha-teslim-mobil.jpg',
    alt: 'İskele Pro saha teslim mobil uygulaması: QR okutma, imza ve stok güncelleme',
    ...PORTRAIT,
  },
  mockupDepo: {
    src: '/iskelepro-assets/mockups/mockup-depo-stok-tablet.jpg',
    alt: 'İskele Pro depo stok tableti: envanter özeti ve malzeme bakiyesi',
    ...LANDSCAPE,
  },
  mockupPdf: {
    src: '/iskelepro-assets/mockups/mockup-pdf-teklif-studio.jpg',
    alt: 'İskele Pro PDF stüdyosu: antetli cephe iskelesi teklifi ve düzenleme ekranı',
    ...LANDSCAPE,
  },
  mockupDemo: {
    src: '/iskelepro-assets/mockups/mockup-demo-ofis-ekran.jpg',
    alt: 'İskele Pro demo ofis ekranı: şantiye kârlılık ve kiralama özeti',
    ...LANDSCAPE,
  },
  demoDashboard: {
    src: '/iskelepro-assets/genel-resimler/isle.jpeg',
    alt: 'İskele Pro paneli: iskele kiralama özeti ve 3D iskele modeli',
    width: 1456,
    height: 734,
  },
  connectedApps: {
    src: '/iskelepro-assets/genel-resimler/uygulamalar2.jpeg',
    alt: 'Bağlı uygulamalar: müşteri talepleri, müşteriler ve teklifler 3D iskele ile PDF stüdyosuna bağlanır',
    width: 1844,
    height: 560,
  },
  sektorSaha: {
    src: '/iskelepro-assets/sectors/sektor-saha-montaj.jpg',
    alt: 'Kurulum ekibi cephe iskelesine platform yerleştiriyor',
    ...LANDSCAPE,
  },
  sektorKolaj: {
    src: '/iskelepro-assets/sectors/sektorler-dortlu-kolaj.jpg',
    alt: 'İskele kiralama süreçleri: malzeme sahası, saha montaj, depo ve teklif ofisi',
    ...LANDSCAPE,
  },
  og: {
    src: '/og.jpg',
    alt: 'İskele Pro — Tekliften sahaya, tek kayıt',
    width: 1200,
    height: 630,
  },
} as const satisfies Record<string, SiteImage>

export const workflowGallery = [
  SITE_IMAGES.mockupPdf,
  SITE_IMAGES.mockupDepo,
  SITE_IMAGES.mockupSaha,
] as const

const appImageMap: Record<string, keyof typeof SITE_IMAGES> = {
  talepler: 'heroLaptop',
  musteriler: 'heroLaptop',
  teklifler: 'mockupPdf',
  'teklif-3d': 'heroCephe',
  'teklif-pdf': 'mockupPdf',
  santiyeler: 'sektorSaha',
  kiralama: 'sektorSaha',
  planlama: 'heroCephe',
  takvim: 'heroLaptop',
  depo: 'mockupDepo',
  'depo-fisleri': 'mockupDepo',
  saha: 'mockupSaha',
  araclar: 'sektorSaha',
  tedarikciler: 'mockupDepo',
  satinalma: 'mockupDepo',
  malzemeler: 'mockupDepo',
  faturalar: 'mockupPdf',
  odemeler: 'mockupDemo',
  cekler: 'mockupDemo',
  kasa: 'mockupDemo',
  'nakit-akisi': 'mockupDemo',
  giderler: 'mockupDemo',
  'santiye-bakiyesi': 'mockupDemo',
  calisanlar: 'sektorSaha',
  puantaj: 'sektorSaha',
  mesailer: 'sektorSaha',
  izinler: 'mockupSaha',
  maas: 'mockupDemo',
  pano: 'heroLaptop',
  raporlar: 'mockupDemo',
  kullanicilar: 'heroLaptop',
}

export function imageForApp(slug: string): SiteImage {
  const key = appImageMap[slug] ?? 'heroLaptop'
  return SITE_IMAGES[key]
}

export const APP_ICONS: Record<string, string> = {
  talepler: '/iskelepro-assets/icons/apps/talepler.png',
  musteriler: '/iskelepro-assets/icons/apps/musteriler.png',
  teklifler: '/iskelepro-assets/icons/apps/teklifler.png',
  'teklif-3d': '/iskelepro-assets/icons/apps/teklif-3d.png',
  'teklif-pdf': '/iskelepro-assets/icons/apps/teklif-pdf.png',
  santiyeler: '/iskelepro-assets/icons/apps/santiyeler.png',
  kiralama: '/iskelepro-assets/icons/apps/kiralama.png',
  depo: '/iskelepro-assets/icons/apps/depo.png',
  saha: '/iskelepro-assets/icons/apps/saha.png',
  faturalar: '/iskelepro-assets/icons/apps/faturalar.png',
  cekler: '/iskelepro-assets/icons/apps/cekler.png',
  kasa: '/iskelepro-assets/icons/apps/kasa.png',
  'nakit-akisi': '/iskelepro-assets/icons/apps/nakit-akisi.png',
  calisanlar: '/iskelepro-assets/icons/apps/calisanlar.png',
  puantaj: '/iskelepro-assets/icons/apps/puantaj.png',
  izinler: '/iskelepro-assets/icons/apps/izinler.png',
  kullanicilar: '/iskelepro-assets/icons/apps/kullanicilar.png',
  raporlar: '/iskelepro-assets/icons/apps/raporlar.png',
}

export function iconForApp(slug: string) {
  return APP_ICONS[slug] ?? null
}
