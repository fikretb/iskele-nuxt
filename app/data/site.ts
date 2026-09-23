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
      { label: 'Yönetim Paneli', to: 'portal' },
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
    body: 'Teklif şantiyeye, fiş stoğa, fatura bakiyeye bağlanır. Kopuk Excel ve ayrı programlar yerine firmaya özel tek veri alanı.',
  },
  {
    title: 'Sahaya inen yazılım',
    body: 'QR, imza ve token’lı link ile montaj ekibi ofise üye olmadan teslim ve izin işler.',
  },
  {
    title: 'İskele işine özel',
    body: 'Cephe ölçüsü, 3D kurulumu, kiralama ve satış süreci ile şantiye bakiyesi genel ERP’den kopyalanmış ekranlar değil.',
  },
  {
    title: 'Firma bazlı yetki',
    body: 'Her iskele firması kendi verisini görür. Depocu, muhasebe ve teklifçi ekran ekran ayrılır.',
  },
] as const

export const withoutUs = [
  'Teklif Word’de, stok Excel’de, para defterde',
  'Sahaya çıkan malzeme şoförün aklında',
  'Puantaj kâğıttan, maaş ay sonunda',
  '3D yok, müşteri çizim bekliyor',
]

export const withUs = [
  'Teklif + PDF + 3D tek kayıttan',
  'Sevkiyat ve iade QR + imza ile kayıtta',
  'Puantaj kapanınca maaşa otomatik akar',
  'Şantiye bakiyesi net: tahsil edildi mi?',
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
    body: 'Depocu teklif yazmaz, muhasebe sahayı yetkisi kadar görür. Firmaya özel veri alanı başka firmayı göstermez.',
  },
] as const

