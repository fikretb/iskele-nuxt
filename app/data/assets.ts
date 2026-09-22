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

export const journeyImages: Record<string, SiteImage> = {
  teklif: SITE_IMAGES.mockupPdf,
  kiralama: SITE_IMAGES.heroCephe,
  depo: SITE_IMAGES.mockupDepo,
  saha: SITE_IMAGES.sektorSaha,
  tahsilat: SITE_IMAGES.mockupDemo,
  ik: SITE_IMAGES.heroLaptop,
}

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
