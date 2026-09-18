import { appCategories, productApps } from '~/data/apps'

export const navLinks = [
  { label: 'Uygulamalar', to: '/uygulamalar', mega: 'apps' },
  { label: 'Sektörler', to: '/sektor', mega: 'industries' },
  { label: 'Kaynaklar', to: '/yardim', mega: 'resources' },
  { label: 'Fiyatlandırma', to: '/fiyatlandirma' },
  { label: 'Yardım', to: '/yardim' },
] as const

export const megaNavLinks = navLinks.filter(
  (item): item is Extract<typeof navLinks[number], { mega: string }> => 'mega' in item,
)

export const plainNavLinks = navLinks.filter(
  (item): item is Exclude<typeof navLinks[number], { mega: string }> => !('mega' in item),
)

export const megaColumns = appCategories.map(category => ({
  ...category,
  apps: productApps.filter(app => app.category === category.id),
}))

export const industryMega = [
  {
    name: 'Firma tipi',
    blurb: 'İskele kiralama işinin halleri',
    items: [
      { label: 'İskele kiralama', to: '/sektor#kiralama', note: 'Malzeme sahada, stok depoda' },
      { label: 'Kurulum ekipli firma', to: '/sektor#saha', note: 'Montaj, söküm, puantaj' },
      { label: 'Çok depolu operasyon', to: '/sektor#depo', note: 'Fiş, QR, iade' },
    ],
  },
  {
    name: 'Süreç',
    blurb: 'Ofisten sahaya tek kayıt',
    items: [
      { label: 'Teklif ofisi', to: '/sektor#teklif', note: 'Talep, ölçü, PDF, 3D' },
      { label: 'Depo ve sevkiyat', to: '/sektor#depo', note: 'Çıkan ve dönen fişle' },
      { label: 'Saha montaj', to: '/sektor#saha', note: 'İmza ve token’lı link' },
      { label: 'Tahsilat', to: '/sektor#tahsilat', note: 'Fatura, çek, şantiye bakiyesi' },
    ],
  },
  {
    name: 'Ölçek',
    blurb: 'Pakete göre ekran seti',
    items: [
      { label: 'Tek ofis', to: '/fiyatlandirma', note: 'Talep, teklif, stok' },
      { label: 'Saha ve depo', to: '/fiyatlandirma', note: '3D, fiş, QR, kiralama' },
      { label: 'İK ve muhasebe', to: '/fiyatlandirma', note: 'Puantaj, çek, nakit' },
    ],
  },
] as const

export const resourceMega = [
  {
    name: 'Öğrenim',
    items: [
      { label: 'Tüm uygulamalar', to: '/uygulamalar' },
      { label: 'Sektör rehberi', to: '/sektor' },
      { label: 'Fiyatlandırma', to: '/fiyatlandirma' },
    ],
  },
  {
    name: 'Hizmetler',
    items: [
      { label: 'Ücretsiz deneyin', to: '/iletisim' },
      { label: 'Bir danışmanla görüşün', to: '/iletisim' },
      { label: 'Demo randevusu', to: '/iletisim' },
    ],
  },
  {
    name: 'Destek',
    items: [
      { label: 'Yardım', to: '/yardim' },
      { label: 'İletişim', to: '/iletisim' },
      { label: 'Portal', to: 'portal' },
    ],
  },
] as const

export const featuredApps = [
  'teklifler',
  'teklif-3d',
  'santiyeler',
  'depo',
  'depo-fisleri',
  'saha',
  'kiralama',
  'planlama',
  'faturalar',
  'cekler',
  'puantaj',
  'calisanlar',
  'malzemeler',
  'musteriler',
  'talepler',
  'araclar',
  'nakit-akisi',
  'kullanicilar',
  'pano',
  'teklif-pdf',
  'izinler',
  'satinalma',
  'kasa',
  'raporlar',
].map(slug => productApps.find(app => app.slug === slug)).filter((app): app is NonNullable<typeof app> => Boolean(app))

export const valueProps = [
  {
    title: 'Hepsi aynı kayıt',
    body: 'Teklif şantiyeye, fiş stoğa, fatura bakiyeye bağlanır. Kopuk Excel ve ayrı programlar yerine tek tenant.',
  },
  {
    title: 'Sahaya inen yazılım',
    body: 'QR, imza ve token’lı link ile montaj ekibi ofise üye olmadan teslim ve izin işler.',
  },
  {
    title: 'İskele işine özel',
    body: 'Cephe ölçüsü, 3D kurulumu, kiralama süresi ve şantiye bakiyesi genel ERP’den kopyalanmış ekranlar değil.',
  },
  {
    title: 'Firma bazlı yetki',
    body: 'Her iskele firması kendi verisini görür. Depocu, muhasebe ve teklifçi ekran ekran ayrılır.',
  },
] as const

