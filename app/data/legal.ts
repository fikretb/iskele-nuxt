export const legalCompany = {
  name: 'Hitech Mühendislik Ltd. Şti.',
  product: 'İskele Pro',
  address: 'Kayışdağı Mahallesi, Hürriyet Sokak No: 1 D: 3, Ataşehir / İstanbul',
  email: 'info@iskelepro.com',
  phoneDisplay: '+90 532 391 97 55',
  updatedTr: '24 Eylül 2026',
  updatedEn: '24 September 2026',
} as const

export type LegalSection = {
  heading: string
  body: string[]
}

export type LegalDoc = {
  eyebrow: string
  title: string
  description: string
  seoTitle: string
  seoDescription: string
  sections: LegalSection[]
}

const companyLine = `${legalCompany.name} (“Şirket”), ${legalCompany.address} adresinde yerleşiktir. İskele Pro markası Şirket tarafından işletilir.`

export const legalDocsTr: Record<'kvkk' | 'gizlilik' | 'kosullar', LegalDoc> = {
  kvkk: {
    eyebrow: 'KVKK',
    title: 'Aydınlatma metni',
    description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında demo ve iletişim talepleriniz hakkında bilgilendirme.',
    seoTitle: 'KVKK Aydınlatma Metni · İskele Pro',
    seoDescription: 'Hitech Mühendislik Ltd. Şti. İskele Pro KVKK aydınlatma metni. Demo formu ve iletişim verilerinin işlenmesi.',
    sections: [
      {
        heading: '1. Veri sorumlusu',
        body: [
          companyLine,
          `Veri sorumlusu ${legalCompany.name}’dir. Başvuru ve talepleriniz için ${legalCompany.email} ve ${legalCompany.phoneDisplay} üzerinden bize ulaşabilirsiniz.`,
        ],
      },
      {
        heading: '2. İşlenen kişisel veriler',
        body: [
          'İskele Pro web sitesindeki demo ve iletişim formunu doldurduğunuzda şu veriler işlenebilir: ad soyad, e-posta, telefon, firma unvanı, firma ölçeği, tercih edilen paket, dönem bilgisi ve yazdığınız not.',
          'Telefon veya WhatsApp ile yazmanız halinde görüşme içeriğiniz ve iletişim numaranız da işlenebilir.',
        ],
      },
      {
        heading: '3. İşleme amaçları',
        body: [
          'Verileriniz; demo talebinizi almak, sizinle iletişime geçmek, ürün tanıtımı ve kurulum görüşmesi planlamak, teklif hazırlamak ve talebinizi kayıt altında tutmak için işlenir.',
          'Ayrıca yasal yükümlülüklerin yerine getirilmesi ve iletişimin güvenliğinin sağlanması amacıyla sınırlı olarak kullanılabilir.',
        ],
      },
      {
        heading: '4. Hukuki sebep',
        body: [
          'İşleme, KVKK madde 5/2 kapsamında bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, Şirketin meşru menfaati ve açık rızanızın bulunduğu hallerde rızaya dayanır.',
        ],
      },
      {
        heading: '5. Aktarım',
        body: [
          'Verileriniz, e-posta iletimi ve barındırma gibi hizmetleri sağlayan iş ortaklarına, yalnızca bu amaçlarla ve gerekli ölçüde aktarılabilir. Yasal zorunluluk halinde yetkili kamu kurumlarına bildirilebilir.',
          'Verileriniz pazarlama listelerine satılmaz.',
        ],
      },
      {
        heading: '6. Saklama süresi',
        body: [
          'Demo ve iletişim kayıtları, talebinizin sonuçlanması ve olası yasal süreler için gerekli olan makul süre boyunca saklanır; süre sonunda silinir, yok edilir veya anonim hale getirilir.',
        ],
      },
      {
        heading: '7. Haklarınız',
        body: [
          'KVKK madde 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, otomatik sistemler ile analiz edilmesine itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz.',
          `Bu haklarınız için ${legalCompany.email} adresine yazmanız yeterlidir. Başvurularınız en geç 30 gün içinde yanıtlanır.`,
        ],
      },
    ],
  },
  gizlilik: {
    eyebrow: 'Gizlilik',
    title: 'Gizlilik politikası',
    description: 'İskele Pro sitesini ve demo formunu kullanırken verilerinizin nasıl korunduğu.',
    seoTitle: 'Gizlilik Politikası · İskele Pro',
    seoDescription: 'İskele Pro gizlilik politikası. Hitech Mühendislik Ltd. Şti. kişisel veri ve site kullanımı.',
    sections: [
      {
        heading: '1. Kapsam',
        body: [
          `Bu politika, ${legalCompany.product} web sitesi (iskelepro.com) ve sitedeki demo / iletişim formları için geçerlidir. Yönetim paneli hesabınıza ait ayrı sözleşme ve güvenlik kuralları, hesap açılışında ayrıca belirtilir.`,
        ],
      },
      {
        heading: '2. Topladığımız bilgiler',
        body: [
          'Form üzerinden verdiğiniz kimlik ve iletişim bilgileri, firma ve paket tercihiniz ile notunuz kaydedilir.',
          'Siteyi ziyaret ettiğinizde bağlantının çalışması için teknik kayıtlar (örneğin tarayıcı türü, tarih ve IP) sunucu loglarında kısa süre tutulabilir. Reklam veya analitik çerezi kullanmıyoruz.',
        ],
      },
      {
        heading: '3. Kullanım',
        body: [
          'Bilgiler yalnızca talebinize dönüş yapmak, demo ve kurulum görüşmesi planlamak ve hizmeti geliştirmek için kullanılır. Onayınız olmadan ticari ileti gönderilmez.',
        ],
      },
      {
        heading: '4. Güvenlik',
        body: [
          'İletişim kayıtlarına erişim sınırlıdır. Form ilettiğiniz veriler e-posta yoluyla Şirket adresine iletilir. Yönetim panelindeki müşteri kayıtları firmaya özel veri alanında tutulur.',
        ],
      },
      {
        heading: '5. Üçüncü taraflar',
        body: [
          'Site; barındırma, e-posta gönderimi ve WhatsApp yönlendirmesi için üçüncü taraf altyapılar kullanabilir. Bu sağlayıcılar yalnızca ilgili hizmet için gerekli verilere erişir.',
        ],
      },
      {
        heading: '6. Çocuklar',
        body: [
          'İskele Pro ticari kullanıcılara yöneliktir. 18 yaşından küçüklerden bilerek veri toplamayız.',
        ],
      },
      {
        heading: '7. Güncelleme ve iletişim',
        body: [
          `Bu metin gerektiğinde güncellenir. Güncel sürüm sitede yayımlanır. Sorularınız için ${legalCompany.email} veya ${legalCompany.phoneDisplay}.`,
        ],
      },
    ],
  },
  kosullar: {
    eyebrow: 'Sözleşme',
    title: 'Kullanım koşulları',
    description: 'İskele Pro web sitesi, demo talebi ve tanıtım kullanımı için temel kurallar.',
    seoTitle: 'Kullanım Koşulları · İskele Pro',
    seoDescription: 'İskele Pro kullanım koşulları. Hitech Mühendislik Ltd. Şti. site ve demo kuralları.',
    sections: [
      {
        heading: '1. Taraflar ve hizmet',
        body: [
          `${legalCompany.product}, ${legalCompany.name} tarafından sunulan; iskele kiralama ve satış firmalarına yönelik teklif, stok, saha, finans ve insan kaynakları yazılımıdır.`,
          'Bu sitedeki form ücretsiz demo ve görüşme talebi içindir. Kredi kartı istenmez. Abonelik, kurulum kapsamı ve ücretler ayrıca yazılı veya e-posta ile netleşir.',
        ],
      },
      {
        heading: '2. Site kullanımı',
        body: [
          'Siteyi hukuka ve dürüstlük kurallarına uygun kullanmayı kabul edersiniz. Formda gerçeğe aykırı bilgi vermemek, sistemi bozmaya çalışmamak ve başkasının verisini izinsiz girmemek esastır.',
        ],
      },
      {
        heading: '3. Demo hesabı',
        body: [
          'Demo erişimi tanıtım amaçlıdır; üretim verisi veya kesintisiz hizmet taahhüdü içermez. Demo süresi ve açık ekranlar Şirket tarafından belirlenebilir.',
        ],
      },
      {
        heading: '4. Fikri haklar',
        body: [
          'İskele Pro adı, logo, metinler, arayüz ve yazılım Şirkete aittir. İzinsiz kopyalama, tersine mühendislik veya yeniden satış yasaktır.',
        ],
      },
      {
        heading: '5. Sorumluluk',
        body: [
          'Sitedeki fiyat, paket ve açıklamalar genel tanıtımdır; bağlayıcı teklif yerine geçmez. Site kesintisiz veya hatasız çalışacağı garanti edilmez.',
          'Kanunun izin verdiği ölçüde Şirket; dolaylı zarar, kâr kaybı veya veri kaybından sorumlu tutulamaz.',
        ],
      },
      {
        heading: '6. Uygulanacak hukuk',
        body: [
          'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul Anadolu Mahkemeleri ve İcra Daireleri yetkilidir.',
        ],
      },
      {
        heading: '7. İletişim',
        body: [
          `${legalCompany.name}, ${legalCompany.address}. E-posta: ${legalCompany.email}. Telefon: ${legalCompany.phoneDisplay}.`,
        ],
      },
    ],
  },
}

