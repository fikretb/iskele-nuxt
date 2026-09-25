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
    headline: 'Keşif gelsin, iş kaybolmasın.',
    lead: 'Müteahhit veya şantiye şefi aradığında cephe, kiralama mı satış mı, kurulum tarihi talep kartında durur. Deftere yazılan iş teklife dönmez.',
    sections: [
      {
        title: 'Gelen iş ofiste görünür',
        body: 'Kim aradı, hangi şantiye, ne kadar cephe, seyyar mı cephe iskelesi: talep kartında durur. Ofiste “o iş neredeydi” aranmaz; durum yeni, görüşülüyor veya teklife döndü olarak izlenir.',
      },
      {
        title: 'Teklife ölçüyle geçin',
        body: 'Hazır talep, teklif sihirbazına aktarılır. Müşteri, şantiye ve keşif ölçüleri yeniden yazılmaz. Kiralama veya satış tercihi satırlara taşınır.',
      },
    ],
    extras: [
      { title: 'Durum', body: 'Yeni keşif, görüşülüyor, teklife döndü.' },
      { title: 'İş notu', body: 'Cephe, kat, kurulum tarihi kartta.' },
      { title: 'Müşteri bağ', body: 'Şantiye şefi cari kaydından gelir.' },
    ],
    connected: ['musteriler', 'teklifler', 'pano'],
  },
  musteriler: {
    headline: 'Müteahhit ve kiralama müşterisi, tek cari.',
    lead: 'Teklif, açık şantiye ve tahsilat aynı müşteri kaydının altında durur. Şantiye şefi ile muhasebe karışmaz.',
    sections: [
      {
        title: 'Yetkililer ayrı kişilerdir',
        body: 'Şantiyeyi yöneten ile faturayı onaylayan aynı caride ayrı kişilerdir. Teklif kime gidecek, tahsilat kime sorulacak netleşir.',
      },
      {
        title: 'Eski işler caride durur',
        body: 'Bu firmanın önceki kiralama teklifleri, sahadaki şantiyeleri ve açık bakiyesi karttan açılır. Yeni keşif boş müşteri gibi başlamaz.',
      },
    ],
    extras: [
      { title: 'İletişim', body: 'Telefon, e-posta, yetkili.' },
      { title: 'İş özeti', body: 'Teklif ve şantiye listesi.' },
      { title: 'Tahsilat', body: 'Açık fatura cariden görünür.' },
    ],
    connected: ['talepler', 'teklifler', 'faturalar'],
  },
  teklifler: {
    headline: 'Cephe ölçüsünden kira ve satış tutarına.',
    lead: 'Genişlik, yükseklik ve kat yüksekliği dikme, kuşak, platform ve ankraj satırını üretir. Birim fiyat katalogdan gelir; teklif 0 TL çıkmaz.',
    sections: [
      {
        title: 'Keşif, formüle değil motora gider',
        body: 'Satışçı her seferinde Excel formülü kurmaz. Cephe ve iskele ölçüsü malzeme listesini üretir. Kiralama günü veya satış bedeli ticari özette durur.',
      },
      {
        title: 'Onaylanan teklif şantiyeye döner',
        body: 'Taslak, gönderildi, onaylandı ofiste görünür. Müşteri onaylayınca iş kopyala-yapıştırla şantiyeye taşınmaz; aynı kayıttan kuruluma iner.',
      },
    ],
    extras: [
      { title: 'Katalog fiyatı', body: 'Dikme ve platform birim fiyatı satırı taşır.' },
      { title: 'Durum takibi', body: 'Kimin teklifi beklediği ofiste durur.' },
      { title: 'Kiralama / satış', body: 'İş türü tutara yansır.' },
    ],
    connected: ['teklif-3d', 'teklif-pdf', 'malzemeler', 'santiyeler'],
  },
  'teklif-3d': {
    headline: 'Kurulacak iskele, modelde.',
    lead: 'Teklifteki cephe verisinden 3D görünüm çıkar. Müşteri çizim bekleyerek karar vermez; konsol ve kat sayısı model üzerinden konuşulur.',
    sections: [
      {
        title: 'Aynı ölçü, aynı model',
        body: '3D ayrı bir çizim dosyası değildir. Cephe genişliği veya kat değişince görünüm de teklif kaydından üretilir. Satış ile saha farklı resim bakmaz.',
      },
      {
        title: 'Şantiye toplantısında netleşir',
        body: '“Şu konsol nereye, yürüyüş yolu kaç sıra” tartışması model üzerinden yürür. Onaylanan görünüm, kurulacak iş ile aynı ölçüdedir.',
      },
    ],
    extras: [
      { title: 'Cephe modeli', body: 'İskele geometrisi tekliften.' },
      { title: 'Sunum', body: 'Müşteriye kurulumu gösterin.' },
      { title: 'Saha bağ', body: 'Kurulacak iş ile teklif aynıdır.' },
    ],
    connected: ['teklifler', 'teklif-pdf', 'santiyeler'],
  },
  'teklif-pdf': {
    headline: 'Antetli teklif, sistemdeki satır.',
    lead: 'Müşteriye giden kiralama veya satış PDF’i Word’den kopyalanmaz. Logo, antet ve malzeme tablosu stüdyoda durur; satırlar teklif motorundan akar.',
    sections: [
      {
        title: 'Şablon sizin antetiniz',
        body: 'Firma logosu, ticari özet ve malzeme tablosu her işte yeniden dizilmez. Kiralama süresi ve tutar belgede teklif kaydıyla aynıdır.',
      },
      {
        title: 'Yazdırın, gönderin',
        body: 'Üretilen PDF’te elle silinen kalem stokla çelişmez. Müşteriye giden kâğıt ile ofisteki satır tek kayıttır.',
      },
    ],
    extras: [
      { title: 'Antet', body: 'Logo ve firma bilgisi.' },
      { title: 'Otomatik satır', body: 'Motor çıktısı PDF’e akar.' },
      { title: 'Yazdırma', body: 'Keşif sonrası hemen belgelenir.' },
    ],
    connected: ['teklifler', 'teklif-3d', 'musteriler'],
  },
  santiyeler: {
    headline: 'İşin kartı: konum, kira süresi, saha stoku.',
    lead: 'Onaylanan teklif şantiye kartına döner. Sevkiyat, söküm, teslim ve tahsilat aynı işin altındadır.',
    sections: [
      {
        title: 'Tek cephe, tek kayıt',
        body: 'Adres, kiralama başlangıç ve bitiş, sahaya çıkan malzeme ve açık bakiye şantiye kartındadır. “Hangi işe çıktı” şoförün hafızasında kalmaz.',
      },
      {
        title: 'Sahadan ofise aynı iş',
        body: 'Sevkiyat fişi, iade ve saha imzası bu karta yazılır. Kurulum bitmeden kira süresi ve saha stoku birlikte izlenir.',
      },
    ],
    extras: [
      { title: 'Kiralama dönemi', body: 'Başlangıç, bitiş, uzatma.' },
      { title: 'Saha stoku', body: 'O işte kalan kalemler.' },
      { title: 'Bakiye', body: 'Fatura ve tahsilat özeti.' },
    ],
    connected: ['kiralama', 'depo-fisleri', 'saha', 'santiye-bakiyesi'],
  },
  kiralama: {
    headline: 'Kiraya çıktı. Sahada duruyor. İade geldi.',
    lead: 'İskele kiralaması stoktan düşüp şantiyede bekleyen bir süreçtir. Hangi dikme ve platform o işte, kayıt söyler; tahmini depo değil.',
    sections: [
      {
        title: 'Süre ve şantiye bağlı',
        body: 'Kiralama dönemi şantiye kartına bağlanır. Malzeme “bir yerde” değil, o cephe işindedir. Uzatma günü bakiyeyi ve saha stokunu etkiler.',
      },
      {
        title: 'Söküm ve iade kapatır',
        body: 'Dönen malzeme iade fişiyle kiralama kaydını kapatır. Eksik iade ve kayıp kalem depo bakiyesinde görünür; ay sonu sürprizi azalır.',
      },
    ],
    extras: [
      { title: 'Saha stoku', body: 'Şantiyede kalan kalemler.' },
      { title: 'İade', body: 'Söküm sonrası depoya giriş.' },
      { title: 'Fatura bağ', body: 'Kira bedeli faturaya akar.' },
    ],
    connected: ['santiyeler', 'depo', 'depo-fisleri', 'faturalar'],
  },
  planlama: {
    headline: 'Kurulum, söküm ve kamyon aynı planda.',
    lead: 'Aynı güne iki cephe kurulumu veya aynı aracın iki şantiyeye yazılması ofiste görünür. Ekip çakışması ayrı Excel’de kalmaz.',
    sections: [
      {
        title: 'Zaman çizelgesi',
        body: 'Hangi şantiye hangi gün kurulacak, söküm ne zaman: ofis ve montaj ekibi aynı planı görür. Geciken iş bir sonrakini iter.',
      },
      {
        title: 'Ekip ve araç kaynağı',
        body: 'Montaj ekibi, söküm ve kamyon planlamaya bağlanır. Aynı kamyon iki sevkiyata, aynı ekip iki kuruluma yazılmaz.',
      },
    ],
    extras: [
      { title: 'Gantt', body: 'İşlerin üst üste binmesi görünür.' },
      { title: 'Takvim', body: 'Günlük iş listesi aynı kayıttan.' },
      { title: 'Şantiye', body: 'Her satır bir işe bağlıdır.' },
    ],
    connected: ['takvim', 'santiyeler', 'araclar', 'saha'],
  },
  takvim: {
    headline: 'Ofis ve saha aynı günü görsün.',
    lead: 'Kurulum, söküm, sevkiyat ve iç işler tek takvimde. “Bu kamyon nereye, hangi ekip sahada” satırda durur.',
    sections: [
      {
        title: 'Bugünün işi',
        body: 'Yönetim özetinden güne inilir. Yoğun kurulum günleri haftalık görünümde önden belli olur; saha sürprize kalmaz.',
      },
      {
        title: 'Şantiye olayları',
        body: 'Teslimat, kurulum ve söküm takvim kaydıdır. Planlama ile aynı işten üretilir; iki ayrı ajanda tutulmaz.',
      },
    ],
    extras: [
      { title: 'Haftalık görünüm', body: 'Yoğun günler önden belli olur.' },
      { title: 'Pano', body: 'Günün işine kısayol.' },
    ],
    connected: ['planlama', 'pano', 'santiyeler'],
  },
  depo: {
    headline: 'Hangi depoda ne var, sahaya ne çıktı.',
    lead: 'Dikme, kuşak, platform ve ankraj depo bazında tutulur. Fiş kesilmeden stok hareketi olmaz; “tahminen yeter” ile iş çıkılmaz.',
    sections: [
      {
        title: 'Merkez ve saha ayrı bakiye',
        body: 'Merkez depo ile şantiyede duran malzeme ayrıdır. Teklif fiyatı katalogdan, çıkabilecek miktar depodan bakılır.',
      },
      {
        title: 'Hareket fişe bağlı',
        body: 'Çıkan ve sökümden dönen her kalem sevkiyat veya iade fişine yazılır. Ay sonu sayımı sürprize kalmaz; kayıp ve eksik iade görünür.',
      },
    ],
    extras: [
      { title: 'Bakiye', body: 'Depo ve malzeme kesiti.' },
      { title: 'Katalog bağ', body: 'Birim fiyat teklife gider.' },
      { title: 'Çoklu depo', body: 'Merkez ve ara stok ayrı.' },
    ],
    connected: ['depo-fisleri', 'malzemeler', 'kiralama', 'satinalma'],
  },
  'depo-fisleri': {
    headline: 'Sahaya çıkan ve sökümden dönen, fişle belli.',
    lead: 'Sevkiyat ve iade satır satır düzenlenir. PDF basılır, sahada QR okutulur, teslim imzası alınır. Ofisteki stok bu fişten güncellenir.',
    sections: [
      {
        title: 'Sevkiyat fişi',
        body: 'Şantiyeye giden dikme, platform ve konsol bu fiştedir. Kamyon çıktığında ofisteki stok fiş onayından düşer; “şoför yükledi” kaydı yetmez.',
      },
      {
        title: 'İade ve teslim imzası',
        body: 'Söküm sonrası dönen malzeme iade fişiyle depoya girer. QR ve imza, “şoför söyledi” kaydının yerini tutar. Eksik kalem iade satırında kalır.',
      },
    ],
    extras: [
      { title: 'Satır editörü', body: 'Kalem kalem düzeltme.' },
      { title: 'Fiş PDF', body: 'Yazdırılabilir teslimat.' },
      { title: 'QR', body: 'Sahada fiş kimliği.' },
    ],
    connected: ['depo', 'saha', 'santiyeler', 'kiralama'],
  },
  saha: {
    headline: 'Teslim tutanağı, QR, imza — cepte.',
    lead: 'Montaj ekibi ofisteki sevkiyat fişini telefonda görür. Üye olmayan şoför veya taşeron, gönderilen linkle teslimi tamamlar.',
    sections: [
      {
        title: 'Bugünün fişi telefonda',
        body: 'Teslim edilecek sevkiyatlar sahaya düşer. Ofise “fotoğraf at, imza al” yazışması azalır; teslim kayıttadır.',
      },
      {
        title: 'QR ve teslim imzası',
        body: 'Fiş okutulur, şantiye teslimi imzalanır. İzin ve dış görev linki de aynı saha kanalındandır; uygulamaya üye olmayan çalışan da işlem yapar.',
      },
    ],
    extras: [
      { title: 'QR okuyucu', body: 'Fiş kimliği sahada.' },
      { title: 'İmza pedi', body: 'Teslim kanıtı kayıttadır.' },
      { title: 'Fiş listesi', body: 'Günün sevkiyatı cepte.' },
    ],
    connected: ['depo-fisleri', 'izinler', 'santiyeler', 'puantaj'],
  },
  araclar: {
    headline: 'Kamyon, şantiye sevkiyatına bağlı.',
    lead: 'Hangi aracın hangi işe malzeme götürdüğü planlamadan ayrı durmaz. Aynı kamyon iki kuruluma yazılmaz.',
    sections: [
      {
        title: 'Araç kartı ve iş günü',
        body: 'Servis ve sevkiyat araçları şantiye ve fiş ile eşlenir. Filo listesinde müsait araç görünür; planlama aynı kaynaktan bakar.',
      },
      {
        title: 'Sevkiyatla birlikte',
        body: 'Fiş kesilirken araç seçilir. “Bu kamyon nerede” takvim ve planlama satırındadır.',
      },
    ],
    extras: [
      { title: 'Filo listesi', body: 'Hangi araç müsait.' },
      { title: 'Sevkiyat bağ', body: 'Fiş ve şantiye eşlemesi.' },
    ],
    connected: ['planlama', 'depo-fisleri', 'santiyeler'],
  },
  tedarikciler: {
    headline: 'Dikme ve platform aldığınız satıcı, cari.',
    lead: 'İskele üreticisi, galvenizci veya demir tedarikçisi, yetkili kişiler ve alış faturaları aynı yerde durur.',
    sections: [
      {
        title: 'Tedarikçi kartı',
        body: 'Satın alma siparişi bu kayıttan yürür. Telefon defteri ayrı durmaz; kimden ne alındığı caride görünür.',
      },
      {
        title: 'Alış geçmişi',
        body: 'Önceki siparişler ve gelen faturalar tedarikçi kartındadır. Tekrar siparişte kalem ve fiyat kopuk kalmaz.',
      },
    ],
    extras: [
      { title: 'Yetkili', body: 'Satış ve sevkiyat muhatabı.' },
      { title: 'Alış geçmişi', body: 'Önceki siparişler caride.' },
    ],
    connected: ['satinalma', 'malzemeler', 'faturalar'],
  },
  satinalma: {
    headline: 'Depoda biten malzeme, siparişe.',
    lead: 'Kiraya çıkan stok tükenince satın alma açılır. Tedarikçi, dikme-platform satırı ve alış faturası bağlanır.',
    sections: [
      {
        title: 'Sipariş satırları katalogdan',
        body: 'Malzeme kartındaki kalem satınalmaya yazılır. Teklifteki birim ile alıştaki birim aynı dildedir; Excel çevirisi yoktur.',
      },
      {
        title: 'Alış faturası kapatır',
        body: 'Gelen malzeme depoya girince sipariş alış faturasına bağlanır. Tedarikçi bakiyesi ve stok birlikte yürür.',
      },
    ],
    extras: [
      { title: 'Tedarikçi seçimi', body: 'Cari kaydından.' },
      { title: 'Alış faturası', body: 'Sipariş kapandığında bağlanır.' },
      { title: 'Stok', body: 'Giriş depo bakiyesini artırır.' },
    ],
    connected: ['tedarikciler', 'malzemeler', 'depo'],
  },
  malzemeler: {
    headline: 'Birim fiyat, teklifin omurgası.',
    lead: 'Dikme, konsol, platform, ankraj: kiralama ve satış fiyatı katalogda yoksa teklif tutarı 0 çıkar. Depo aynı kartı kullanır.',
    sections: [
      {
        title: 'Kart, birim, fiyat',
        body: 'Her kalemin birimi teklif motoruna ve depoya gider. Kiralama birim fiyatı ile satış fiyatı aynı kartta tutulur; karışmaz.',
      },
      {
        title: 'Ölçü çarpanı katalogdan',
        body: 'Cephe hesabı bu fiyatlardan satır üretir. Stok birimi ile teklif birimi aynı dildir; “adet / metre” tartışması ofiste bitmez.',
      },
    ],
    extras: [
      { title: 'Teklif hesabı', body: 'Ölçü × birim fiyat.' },
      { title: 'Stok birimi', body: 'Depo ile aynı dil.' },
      { title: 'Kiralama / satış', body: 'İki fiyat, tek kalem.' },
    ],
    connected: ['teklifler', 'depo', 'satinalma'],
  },
  faturalar: {
    headline: 'Kira bedeli ve satış, şantiyeye yazılı.',
    lead: 'Onaylı kiralama veya malzeme satışı faturaya döner. PDF müşteriye gider; tahsilat bakiyesi şantiye kartında görünür.',
    sections: [
      {
        title: 'İşten faturaya',
        body: '“Bu cephe kesildi mi” şantiye bakiyesinde durur. Fatura müşteri carisi ve işle bağlanır; genel kasa fişi gibi kopuk kalmaz.',
      },
      {
        title: 'Belge sistemdeki satırdır',
        body: 'Fatura PDF’i kayıttan üretilir. Tahsilat ve çek bu faturaya eşlenir; ay sonu hangi işin faturalandığı aranmaz.',
      },
    ],
    extras: [
      { title: 'Fatura PDF', body: 'Müşteriye giden belge.' },
      { title: 'Tahsilat durumu', body: 'Ödeme ve çekle eşlenir.' },
      { title: 'Şantiye', body: 'Gelir o işe yazılır.' },
    ],
    connected: ['odemeler', 'cekler', 'santiyeler', 'santiye-bakiyesi'],
  },
  odemeler: {
    headline: 'Hakediş ve tahsilat, fatura ve çekle eşlensin.',
    lead: 'Müteahhitten gelen ödeme fatura satırına işlenir. Şantiye açık bakiyesi güncellenir; defterdeki “aldık” notu yetmez.',
    sections: [
      {
        title: 'Kasa, çek, havale',
        body: 'Ödeme türü kayıttadır. Kiralama tahsilatı ilgili faturaya bağlanır. Yanlış işe yazılan para şantiye bakiyesini bozmaz.',
      },
      {
        title: 'Açık tutar kapanır',
        body: 'Kısmi tahsilat fatura bakiyesini düşürür. Çek vadesi nakit akışına, kasa girişi gün sonuna yansır.',
      },
    ],
    extras: [
      { title: 'Fatura eşleme', body: 'Hangi fatura kapandı.' },
      { title: 'Şantiye', body: 'İş bakiyesi güncellenir.' },
    ],
    connected: ['faturalar', 'kasa', 'cekler', 'santiye-bakiyesi'],
  },
  cekler: {
    headline: 'Alınan ve verilen çek, vadesiyle.',
    lead: 'İskele tahsilatı çoğu zaman vade çekidir. Portföy, müşteri ve vade aynı tabloda durur; sürpriz vade azalır.',
    sections: [
      {
        title: 'Vade takibi',
        body: 'Hangi çek ne zaman tahsil, nakit akışına düşer. Verilen çek tedarikçi ödemesini, alınan çek kira tahsilatını taşır.',
      },
      {
        title: 'Portföy tek yerde',
        body: 'Alınan ve verilen çek listesi cariden ve vadeden süzülür. Ayrı çek defteri tutulmaz.',
      },
    ],
    extras: [
      { title: 'Portföy', body: 'Alınan / verilen liste.' },
      { title: 'Nakit akışı', body: 'Yaklaşan vade görünür.' },
    ],
    connected: ['odemeler', 'nakit-akisi', 'musteriler'],
  },
  kasa: {
    headline: 'Nakit, şantiye tahsilatından kopmasın.',
    lead: 'Kasa giriş-çıkışı kira tahsilatı, yakıt ve saha masrafıyla bağlanır. Gün sonu ayrı deftere yazılmaz.',
    sections: [
      {
        title: 'Günlük bakiye',
        body: 'Kasa hareketi kiralama ve satış tahsilatı ile giderle aynı dilde durur. “Kasada ne var” sorusu kayıttan cevaplanır.',
      },
      {
        title: 'Saha masrafı çıkışıdır',
        body: 'Yakıt ve yevmiye dışı masraf kasa çıkışı ve gerekirse şantiye gideridir. Kopuk fiş yığını oluşmaz.',
      },
    ],
    extras: [
      { title: 'Gider çıkışı', body: 'Yakıt ve saha masrafı.' },
      { title: 'Tahsilat girişi', body: 'Nakit kira ve satış.' },
    ],
    connected: ['odemeler', 'giderler', 'nakit-akisi'],
  },
  'nakit-akisi': {
    headline: 'Çek vadesi ve kira tahsilatı tek bakışta.',
    lead: 'Alınacak kira, çek vadesi ve tedarikçi ödemesi birleşir. Yoğun kurulum haftasında nakit sıkışıklığı sürprize kalmaz.',
    sections: [
      {
        title: 'Giriş ve çıkış',
        body: 'Dönem özeti çek ve faturadan üretilir. Ayrı nakit Excel’i tutulmaz; kiralama ofisi vadeleri tek ekranda görür.',
      },
      {
        title: 'Vade planı',
        body: 'Haftalık ve aylık kesitte hangi gün tahsil, hangi gün ödeme belli olur. Alış ve saha gideri çıkışa yazılır.',
      },
    ],
    extras: [
      { title: 'Vade planı', body: 'Haftalık / aylık kesit.' },
      { title: 'Çek ve fatura', body: 'Aynı akışta durur.' },
    ],
    connected: ['cekler', 'faturalar', 'kasa'],
  },
  giderler: {
    headline: 'Şantiye yakıtı ayrı, ofis kirası ayrı.',
    lead: 'Sevkiyat yakıtı, saha masrafı ve genel gider ayrı yazılır. Cephe işinin kârı tahmine kalmaz.',
    sections: [
      {
        title: 'İşe dağıtın',
        body: 'Şantiyeye yazılan gider o işin bakiyesinde görünür. Ofis kirası genel giderde kalır; ay sonu karışmaz.',
      },
      {
        title: 'Kasa ile bağ',
        body: 'Gider fişi kasa çıkışına bağlanır. “Fiş birikti, sonra bakarız” kaydı iş kârlılığını bozar; burada satır satır durur.',
      },
    ],
    extras: [
      { title: 'Kategori', body: 'Yakıt, saha, kira.' },
      { title: 'Şantiye', body: 'İşe yazılan masraf bakiyede.' },
    ],
    connected: ['kasa', 'santiye-bakiyesi', 'santiyeler'],
  },
  'santiye-bakiyesi': {
    headline: 'Bu cephe kazandırdı mı.',
    lead: 'Kiralama ve satış geliri, fatura, tahsilat ve şantiyeye yazılan gider tek kartta toplanır. Söküm bitmeden açık bakiye görünür.',
    sections: [
      {
        title: 'Açık bakiye',
        body: 'Kesilen kira, alınan tahsilat ve işe yazılan yakıt-işçilik masrafı bir aradadır. Ay sonu “hangi iş kârlı” aranmaz.',
      },
      {
        title: 'Saha bitmeden para görünür',
        body: 'Kurulum sürerken tahsilat gecikmesi kartta durur. Uzatılan kiralama günü gelire, eksik iade gidere yansır.',
      },
    ],
    extras: [
      { title: 'Gelir / tahsilat', body: 'Kesilen ve alınan.' },
      { title: 'Gider yansıması', body: 'İşe yazılan masraf.' },
      { title: 'Açık tutar', body: 'Kalan alacak.' },
    ],
    connected: ['santiyeler', 'faturalar', 'giderler', 'odemeler'],
  },
  calisanlar: {
    headline: 'Montaj, söküm ve şoför — tek kart.',
    lead: 'Saha ekibi puantaj, izin ve maaşa bağlanır. Üye olmayan montajcıya giden teslim veya izin linki bu kayıttan çıkar.',
    sections: [
      {
        title: 'Kadro ve görev',
        body: 'Montaj, söküm, depo ve şoför ayrı görevdir. İletişim ve yevmiye bu karttan yürür; kâğıt liste tutulmaz.',
      },
      {
        title: 'Saha linki çalışan kaydından',
        body: 'Teslim ve izin için gönderilen link uygulamaya üye olmayan ekibi de işin içine alır. Ofis kullanıcısı çoğalmaz.',
      },
    ],
    extras: [
      { title: 'Görev', body: 'Saha, depo, ofis.' },
      { title: 'Link', body: 'Teslim ve izin sahaya gider.' },
    ],
    connected: ['puantaj', 'izinler', 'maas', 'saha'],
  },
  puantaj: {
    headline: 'Kim, hangi şantiye, kaç gün.',
    lead: 'Yevmiye ofise kâğıttan sonradan yazılmaz. Puantaj şantiye ve güne işlenir, dönem kilitlenince maaşa akar.',
    sections: [
      {
        title: 'Günlük kayıt',
        body: 'Montaj veya söküm günü ilgili şantiyeye yazılır. Hangi cephenin işçilik maliyeti olduğu görünür; kâğıt puantaj kaybolmaz.',
      },
      {
        title: 'Dönem kilit, maaşa aktarım',
        body: 'Kesinleşen günler maaş dönemine dökülür. Sonradan silinen yevmiye tartışması azalır.',
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
    lead: 'Acil cephe kurulumu veya hafta sonu söküm mesai olarak işlenir. Onaysız “söylendi” kalemi maaşa girmez.',
    sections: [
      {
        title: 'Onaylı mesai',
        body: 'Gece ve tatil çalışması puantaj ve dönem dökümüne yansır. Şantiye işçilik maliyeti bu kalemi de taşır.',
      },
      {
        title: 'Maaş kalemi',
        body: 'Onaylanan mesai maaş döneminde ayrı satırdır. Ay sonu sürprizi azalır.',
      },
    ],
    extras: [
      { title: 'Onay', body: 'Ofis onaylamadan maaşa girmez.' },
      { title: 'Puantaj bağ', body: 'Gün ve şantiye ile durur.' },
    ],
    connected: ['puantaj', 'maas'],
  },
  izinler: {
    headline: 'Sahadan talep, ofisten onay.',
    lead: 'Montajcıya gönderilen linkle izin istenir. Onaylanmayan gün puantaja yazılmaz; yevmiye boş güne işlemez.',
    sections: [
      {
        title: 'Saha linki',
        body: 'Uygulamaya üye olmayan montajcı da izin ister. Ofis onaylar veya reddeder; planlama o günü boş görür.',
      },
      {
        title: 'Puantaj etkisi',
        body: 'Onaysız izin yevmiyeye girmez. Onaylı izin şantiye gününden düşer.',
      },
    ],
    extras: [
      { title: 'Puantaj etkisi', body: 'Boş gün yevmiyeye girmez.' },
      { title: 'Onay akışı', body: 'Ofis karar verir.' },
    ],
    connected: ['calisanlar', 'saha', 'puantaj'],
  },
  maas: {
    headline: 'Dönem kapat, yevmiyeyi öde.',
    lead: 'Kilitlenen puantaj ve onaylı mesai maaş dönemine dökülür. Çalışan kendi dönemini görür; ay sonu “kaç gün sahadaydı” tartışması azalır.',
    sections: [
      {
        title: 'Maaşım ekranı',
        body: 'Dönem kapanınca tutar çalışan kartından izlenir. Montaj ve söküm günleri dökümde durur.',
      },
      {
        title: 'Aktarım',
        body: 'Puantaj ve mesai kalemleri dönem satırına akar. Elle yeniden hesaplanan bordro azalır.',
      },
    ],
    extras: [
      { title: 'Aktarım', body: 'Puantaj → maaş kalemi.' },
      { title: 'Dönem kilit', body: 'Kesinleşen tutar.' },
    ],
    connected: ['puantaj', 'mesailer', 'calisanlar'],
  },
  pano: {
    headline: 'Bugün kaç teklif, kaç açık şantiye.',
    lead: 'Bekleyen keşifler, taslak teklifler ve sahadaki işler özetlenir. Günün sevkiyatına kısayoldan inilir.',
    sections: [
      {
        title: 'Günlük özet',
        body: 'Yönetim güne pano ile başlar. Açık kiralama işi, onay bekleyen teklif ve sevkiyat sayısı tek bakıştadır.',
      },
      {
        title: 'Yeni firma yönlendirmesi',
        body: 'İlk müşteri, fiyatlı malzeme kataloğu ve ilk cephe teklifi kurulum adımı olarak durur. Boş hesapta kaybolunmaz.',
      },
    ],
    extras: [
      { title: 'Kurulum', body: 'Müşteri, fiyatlı malzeme, ilk teklif.' },
      { title: 'Kısayol', body: 'Teklif, depo, saha.' },
    ],
    connected: ['talepler', 'teklifler', 'santiyeler', 'raporlar'],
  },
  raporlar: {
    headline: 'Saha stoku, kira faturası, iş özeti.',
    lead: 'Yetkisi olan depoda kalan malzemeye, kesilen kira faturalarına ve açık şantiyelere bakar. Ay sonu kapanışı dağınık Excel’den toplanmaz.',
    sections: [
      {
        title: 'Yetkiye göre kesit',
        body: 'Depocu maaşı görmez, muhasebe saha fişini yetkisi kadar görür. Her kiralama firması yalnız kendi işine bakar.',
      },
      {
        title: 'Operasyon kesiti',
        body: 'Açık şantiye, sahadaki stok ve fatura özeti tek rapordadır. “Hangi işte malzeme kaldı” sorusu kayıttan cevaplanır.',
      },
    ],
    extras: [
      { title: 'Stok', body: 'Depo ve saha bakiyesi.' },
      { title: 'Fatura', body: 'Kesilen kira ve satış.' },
    ],
    connected: ['pano', 'depo', 'faturalar'],
  },
  kullanicilar: {
    headline: 'Depocu teklifi, muhasebe saha fişini yetkisi kadar görsün.',
    lead: 'Her kiralama ve satış firması kendi kaydını görür. Teklif yazma, depo okuma ve maaş görme ayrı verilir.',
    sections: [
      {
        title: 'Ekran ekran yetki',
        body: 'Teklifçi şantiye bakiyesini, depocu maaşı, muhasebe kurulum fişini ancak verilen kadar görür. Başka firmanın şantiyesi açılmaz.',
      },
      {
        title: 'Davet ve iz',
        body: 'Ofis kullanıcısı e-posta ile eklenir. Kim teklifi değiştirdi, kim fişi kesti aktivitede durur.',
      },
    ],
    extras: [
      { title: 'Davet', body: 'Kullanıcı e-posta ile eklenir.' },
      { title: 'Aktivite', body: 'Kim neyi değiştirdi.' },
      { title: 'Firma kaydı', body: 'Başka firmanın verisi görünmez.' },
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