export const withoutUs = [
  'Teklif Word’de, stok Excel’de, tahsilat defterde',
  'Sahaya ne çıktığı şoförün hafızasında',
  'Puantaj ay sonunda kâğıttan maaşta',
  '3D yok; müşteri “ne kurulacak” diye çizim bekliyor',
]

export const withUs = [
  'Cepheden teklif, PDF ve 3D aynı kayıttan',
  'Sevkiyat / iade fişi, QR ve imza',
  'Puantaj dönem kapanınca maaşa akar',
  'Şantiye bakiyesi: bu iş tahsil edildi mi',
]

export const productivityPoints = [
  {
    title: 'Daha az çift kayıt',
    body: 'Malzeme fiyatı katalogda bir kez durur. Teklif, fiş ve fatura o kartı kullanır.',
  },
  {
    title: 'Ofis–saha aynı fiş',
    body: 'Kesilen sevkiyat telefonda görünür. İmza gelince stok güncellenir.',
  },
  {
    title: 'Yetki ekran ekran',
    body: 'Depocu teklif yazmaz, muhasebe sahayı yetkisi kadar görür. Tenant başka firmayı göstermez.',
  },
] as const

export const pillars = [
  {
    title: 'İskele işine göre yazılmış',
    body: 'Genel inşaat ERP’sinin %70’i değil; cephe, kiralama süresi, sevkiyat fişi ve şantiye bakiyesi omurgadır.',
    to: '/sektor',
    link: 'Sektör sayfası',
  },
  {
    title: 'Bağlı uygulamalar',
    body: 'Modül indirmek yok. Yetkisi olan ekranı açar; teklif, depo, saha, finans ve İK aynı üründedir.',
    to: '/uygulamalar',
    link: 'Tüm uygulamalar',
  },
  {
    title: 'Veri sizde, tenant sizde',
    body: 'Sahipli “başka firmanın tablosu” yok. Her kiralama firması kendi kaydını görür.',
    to: '/yardim',
    link: 'Nasıl çalışır',
  },
  {
    title: 'Adil fiyatlandırma',
    body: 'Kullanıma göre gizli kalem yok, uzun vadeli sürpriz sözleşme yok. Paket ekran setine göre; net rakam görüşmede.',
    to: '/fiyatlandirma',
    link: 'Fiyatlandırmaya göz atın',
  },
  {
    title: 'Kurumsal saçmalık yok',
    body: 'İhtiyacınız olmayan modül satılmaz. Saha QR’si ve teklif motoru bu işin içinden çıkar, eklenti kataloğundan değil.',
    to: '/uygulamalar',
    link: 'Uygulama listesi',
  },
  {
    title: 'Danışmanla büyütün',
    body: 'Demo hesabı kredi kartı istemez. Ölçek 1–5 kişilik ofisten çok ekipli operasyona görüşmede netleşir.',
    to: '/iletisim',
    link: 'Bir danışmanla görüşün',
  },
] as const

export const industryJourney = [
  {
    id: 'teklif',
    app: 'Teklifler',
    slug: 'teklifler',
    title: 'Talebi kaybeden defter yerine teklif',
    body: 'Müşteri adayı ve şantiye notu merkezi kayıttadır. Cephe ölçüsünden malzeme listesi, PDF ve 3D aynı tekliften çıkar.',
  },
  {
    id: 'kiralama',
    app: 'Kiralama',
    slug: 'kiralama',
    title: 'Onaylanan iş şantiyede durur',
    body: 'Teklif şantiyeye döner. Kiralama süresi, saha stoku ve iade aynı karttan izlenir.',
  },
  {
    id: 'depo',
    app: 'Sevkiyat',
    slug: 'depo-fisleri',
    title: 'Maliyet ve stoğu fişle koruyun',
    body: 'Çıkan dikme ve platform sevkiyat fişindedir. İade QR ve imza ile kapanır; depo bakiyesi tahmin değildir.',
  },
  {
    id: 'saha',
    app: 'Saha',
    slug: 'saha',
    title: 'Sahadaki plan ofisteki fişle aynı',
    body: 'Montaj ekibi fişi telefonda görür. Token’lı link ile üye olmayan çalışan da teslim ve izin işler.',
  },
  {
    id: 'tahsilat',
    app: 'Faturalar',
    slug: 'faturalar',
    title: 'Kâr, şantiye bakiyesinde',
    body: 'Fatura, çek ve gider iş kartına yazılır. Saha bitmeden hangi işin tahsil edildiği görünür.',
  },
  {
    id: 'ik',
    app: 'Puantaj',
    slug: 'puantaj',
    title: 'Yevmiye kâğıttan maaşa akmasın',
    body: 'Kim hangi şantiyede kaç gün çalıştı dönem kapanınca maaşa dökülür. Mesai ve izin aynı İK setindedir.',
  },
] as const

