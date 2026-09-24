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
      url: 'https://iskelepro.com',
      logo: 'https://iskelepro.com/icon-512.png',
      telephone: '+905323919755',
      email: 'info@iskelepro.com',
    },
    {
      '@type': 'WebSite',
      name: 'İskele Pro',
      url: 'https://iskelepro.com',
      inLanguage: ['tr-TR', 'en-US'],
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