export const pillars = [
  {
    title: 'İskele işine göre yazılmış',
    body: 'Genel inşaat ERP’sinin %70’i değil; cephe, kiralama ve satış, sevkiyat fişi ve şantiye bakiyesi omurgadır.',
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
    title: 'Firmaya özel veri alanı',
    body: 'Sahipli “başka firmanın tablosu” yok. Her kiralama ve satış firması kendi kaydını görür.',
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
  { title: 'Firmaya özel alan', body: 'Veriniz başka firmaya görünmez.' },
  { title: 'İskele’ye özel', body: 'Cephe, kiralama ve satış, sevkiyat fişi omurgadır.' },
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
    title: 'Şantiye, kiralama ve satış',
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
    features: ['3D iskele görünümü', 'Şantiye, kiralama ve satış, planlama', 'Depo fişi, saha, QR', 'Faturalar ve tahsilat', 'Araçlar'],
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
  return Math.floor(cents / 100).toLocaleString('tr-TR', { maximumFractionDigits: 0 })
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
    title: 'Firmaya özel veri',
    body: 'Her iskele firması kendi kaydını görür. Başka firmaya görünmez.',
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
    body: 'Ölçeğiniz büyüyünce ekran seti açılır. Veri taşınmaz; aynı veri alanında şantiye, fiş ve saha ekranları devreye girer.',
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
    title: 'Tek bir ücretle bütün ekranlar açılır mı?',
    body: 'İskele Pro tek üründür; ekranlar ayrı ayrı satılmaz. Paket, firmanızın ölçeğine göre hangi ekran setinin açık olacağını belirler. Başlangıç ofis teklifi ve temel stok içindir. Operasyon şantiye, depo, saha ve tahsilatı açar. Kurumsal pakette İK, çek, kasa ve tüm ekran seti açıktır. Ücret kullanıcı başına aylıktır; tek kalemde sınırsız her ekran açılmaz.',
  },
  {
    title: 'Abonelik ücretine neler dahil?',
    body: 'Seçtiğiniz paketteki ekranlar, barındırma, bakım ve destek dahildir. Kullanıma göre sürpriz kalem yoktur. Yıllık ödemede 12 ay yerine 10 ay ücret alınır; 2 ay hediyedir. Firmanıza özel kurulum, veri aktarımı ve ek geliştirme liste fiyatının dışındadır, görüşmede netleşir.',
  },
  {
    title: 'Kayıtlar nerede durur? Kendi sunucuma kurabilir miyim?',
    body: 'İskele Pro bulutta çalışır; barındırma aboneliğe dahildir. Her iskele firmasının kaydı ayrıdır: teklif, stok ve maaş başka firmaya görünmez. Ayrı bir çevrim içi lisans ve kurumsal lisans ayrımı yoktur. Kendi sunucunuza kurulum standart paket değildir; böyle bir ihtiyaç varsa kurulum görüşmesinde konuşulur.',
  },
  {
    title: 'Kurulumu kim yapar, ücreti nedir?',
    body: 'Demo ve ilk bakış için iletişim formunu doldurmanız yeterlidir; kredi kartı istenmez. Paket fiyatı sitede kullanıcı başına yazılıdır. Firmanızın mevcut Excel, cari veya stok kayıtlarının taşınması ve kuruma özel kurulum ayrıca konuşulur. Şantiye sayınız ve ekran ihtiyacınız netleşince kurulum kapsamı belirlenir.',
  },
  {
    title: 'Başlangıç paketinde neler açık?',
    body: 'Başlangıç ücretsizdir. Talep, müşteri, teklif, PDF, malzeme kataloğu ve temel stok birkaç kullanıcıyla açılır. Bunlar ayrı uygulamalar değil, aynı kaydın ofis yüzüdür. Şantiye, depo fişi, saha QR, İK, çek ve gelişmiş yetki bu pakette yoktur. Birden fazla firmayı tek hesapta yönetmek veya ekranları kendiniz tasarlamak da dahil değildir.',
  },
  {
    title: 'Başlangıç’tan Operasyon veya Kurumsal’a nasıl geçilir?',
    body: 'Ölçeğiniz büyüyünce ekran seti aynı hesapta açılır. Teklif, cari ve stok taşınmaz; yerinde kalır. Operasyon’da şantiye, kiralama ve satış, depo fişi ve saha devreye girer. Kurumsal’da İK, puantaj, çek ve kasa eklenir. Yeniden kurulum gerekmez.',
  },
  {
    title: 'Paketler arasındaki fark nedir?',
    body: 'Başlangıç, 1–5 kişilik ofis içindir: talep, teklif ve temel stok. Operasyon, 6–50 kişilik saha ve depo işi içindir: şantiye, kiralama ve satış, fiş, QR ve tahsilat. Kurumsal, 51 ve üzeri ekip içindir: İK, çek, kasa, nakit akışı ve gelişmiş yetki. Üçü de aynı üründür; fark, açık ekran setidir.',
  },
  {
    title: 'Ücretli kullanıcı kimdir?',
    body: 'Ofiste teklif, fiş, fatura veya puantaj oluşturan çalışanlar kullanıcıdır ve ücretlendirilir. Sahada teslim veya izin için token’lı link kullanan ekip portal kullanıcısı sayılmaz; kullanıcı adedine girmez. Ofis kullanıcıları e-posta daveti ile eklenir.',
  },
  {
    title: 'Paket değişince kayıtlar taşınır mı?',
    body: 'Taşınmaz. Başlangıç, Operasyon ve Kurumsal aynı barındırmada durur. Paket bir lisans türü değil, açık ekran setidir. Geçişte teklif, stok ve cari yerinde kalır; yeni ekranlar aynı kayıtların üzerine açılır.',
  },
  {
    title: 'Başka bir programla bağlantı kurulur mu?',
    body: 'Standart pakette dış sistemlere açık, herkese satılan bir genel API yoktur. Mevcut programlarınızdaki cari, stok veya teklif kayıtlarının aktarılması ve özel bir bağlantı ihtiyacı kurulum görüşmesinde ele alınır.',
  },
  {
    title: 'Demo hesabı nasıl açılır?',
    body: 'İletişim formuna firma, yetkili ve e-posta bırakın. Kredi kartı istenmez. Ekip firmanıza özel hesabı açar; teklif, depo ve saha akışına birlikte bakarsınız.',
  },
  {
    title: 'Verimiz başka iskele firmasına görünür mü?',
    body: 'Görünmez. Her firma kendi veri alanındadır. Teklif, depo, tahsilat ve maaş başka bir firmaya açılmaz. Yetki de ekran ekrandır: teklif yazmak, depoyu görmek ve maaşa bakmak ayrı ayrı verilir.',
  },
] as const

export const quote = {
  lead: 'Teklifler Word’de, stok Excel’de dağıldıkça ay sonunda hangi şantiyenin kârlı olduğu kestirilemez. Ekipler evrak doğrulamak ve kayıp stok peşinde koşmakla vakit kaybeder.',
  text: 'Tek kayıttan fiş, fatura ve saha puantajı yönetilince manuel giriş ve hata azalır. Şantiye kârlılığı anlık izlenir; ofis ekibi müşteriye, satışa ve sahaya döner.',
  role: 'İskele ve kalıp kiralama-satış operasyonu, zorlama yazılımlarla yürütülemez; bu işin dinamiklerine ve saha gerçeklerine göre tasarlanmış bir sistem gerektirir.',
}
