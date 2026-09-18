import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'İskele Pro',
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'tr',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'description', content: 'İskele firmaları için teklif, saha, depo, muhasebe ve insan kaynakları platformu.' },
        { property: 'og:title', content: 'İskele Pro' },
        { property: 'og:description', content: 'Tekliften sahaya, depodan muhasebeye; kiralama operasyonunu tek yerden yönetin.' },
        { property: 'og:image', content: '/og.png' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      appUrl: 'https://app.iskelepro.com',
    },
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['shadcn-nuxt', '@nuxtjs/color-mode'],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
})
