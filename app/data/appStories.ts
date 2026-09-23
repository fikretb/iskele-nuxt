import type { ProductApp } from '~/data/apps'
import { findApp } from '~/data/apps'

export type AppStorySection = {
  title: string
  body: string
}

export type AppStory = {
  headline: string
  lead: string
  sections: AppStorySection[]
  extras: AppStorySection[]
  connected: string[]
}

const stories: Record<string, AppStory> = {
  talepler: {
    headline: 'Talep gelsin, iş kaybolmasın.',
    lead: 'Müşteri araması deftere yazılmaz. Talep kartı cariye bağlanır, teklife dönüşür.',
    sections: [
      {
        title: 'Gelen işi pipeline’da tutun',
        body: 'Kim aradı, hangi şantiye, ne kadar cephe: talep kartında durur. Ofiste “o iş neredeydi” aranmaz.',
      },
      {
        title: 'Teklife bir tık',
        body: 'Hazır talep, teklif sihirbazına aktarılır. Müşteri ve ölçüler yeniden yazılmaz.',
      },
    ],
    extras: [
      { title: 'Durum', body: 'Yeni, görüşülüyor, teklife döndü.' },
      { title: 'Cari bağ', body: 'Yetkili kişi müşteri kartından gelir.' },
    ],
    connected: ['musteriler', 'teklifler', 'pano'],
  },
  musteriler: {
    headline: 'Kiralama ve satış firması, tek cari.',
    lead: 'Teklif, şantiye ve tahsilat aynı müşteri kaydının altında durur.',
    sections: [
      {
        title: 'Birden fazla yetkili',
        body: 'Şantiye şefi ve muhasebe aynı caride ayrı kişilerdir. Teklif kime gidecek karışmaz.',
      },
      {
        title: 'Geçmiş görünür',
        body: 'Bu firmanın önceki teklifleri ve açık şantiyeleri cari kartından açılır.',
      },
    ],
    extras: [
      { title: 'İletişim', body: 'Telefon, e-posta, yetkili.' },
      { title: 'İş özeti', body: 'Teklif ve şantiye listesi.' },
    ],
    connected: ['talepler', 'teklifler', 'faturalar'],
  },
  teklifler: {
    headline: 'Ölçüden tutara.',
    lead: 'Cephe ve iskele ölçüsü malzeme satırını üretir. Birim fiyat katalogdan gelir; teklif 0 TL çıkmaz.',
    sections: [
      {
        title: 'Teklif sihirbazı',
        body: 'Yükseklik, genişlik, konsol: motor satır üretir. Satışçı formülü her seferinde yeniden kurmaz.',
      },
      {
        title: 'Ticari özet aynı kayıtta',
        body: 'Taslak, gönderildi, onaylandı. Onaylanan teklif şantiyeye döner; kopyala-yapıştır yok.',
      },
    ],
    extras: [
      { title: 'Katalog fiyatı', body: 'Malzeme birimi teklifi taşır.' },
      { title: 'Durum takibi', body: 'Ofis kimin beklediğini görür.' },
    ],
    connected: ['teklif-3d', 'teklif-pdf', 'malzemeler', 'santiyeler'],
  },
  'teklif-3d': {
    headline: 'Ne kurulacak, modelde.',
    lead: 'Teklifteki cephe verisinden 3D görünüm çıkar. Müşteri çizim bekleyerek karar vermez.',
    sections: [
      {
        title: 'Aynı ölçü, aynı model',
        body: '3D ayrı bir dosya değildir. Teklif değişince görünüm de o kayıttan üretilir.',
      },
      {
        title: 'Satış görüşmesi',
        body: 'Şantiye toplantısında “şu konsol nereye” tartışması model üzerinden yürür.',
      },
    ],
    extras: [
      { title: 'Cephe modeli', body: 'İskele geometrisi tekliften.' },
      { title: 'Saha bağ', body: 'Kurulacak iş ile teklif aynıdır.' },
    ],
    connected: ['teklifler', 'teklif-pdf', 'santiyeler'],
  },
  'teklif-pdf': {
    headline: 'Antetli kâğıt, sistemdeki satır.',
    lead: 'PDF stüdyosu logo ve blokları düzenler. Müşteriye giden belge ile teklif kaydı ayrılmaz.',
    sections: [
      {
        title: 'Şablon sizin',
        body: 'Firma anteti, ticari özet, malzeme tablosu stüdyoda durur. Her teklifte yeniden Word açılmaz.',
      },
      {
        title: 'Yazdır, gönder',
        body: 'Üretilen PDF teklif satırlarından gelir. Elle silinen kalem stokla çelişmez.',
      },
    ],
    extras: [
      { title: 'Antet', body: 'Logo ve firma bilgisi.' },
      { title: 'Otomatik satır', body: 'Motor çıktısı PDF’e akar.' },
    ],
    connected: ['teklifler', 'teklif-3d', 'musteriler'],
  },
  santiyeler: {
    headline: 'İşin kartı: konum, süre, bakiye.',
    lead: 'Onaylanan teklif şantiyeye döner. Sevkiyat, saha ve tahsilat aynı karttan izlenir.',
    sections: [
      {
        title: 'Tek iş, tek kayıt',
        body: 'Adres, kiralama dönemi, bağlı fişler ve açık bakiye şantiye kartındadır.',
      },
      {
        title: 'Sahadan ofise',
        body: 'Depo fişi ve saha imzası bu karta yazılır. “Hangi işe çıktı” şoförün hafızasında kalmaz.',
      },
    ],
    extras: [
      { title: 'Kiralama dönemi', body: 'Başlangıç ve bitiş.' },
      { title: 'Bakiye', body: 'Fatura ve tahsilat özeti.' },
    ],
    connected: ['kiralama', 'depo-fisleri', 'saha', 'santiye-bakiyesi'],
  },
  kiralama: {
    headline: 'Kirala. Takip et.',
    lead: 'İskele kiralaması stoktan düşüp şantiyede duran bir süreçtir. Hangi malzeme sahada, kayıt söyler.',
    sections: [
      {
        title: 'Süre ve şantiye',
        body: 'Kiralama dönemi şantiye kartına bağlanır. Malzeme “bir yerde” değil, o iştedir.',
      },
      {
        title: 'İade görünür',
        body: 'Dönen malzeme iade fişiyle kiralama kaydını kapatır. Depo bakiyesi tahmin değildir.',
      },
    ],
    extras: [
      { title: 'Saha stoku', body: 'Şantiyede kalan kalemler.' },
      { title: 'Fatura bağ', body: 'Kiralama geliri faturaya akar.' },
    ],
    connected: ['santiyeler', 'depo', 'depo-fisleri', 'faturalar'],
  },
  planlama: {
    headline: 'Kurulum ve söküm takvimde.',
    lead: 'Ekip ve araç çakışması ayrı Excel’de kalmaz. Şantiye işleri planlama görünümünde durur.',
    sections: [
      {
        title: 'Zaman çizelgesi',
        body: 'Hangi şantiye hangi gün kurulacak, ofis ve saha aynı planı görür.',
      },
      {
        title: 'Kaynak',
        body: 'Ekip ve araç planlamaya bağlanır. Aynı kamyon iki işe yazılmaz.',
      },
    ],
    extras: [
      { title: 'Gantt', body: 'İşlerin üst üste binmesi görünür.' },
      { title: 'Takvim', body: 'Günlük iş listesi aynı kayıttan.' },
    ],
    connected: ['takvim', 'santiyeler', 'araclar', 'saha'],
  },
  takvim: {
    headline: 'Ofis ve saha aynı günü görsün.',
    lead: 'Kurulum, söküm, teslimat ve iç işler tek takvimde toplanır.',
    sections: [
      {
        title: 'Bugünün işi',
        body: 'Yönetim özetinden güne inilir. “Bu kamyon nereye” takvim satırındadır.',
      },
    ],
    extras: [
      { title: 'Haftalık görünüm', body: 'Yoğun günler önden belli olur.' },
    ],
    connected: ['planlama', 'pano', 'santiyeler'],
  },
  depo: {
    headline: 'Hangi depoda ne var.',
    lead: 'İskele malzemesi depo bazında tutulur. Fiş kesilmeden stok hareketi olmaz.',
    sections: [
      {
        title: 'Çoklu depo',
        body: 'Merkez ve saha deposu ayrı bakiyedir. Teklif fiyatı katalogdan, miktar depodan bakılır.',
      },
      {
        title: 'Hareket geçmişi',
        body: 'Çıkan ve dönen her kalem fişe bağlıdır. Ay sonu sayımı sürprize kalmaz.',
      },
    ],
    extras: [
      { title: 'Bakiye', body: 'Depo ve malzeme kesiti.' },
      { title: 'Katalog bağ', body: 'Birim fiyat teklife gider.' },
    ],
    connected: ['depo-fisleri', 'malzemeler', 'kiralama', 'satinalma'],
  },
  'depo-fisleri': {
    headline: 'Çıkan ve dönen, fişle belli.',
    lead: 'Sevkiyat ve iade satır satır düzenlenir. PDF basılır, sahada QR okutulur, imza alınır.',
    sections: [
      {
        title: 'Sevkiyat fişi',
        body: 'Şantiyeye çıkan dikme ve platform bu fiştedir. Ofisteki stok fiş onayından güncellenir.',
      },
      {
        title: 'İade ve imza',
        body: 'Dönen malzeme iade fişiyle girer. Saha imzası ve QR, “şoför söyledi” kaydının yerini tutar.',
      },
    ],
    extras: [
      { title: 'Satır editörü', body: 'Kalem kalem düzeltme.' },
      { title: 'Fiş PDF', body: 'Yazdırılabilir teslimat.' },
    ],
    connected: ['depo', 'saha', 'santiyeler', 'kiralama'],
  },
  saha: {
    headline: 'Teslim, QR, imza — cepte.',
    lead: 'Saha ekibi ofisteki fişi telefonda görür. Üye olmayan çalışan token’lı linkle işlem yapar.',
    sections: [
      {
        title: 'Fiş listesi telefonda',
        body: 'Bugün teslim edilecek fişler sahaya düşer. Ofise “fotoğraf at” yazışması azalır.',
      },
      {
        title: 'QR ve imza',
        body: 'Fiş okutulur, teslim imzası alınır. Token’lı izin ve görev linki aynı saha kanalındandır.',
      },
    ],
    extras: [
      { title: 'QR okuyucu', body: 'Fiş kimliği sahada.' },
      { title: 'İmza pedi', body: 'Teslim kanıtı kayıttadır.' },
    ],
    connected: ['depo-fisleri', 'izinler', 'santiyeler', 'puantaj'],
  },
  araclar: {
    headline: 'Filo, şantiye planına bağlı.',
    lead: 'Kamyon hangi işte, planlamadan ayrı durmaz.',
    sections: [
      {
        title: 'Araç kartı',
        body: 'Servis ve sevkiyat araçları şantiye / fiş ile eşlenir.',
      },
    ],
    extras: [
      { title: 'Filo listesi', body: 'Hangi araç müsait.' },
    ],
    connected: ['planlama', 'depo-fisleri', 'santiyeler'],
  },
  tedarikciler: {
    headline: 'Alış yaptığınız satıcı, cari.',
    lead: 'İskele ve demir tedarikçisi, yetkili kişiler ve alış faturaları aynı yerde.',
    sections: [
      {
        title: 'Tedarikçi kartı',
        body: 'Satın alma siparişi bu kayıttan yürür. Telefon defteri ayrı durmaz.',
      },
    ],
    extras: [
      { title: 'Alış geçmişi', body: 'Önceki siparişler caride.' },
    ],
    connected: ['satinalma', 'malzemeler', 'faturalar'],
  },
  satinalma: {
    headline: 'Eksilen stok, siparişe.',
    lead: 'Depoda biten malzeme için satın alma açılır. Tedarikçi, kalem ve alış faturası bağlanır.',
    sections: [
      {
        title: 'Sipariş satırları',
        body: 'Katalogdaki malzeme satınalmaya yazılır. Fiyat teklif kataloğu ile kopuk kalmaz.',
      },
    ],
    extras: [
      { title: 'Tedarikçi seçimi', body: 'Cari kaydından.' },
      { title: 'Alış faturası', body: 'Sipariş kapandığında bağlanır.' },
    ],
    connected: ['tedarikciler', 'malzemeler', 'depo'],
  },
  malzemeler: {
    headline: 'Birim fiyat, teklifin omurgası.',
    lead: 'Dikme, konsol, platform, ankraj: fiyat katalogda yoksa teklif tutarı 0 çıkar.',
    sections: [
      {
        title: 'Kart ve birim',
        body: 'Her kalemin birimi ve fiyatı teklif motoruna gider. Stok aynı kartı kullanır.',
      },
    ],
    extras: [
      { title: 'Teklif hesabı', body: 'Ölçü × birim fiyat.' },
      { title: 'Stok birimi', body: 'Depo ile aynı dil.' },
    ],
    connected: ['teklifler', 'depo', 'satinalma'],
  },
  faturalar: {
    headline: 'Kiralama ve satış geliri şantiyeye yazılı.',
    lead: 'Satış faturası müşteri ve şantiye ile bağlanır. PDF üretilir, tahsilat bakiyesi kartta görünür.',
    sections: [
      {
        title: 'İşten faturaya',
        body: 'Onaylı kiralama veya satış, şantiye faturasına döner. “Bu iş kesildi mi” şantiye bakiyesinde durur.',
      },
    ],
    extras: [
      { title: 'Fatura PDF', body: 'Müşteriye giden belge.' },
      { title: 'Tahsilat durumu', body: 'Ödeme ve çekle eşlenir.' },
    ],
    connected: ['odemeler', 'cekler', 'santiyeler', 'santiye-bakiyesi'],
  },
  odemeler: {
    headline: 'Tahsilat, fatura ve çekle eşlensin.',
    lead: 'Gelen ödeme fatura satırına işlenir. Şantiye bakiyesi güncellenir.',
    sections: [
      {
        title: 'Kasa, çek, kart',
        body: 'Ödeme türü kayıttadır. Defterdeki “aldık” notu bakiyeyi değiştirmez.',
      },
    ],
    extras: [
      { title: 'Fatura eşleme', body: 'Hangi fatura kapandı.' },
    ],
    connected: ['faturalar', 'kasa', 'cekler', 'santiye-bakiyesi'],
  },
  cekler: {
    headline: 'Alınan ve verilen, vadesiyle.',
    lead: 'İskele tahsilatı çoğu zaman çektir. Portföy, vade ve müşteri aynı tabloda durur.',
    sections: [
      {
        title: 'Vade takibi',
        body: 'Hangi çek ne zaman tahsil, nakit akışına düşer. Sürpriz vade azalır.',
      },
    ],
    extras: [
      { title: 'Portföy', body: 'Alınan / verilen liste.' },
    ],
    connected: ['odemeler', 'nakit-akisi', 'musteriler'],
  },
  kasa: {
    headline: 'Nakit, şantiye işinden kopmasın.',
    lead: 'Kasa giriş-çıkışı fatura ve giderle bağlanır. Gün sonu ayrı deftere yazılmaz.',
    sections: [
      {
        title: 'Günlük bakiye',
        body: 'Kasa hareketi kiralama ve satış tahsilatı ile giderle aynı dilde durur.',
      },
    ],
    extras: [
      { title: 'Gider çıkışı', body: 'Yakıt ve yevmiye dışı masraf.' },
    ],
    connected: ['odemeler', 'giderler', 'nakit-akisi'],
  },
  'nakit-akisi': {
    headline: 'Gelecek vadeler tek bakışta.',
    lead: 'Çek vadesi, fatura tahsilatı ve alış ödemesi birleşir. Kiralama ve satış firmasının nakit sıkışıklığı sürprize kalmaz.',
    sections: [
      {
        title: 'Giriş ve çıkış',
        body: 'Dönem özeti çek ve faturadan üretilir. Ayrı nakit Excel’i tutulmaz.',
      },
    ],
    extras: [
      { title: 'Vade planı', body: 'Haftalık / aylık kesit.' },
    ],
    connected: ['cekler', 'faturalar', 'kasa'],
  },
  giderler: {
    headline: 'Şantiye gideri, genel gider ayrı.',
    lead: 'Yakıt, masraf, kira: gider kaydı işe veya genel gidere yazılır. Kâr tahmine kalmaz.',
    sections: [
      {
        title: 'Dağıtım',
        body: 'Şantiyeye yazılan gider bakiyede görünür. Ofis kirası ayrı kalır.',
      },
    ],
    extras: [
      { title: 'Kategori', body: 'Yakıt, yevmiye dışı, kira.' },
    ],
    connected: ['kasa', 'santiye-bakiyesi', 'santiyeler'],
  },
  'santiye-bakiyesi': {
    headline: 'Bu iş kazandırdı mı.',
    lead: 'Kiralama ve satış geliri, fatura, tahsilat ve gider şantiye kartında toplanır.',
    sections: [
      {
        title: 'Açık bakiye',
        body: 'Saha bitmeden paranın nerede olduğu görünür. Ay sonu “hangi iş kârlı” aranmaz.',
      },
    ],
    extras: [
      { title: 'Gelir / tahsilat', body: 'Kesilen ve alınan.' },
      { title: 'Gider yansıması', body: 'İşe yazılan masraf.' },
    ],
    connected: ['santiyeler', 'faturalar', 'giderler', 'odemeler'],
  },
  calisanlar: {
    headline: 'Saha ekibi, tek kart.',
    lead: 'Montaj, şoför, depo: çalışan puantaj, izin ve maaşa bağlanır.',
    sections: [
      {
        title: 'Kadro ve iletişim',
        body: 'Token’lı saha linki bu kayıttan gider. Üye olmayan çalışan da teslim yapar.',
      },
    ],
    extras: [
      { title: 'Görev', body: 'Saha, depo, ofis.' },
    ],
    connected: ['puantaj', 'izinler', 'maas', 'saha'],
  },
  puantaj: {
    headline: 'Kim, hangi şantiye, kaç gün.',
    lead: 'Saha yevmiyesi ofise sonradan yazılmaz. Puantaj şantiye ve tarihe işlenir, maaşa akar.',
    sections: [
      {
        title: 'Günlük kayıt',
        body: 'Dönem kilitlenince maaş hesabı bu tablodan yürür. Kâğıt puantaj kaybolmaz.',
      },
    ],
    extras: [
      { title: 'Şantiye bazlı gün', body: 'İş maliyeti görülsün.' },
      { title: 'Dönem kilit', body: 'Kesinleşen günler maaşa.' },
    ],
    connected: ['mesailer', 'maas', 'santiyeler', 'calisanlar'],
  },
  mesailer: {
    headline: 'Gece kurulum, kayda.',
    lead: 'Hafta sonu söküm ve fazla mesai puantaj ve maaşa yansır.',
    sections: [
      {
        title: 'Onaylı mesai',
        body: 'Mesai kalemi “söylendi” değil, onaylı kayıttır.',
      },
    ],
    extras: [
      { title: 'Maaş kalemi', body: 'Dönem dökümünde görünür.' },
    ],
    connected: ['puantaj', 'maas'],
  },
  izinler: {
    headline: 'Sahadan talep, ofisten onay.',
    lead: 'Çalışana token’lı izin linki gider. Onaylanmayan gün puantaja yazılmaz.',
    sections: [
      {
        title: 'Saha linki',
        body: 'Uygulamaya üye olmayan montajcı da izin ister. Ofis onaylar.',
      },
    ],
    extras: [
      { title: 'Puantaj etkisi', body: 'Boş gün yevmiyeye girmez.' },
    ],
    connected: ['calisanlar', 'saha', 'puantaj'],
  },
  maas: {
    headline: 'Dönem kapat, yevmiyeyi öde.',
    lead: 'Puantaj ve mesai maaş dönemine dökülür. Çalışan kendi dönemini görür.',
    sections: [
      {
        title: 'Maaşım ekranı',
        body: 'Dönem kapanınca tutar çalışan kartından izlenir. Ay sonu sürprizi azalır.',
      },
    ],
    extras: [
      { title: 'Aktarım', body: 'Puantaj → maaş kalemi.' },
    ],
    connected: ['puantaj', 'mesailer', 'calisanlar'],
  },
  pano: {
    headline: 'Bugün kaç teklif, kaç açık iş.',
    lead: 'Açık talepler, taslak teklifler ve şantiye sayısı özetlenir. Yeni firma kurulum adımlarını görür.',
    sections: [
      {
        title: 'Günlük özet',
        body: 'Yönetim güne pano ile başlar. Kısayollar teklif, depo ve sahaya iner.',
      },
    ],
    extras: [
      { title: 'Kurulum', body: 'Müşteri, fiyatlı malzeme, ilk teklif.' },
    ],
    connected: ['talepler', 'teklifler', 'santiyeler', 'raporlar'],
  },
  raporlar: {
    headline: 'Stok, fatura, iş özeti.',
    lead: 'Yetkisi olan depo, malzeme ve fatura kesitine bakar. Ay sonu Excel kapanışı azalır.',
    sections: [
      {
        title: 'Yetkiye göre',
        body: 'Depocu maaş görmez, muhasebe saha fişini yetkisi kadar görür.',
      },
    ],
    extras: [
      { title: 'Operasyon kesiti', body: 'Açık şantiye ve stok.' },
    ],
    connected: ['pano', 'depo', 'faturalar'],
  },
  kullanicilar: {
    headline: 'Depocu teklifi görmesin.',
    lead: 'Her iskele firması kendi tenant’ındadır. Ekran ekran yetki verilir.',
    sections: [
      {
        title: 'Rol paneli',
        body: 'Teklif yazma, depo okuma, maaş görme ayrıdır. Başka firmanın verisi görünmez.',
      },
    ],
    extras: [
      { title: 'Davet', body: 'Kullanıcı e-posta ile eklenir.' },
      { title: 'Aktivite', body: 'Kim neyi değiştirdi.' },
    ],
    connected: ['pano', 'calisanlar'],
  },
}

const fallback = (app: ProductApp): AppStory => ({
  headline: app.tagline,
  lead: app.description,
  sections: [{ title: 'Ne işe yarar', body: app.description }],
  extras: app.features.map(title => ({ title, body: app.tagline })),
  connected: [],
})

export function getAppStory(app: ProductApp): AppStory {
  return stories[app.slug] ?? fallback(app)
}

export function connectedApps(app: ProductApp) {
  return getAppStory(app).connected.map(slug => findApp(slug)).filter(Boolean) as ProductApp[]
}
