import { appCategories, productApps } from '~/data/apps'

export const navLinks = [
  { label: 'Uygulamalar', to: '/uygulamalar', mega: 'apps' },
  { label: 'Fiyatlandırma', to: '/fiyatlandirma' },
  { label: 'Yardım', to: '/yardim' },
  { label: 'İletişim', to: '/iletisim' },
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

export const resourceMega = [
  {
    name: 'Öğrenim',
    items: [
      { label: 'Tüm uygulamalar', to: '/uygulamalar' },
      { label: 'Fiyatlandırma', to: '/fiyatlandirma' },
      { label: 'Yardım', to: '/yardim' },
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
    to: '/uygulamalar',
    link: 'Uygulama seti',
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

export const landingTrust = [
  { title: 'Kredi kartı yok', body: 'Demo hesabı anında; kart istemiyoruz.' },
  { title: 'Tek tenant', body: 'Firmanızın verisi başka kiracıya görünmez.' },
  { title: 'İskele’ye özel', body: 'Cephe, kiralama süresi, sevkiyat fişi omurgadır.' },
  { title: 'Sahaya iner', body: 'QR, imza ve token’lı link ile teslim.' },
] as const

export const landingWorkflow = [
  {
    step: '01',
    title: 'Talep ve teklif',
    body: 'Cephe ölçüsünden malzeme, PDF ve 3D aynı kayıttan.',
  },
  {
    step: '02',
    title: 'Şantiye ve kiralama',
    body: 'Onaylanan iş şantiye kartında; süre ve saha stoku birlikte.',
  },
  {
    step: '03',
    title: 'Depo sevkiyat',
    body: 'Çıkan / dönen fiş, QR ve imza ile stok güncellenir.',
  },
  {
    step: '04',
    title: 'Saha teslim',
    body: 'Montaj ekibi fişi telefonda görür; ofisle aynı kayıt.',
  },
  {
    step: '05',
    title: 'Tahsilat ve puantaj',
    body: 'Fatura, çek ve yevmiye şantiye bakiyesine akar.',
  },
] as const

const starterAppSlugs = [
  'talepler',
  'musteriler',
  'teklifler',
  'teklif-pdf',
  'malzemeler',
  'depo',
  'pano',
  'kullanicilar',
] as const

const operationAppSlugs = [
  ...starterAppSlugs,
  'teklif-3d',
  'santiyeler',
  'kiralama',
  'planlama',
  'takvim',
  'depo-fisleri',
  'saha',
  'araclar',
  'tedarikciler',
  'satinalma',
  'faturalar',
  'odemeler',
  'santiye-bakiyesi',
] as const

export const pricingScales = [
  { id: 'micro', label: '1–5 kişi', planId: 'baslangic' },
  { id: 'small', label: '6–50 kişi', planId: 'operasyon' },
  { id: 'mid', label: '51+ kişi', planId: 'kurumsal' },
] as const

export type BillingCycle = 'yearly' | 'monthly'

/** Odoo TR aylık (Standart 14,80 € / Özel 22,40 €) − %25, euro cent */
export const pricingPlans = [
  {
    id: 'baslangic',
    name: 'Başlangıç',
    audience: 'Tek ofis, küçük ekip · 1–5 kişi',
    headcount: '1–5',
    headcountNote: 'kişilik ofis',
    blurb: 'Talep, teklif ve temel stok ile ofisi toparlayın.',
    monthlyCents: 0,
    features: ['Talepler ve müşteriler', 'Teklif ve PDF', 'Malzeme kataloğu', 'Temel stok', 'Birkaç kullanıcı'],
    apps: starterAppSlugs,
    cta: 'Ücretsiz deneyin',
  },
  {
    id: 'operasyon',
    name: 'Operasyon',
    audience: 'Saha ve depo ile büyüyen firma · 6–50 kişi',
    headcount: '6–50',
    headcountNote: 'kişilik operasyon',
    blurb: 'Şantiye, depo fişi, saha QR ve tahsilat aynı kayıtta.',
    monthlyCents: 1110,
    featured: true,
    features: ['3D iskele görünümü', 'Şantiye, kiralama, planlama', 'Depo fişi, saha, QR', 'Faturalar ve tahsilat', 'Araçlar'],
    apps: operationAppSlugs,
    cta: 'Bu paketi konuşalım',
  },
  {
    id: 'kurumsal',
    name: 'Kurumsal',
    audience: 'Çok ekip, İK ve muhasebe · 51+ kişi',
    headcount: '51+',
    headcountNote: 'çok ekip',
    blurb: 'İK, çek, kasa ve gelişmiş yetki ile tam operasyon.',
    monthlyCents: 1680,
    features: ['İK, puantaj, izin, maaş', 'Çek, kasa, nakit akışı', 'Alış ve ödeme planı', 'Gelişmiş yetkiler', 'Öncelikli destek'],
    apps: productApps.map(app => app.slug),
    cta: 'Kurumsal teklif alın',
  },
] as const

export function formatEuro(cents: number) {
  return (cents / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

/** Yıllıkta 12 ay yerine 10 ay ücret — aylık eşdeğer. */
export function billedMonthlyCents(monthlyCents: number, cycle: BillingCycle) {
  if (monthlyCents === 0) return 0
  return cycle === 'yearly' ? Math.round((monthlyCents * 10) / 12) : monthlyCents
}

export const pricingNotes = [
  'Yıllıkta 2 ay hediye — 12 ay yerine 10 ay ödersiniz',
  'Kullanıma bağlı gizli kalem yok',
  'İhtiyacınız olmayan ekran satılmaz',
  'Fiyat, kullanıcı başına / ay',
] as const

export const pricingPerks = [
  {
    title: 'Tek ürün',
    body: 'Modül indirmek yok. Paket, hangi ekran setinin açık olacağını belirler.',
  },
  {
    title: 'Gizli kalem yok',
    body: 'Kullanıma göre sürpriz fatura yok. Liste fiyatı kullanıcı başına / aydır.',
  },
  {
    title: 'Kredi kartı yok',
    body: 'Demo hesabı anında açılır. Kart bilgisi istenmez.',
  },
  {
    title: 'Veri tenant’ta',
    body: 'Her iskele firması kendi kaydını görür. Başka kiracıya görünmez.',
  },
] as const

export const pricingFaqs = [
  {
    title: 'Tek bir fiyata tüm uygulamalar açık mı?',
    body: 'İskele Pro tek üründür; ayrı ayrı satılmaz. Paket, firmanızın ölçeğine göre hangi ekran setinin açık olacağını belirler. Kurumsal pakette tüm ekranlar açıktır.',
  },
  {
    title: 'Paketler arasındaki fark nedir?',
    body: 'Başlangıç ofis teklifi ve temel stok içindir. Operasyon şantiye, depo fişi, saha QR ve tahsilatı ekler. Kurumsal İK, çek, kasa ve gelişmiş yetkiyi açar.',
  },
  {
    title: 'Yıllık ve aylık farkı nedir?',
    body: 'Yıllık ödemede 12 ay yerine 10 ay ücret alınır; 2 ay hediyedir. Kartta görünen tutar yine ayda kullanıcı başınadır.',
  },
  {
    title: 'Fiyatlar kullanıcı başına mı?',
    body: 'Evet. Ofiste belge oluşturan kullanıcılar ücretlidir. Token’lı saha linki ile teslim yapan ekip kullanıcı sayısına girmez.',
  },
  {
    title: 'Aboneliğe neler dahil?',
    body: 'Açık ekran seti, barındırma, bakım ve destek pakete dahildir. İhtiyacınız olmayan ekran satılmaz. Özel geliştirme ve kurulum hizmeti ayrıca konuşulur.',
  },
  {
    title: 'Saha ekibi kullanıcı sayısına girer mi?',
    body: 'Teslim ve izin için token’lı link yeterlidir; portal kullanıcısı değildir. Ofiste belge oluşturan çalışanlar kullanıcıdır.',
  },
  {
    title: 'Başlangıç’tan Operasyon’a nasıl geçilir?',
    body: 'Ölçeğiniz büyüyünce ekran seti açılır. Veri taşınmaz; aynı tenant’ta şantiye, fiş ve saha ekranları devreye girer.',
  },
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