export const legalDocsEn: Record<'kvkk' | 'gizlilik' | 'kosullar', LegalDoc> = {
  kvkk: {
    eyebrow: 'KVKK',
    title: 'Privacy notice',
    description: 'How Hitech Mühendislik Ltd. Şti. processes personal data from İskele Pro demo and contact forms under Turkish KVKK.',
    seoTitle: 'KVKK Privacy Notice · İskele Pro',
    seoDescription: 'İskele Pro KVKK notice by Hitech Mühendislik Ltd. Şti. for demo and contact data.',
    sections: [
      {
        heading: '1. Data controller',
        body: [
          `${legalCompany.name} (“Company”), ${legalCompany.address}, operates the İskele Pro brand and is the data controller.`,
          `Contact: ${legalCompany.email} or ${legalCompany.phoneDisplay}.`,
        ],
      },
      {
        heading: '2. Data we process',
        body: [
          'When you submit the demo or contact form we may process your name, email, phone, company name, company size, selected plan, billing cycle and your note.',
          'If you call or write on WhatsApp we may also process the number and the content of that conversation.',
        ],
      },
      {
        heading: '3. Purposes',
        body: [
          'We use the data to receive your request, contact you, plan a product demo or setup call, prepare a quote and keep a record of the enquiry.',
        ],
      },
      {
        heading: '4. Legal basis',
        body: [
          'Processing is based on steps toward a contract, the Company’s legitimate interest, and your consent where required by KVKK article 5.',
        ],
      },
      {
        heading: '5. Sharing',
        body: [
          'Data may be shared with hosting and email providers only as needed to deliver the service, or with authorities when the law requires it. We do not sell your data.',
        ],
      },
      {
        heading: '6. Retention',
        body: [
          'Demo and contact records are kept for as long as needed to handle your request and meet legal duties, then deleted, destroyed or anonymised.',
        ],
      },
      {
        heading: '7. Your rights',
        body: [
          `Under KVKK article 11 you may ask whether your data is processed, request a copy, correction or deletion, and object to automated analysis. Write to ${legalCompany.email}. We reply within 30 days.`,
        ],
      },
    ],
  },
  gizlilik: {
    eyebrow: 'Privacy',
    title: 'Privacy policy',
    description: 'How İskele Pro protects information you share on this website.',
    seoTitle: 'Privacy Policy · İskele Pro',
    seoDescription: 'İskele Pro privacy policy. Hitech Mühendislik Ltd. Şti.',
    sections: [
      {
        heading: '1. Scope',
        body: [
          'This policy covers iskelepro.com and the demo / contact forms. Admin-panel accounts have separate terms when a workspace is opened.',
        ],
      },
      {
        heading: '2. Information we collect',
        body: [
          'We collect the details you type in the form. Server logs may briefly store technical data needed to run the site. We do not use advertising or analytics cookies.',
        ],
      },
      {
        heading: '3. Use',
        body: [
          'We use the information to reply to you and plan a demo. We do not send marketing mail without your consent.',
        ],
      },
      {
        heading: '4. Security',
        body: [
          'Access to enquiry records is limited. Form submissions are emailed to the Company. Customer records in the product stay in a company-specific data space.',
        ],
      },
      {
        heading: '5. Contact',
        body: [
          `Questions: ${legalCompany.email} or ${legalCompany.phoneDisplay}.`,
        ],
      },
    ],
  },
  kosullar: {
    eyebrow: 'Terms',
    title: 'Terms of use',
    description: 'Rules for using the İskele Pro website and requesting a demo.',
    seoTitle: 'Terms of Use · İskele Pro',
    seoDescription: 'İskele Pro terms of use. Hitech Mühendislik Ltd. Şti.',
    sections: [
      {
        heading: '1. The service',
        body: [
          `İskele Pro is software by ${legalCompany.name} for scaffolding rental and sales firms. The website form is for a free demo request. A credit card is not required. Fees and setup are agreed separately.`,
        ],
      },
      {
        heading: '2. Acceptable use',
        body: [
          'Use the site lawfully. Do not submit false details or attempt to disrupt the service.',
        ],
      },
      {
        heading: '3. Demo',
        body: [
          'Demo access is for evaluation only and is not a production or uptime commitment.',
        ],
      },
      {
        heading: '4. Intellectual property',
        body: [
          'The İskele Pro name, logo, copy and software belong to the Company.',
        ],
      },
      {
        heading: '5. Law',
        body: [
          'These terms are governed by the laws of the Republic of Türkiye. Courts of Istanbul Anadolu have jurisdiction.',
        ],
      },
    ],
  },
}

export function legalDoc(id: keyof typeof legalDocsTr, locale: string): LegalDoc {
  return locale.startsWith('en') ? legalDocsEn[id] : legalDocsTr[id]
}
