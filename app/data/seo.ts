export const SITE_URL = 'https://iskelepro.com'

export const pageSeo = {
  home: {
    tr: {
      title: 'İskele Pro — Tekliften sahaya, tek kayıt',
      description: 'İskele kiralama ve satış: teklif, depo, saha, fatura ve puantaj aynı platformda. Ücretsiz demo.',
    },
    en: {
      title: 'İskele Pro — From quote to the field, one record',
      description: 'Scaffolding rental and sales: quotes, warehouse, field, invoices and timesheets on one platform. Free demo.',
    },
  },
  apps: {
    tr: {
      title: 'Tüm uygulamalar · İskele Pro',
      description: 'İskele kiralama ve satış için teklif, saha, depo, finans ve insan kaynakları uygulamaları.',
    },
    en: {
      title: 'All apps · İskele Pro',
      description: 'Quote, field, warehouse, finance and HR apps for scaffolding rental and sales companies.',
    },
  },
  pricing: {
    tr: {
      title: 'Fiyatlandırma · İskele Pro',
      description: 'İskele kiralama ve satış için Başlangıç, Operasyon ve Kurumsal. Yıllıkta 2 ay hediye; kullanıcı başı aylık fiyat.',
    },
    en: {
      title: 'Pricing · İskele Pro',
      description: 'Starter, Operations and Enterprise for scaffolding rental and sales. Two months free on yearly billing; per-user monthly price.',
    },
  },
  contact: {
    tr: {
      title: 'İletişim · İskele Pro',
      description: 'İskele Pro demo, fiyat ve kurulum için iletişime geçin. Kiralama ve satış süreçleri için kredi kartı gerekmez.',
    },
    en: {
      title: 'Contact · İskele Pro',
      description: 'Contact İskele Pro for a demo, pricing or setup. No credit card required for rental and sales workflows.',
    },
  },
  help: {
    tr: {
      title: 'Yardım · İskele Pro',
      description: 'Sık sorulan sorulara hızlı yanıtlar. Kuruma özel kurulum ve detaylı tanıtım için ücretsiz demo görüşmesi.',
    },
    en: {
      title: 'Help · İskele Pro',
      description: 'Quick answers to common questions. Book a free demo for setup and a walkthrough of your company workflow.',
    },
  },
  calculator: {
    tr: {
      title: 'İskele Hesapla · İskele Pro',
      description: 'Cephe genişliği ve yüksekliğinden yaklaşık malzeme listesi çıkarın. Aynı ölçülerle teklif alın.',
    },
    en: {
      title: 'Scaffold calculator · İskele Pro',
      description: 'Estimate a material list from facade width and height, then request a quote with the same measurements.',
    },
  },
} as const

export type PageSeoKey = keyof typeof pageSeo

export function absoluteUrl(path: string) {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path}`
}
