import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'İskele Pro',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' },
      ],
      meta: [
        { name: 'description', content: 'İskele firmaları için teklif, saha, depo, muhasebe ve insan kaynakları platformu.' },
        { property: 'og:title', content: 'İskele Pro' },
        { property: 'og:description', content: 'Tekliften sahaya, depodan muhasebeye; kiralama operasyonunu tek yerden yönetin.' },
        { property: 'og:image', content: '/og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/og.jpg' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      appUrl: 'https://app.iskelepro.com',
      whatsappUrl: 'https://wa.me/905000000000',
      whatsappMessage: 'Merhaba, İskele Pro demo hakkında bilgi almak istiyorum.',
    },
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['shadcn-nuxt', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
  i18n: {
    defaultLocale: 'tr',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    baseUrl: 'https://iskelepro.com',
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      uygulamalar: {
        tr: '/uygulamalar',
        en: '/apps',
      },
      'uygulamalar-slug': {
        tr: '/uygulamalar/[slug]',
        en: '/apps/[slug]',
      },
      sektor: {
        tr: '/sektor',
        en: '/industries',
      },
      fiyatlandirma: {
        tr: '/fiyatlandirma',
        en: '/pricing',
      },
      iletisim: {
        tr: '/iletisim',
        en: '/contact',
      },
      yardim: {
        tr: '/yardim',
        en: '/help',
      },
      urunler: {
        tr: '/urunler',
        en: '/products',
      },
      cozumler: {
        tr: '/cozumler',
        en: '/solutions',
      },
    },
    locales: [
      {
        code: 'tr',
        language: 'tr-TR',
        name: 'Türkçe',
        file: 'tr/ui.json',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en/ui.json',
      },
    ],
  },
  routeRules: {
    '/en/uygulamalar': { redirect: { to: '/en/apps', statusCode: 301 } },
    '/en/uygulamalar/**': { redirect: { to: '/en/apps/**', statusCode: 301 } },
    '/en/sektor': { redirect: { to: '/en/industries', statusCode: 301 } },
    '/en/fiyatlandirma': { redirect: { to: '/en/pricing', statusCode: 301 } },
    '/en/iletisim': { redirect: { to: '/en/contact', statusCode: 301 } },
    '/en/yardim': { redirect: { to: '/en/help', statusCode: 301 } },
  },
})