export const industryApps = [
  'talepler',
  'teklifler',
  'kiralama',
  'depo-fisleri',
  'saha',
  'puantaj',
].map(slug => productApps.find(app => app.slug === slug)).filter((app): app is NonNullable<typeof app> => Boolean(app))

export const extraFeatures = [
  { title: 'Hızlı teklif', body: 'Şablon ve ölçü motoruyla teklif süresi kısalır.' },
  { title: 'Mobil ofis–saha', body: 'Fiş, imza ve izin sahadan ofise aynı anda düşer.' },
  { title: 'Canlı bakiye', body: 'Tahmini kâr değil; fatura, tahsilat ve gider kesiti.' },
  { title: 'Değişiklik kaydı', body: 'Ek malzeme ve süre uzatımı şantiye kartında belgelenir.' },
  { title: 'Yetki kesiti', body: 'Depo, teklif ve maaş ekranları rol ile ayrılır.' },
  { title: 'Kurulum adımları', body: 'Yeni firma müşteri, fiyatlı malzeme ve ilk teklifle başlar.' },
] as const

export const pricingPlans = [
  {
    name: 'Başlangıç',
    audience: 'Tek ofis, küçük ekip · 1–5 kişi',
    features: ['Talepler ve müşteriler', 'Teklif ve PDF', 'Malzeme kataloğu', 'Temel stok', 'Birkaç kullanıcı'],
    cta: 'Ücretsiz deneyin',
  },
  {
    name: 'Operasyon',
    audience: 'Saha ve depo ile büyüyen firma · 6–50 kişi',
    featured: true,
    features: ['3D iskele görünümü', 'Şantiye, kiralama, planlama', 'Depo fişi, saha, QR', 'Faturalar ve tahsilat', 'Araçlar'],
    cta: 'Bu paketi konuşalım',
  },
  {
    name: 'Kurumsal',
    audience: 'Çok ekip, İK ve muhasebe · 51+ kişi',
    features: ['İK, puantaj, izin, maaş', 'Çek, kasa, nakit akışı', 'Alış ve ödeme planı', 'Gelişmiş yetkiler', 'Öncelikli destek'],
    cta: 'Kurumsal teklif alın',
  },
] as const

export const pricingNotes = [
  'Kullanıma bağlı gizli kalem yok',
  'İhtiyacınız olmayan ekran satılmaz',
  'Uzun vadeli sürpriz sözleşme yok',
  'Net rakam demo görüşmesinde',
] as const

export const companySizes = [
  { id: 'micro', label: 'Mikro işletme (1–5 çalışan)' },
  { id: 'small', label: 'Küçük işletme (6–50 çalışan)' },
  { id: 'mid', label: 'Orta ölçek (51–250 çalışan)' },
  { id: 'large', label: 'Büyük işletme (250+ çalışan)' },
] as const

export const helpTopics = [
  {
    title: 'Demo hesabı nasıl açılır?',
    body: 'İletişim formundan firma ve e-posta bırakın. Kredi kartı istenmez; ekip tenant’ı açıp birlikte bakar.',
  },
  {
    title: 'Uygulamalar ayrı mı satılır?',
    body: 'Hayır. İskele Pro tek üründür. Paket, hangi ekran setinin açık olacağını belirler; yetkisi olan kullanıcı o ekranı görür.',
  },
  {
    title: 'Saha ekibi kullanıcı olmak zorunda mı?',
    body: 'Teslim ve izin için token’lı link yeterlidir. Ofis kullanıcıları e-posta daveti ile eklenir.',
  },
  {
    title: 'Verimiz başka iskele firmasına gider mi?',
    body: 'Gitmez. Her firma kendi tenant’ındadır. Teklif, stok ve maaş başka kiracıya görünmez.',
  },
  {
    title: 'Fiyat listede neden yok?',
    body: 'Kullanıcı sayısı, şantiye hacmi ve ekran seti görüşmede netleşir. Kullanıma göre kalem uydurulmaz.',
  },
] as const

export const quote = {
  text: 'Teklif Word’de, stok Excel’de kalınca ay sonunda hangi şantiyenin kârlı olduğu bilinmez. Aynı kayıttan fiş, fatura ve puantaj bakınca ofis asıl işe, yani müşteri ve sahaya döner.',
  role: 'İskele kiralama operasyonu — ürünün tasarlandığı iş',
}
