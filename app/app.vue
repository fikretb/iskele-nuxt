<script setup lang="ts">
const i18nHead = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
  },
  link: [...(i18nHead.value.link ?? [])],
  meta: [...(i18nHead.value.meta ?? [])],
}))

useJsonLd('ld-org', {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'İskele Pro',
      legalName: 'Hitech Mühendislik Ltd. Şti.',
      url: 'https://iskelepro.com',
      logo: 'https://iskelepro.com/icon-512.png',
      telephone: '+905323919755',
      email: 'info@iskelepro.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kayışdağı Mahallesi, Hürriyet Sokak No: 1 D: 3',
        addressLocality: 'Ataşehir',
        addressRegion: 'İstanbul',
        addressCountry: 'TR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+905323919755',
        email: 'info@iskelepro.com',
        contactType: 'sales',
        availableLanguage: ['Turkish', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      name: 'İskele Pro',
      url: 'https://iskelepro.com',
      inLanguage: ['tr-TR', 'en-US'],
      publisher: { '@type': 'Organization', name: 'İskele Pro' },
    },
  ],
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
