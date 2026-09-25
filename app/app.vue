<script setup lang="ts">
import { legalCompany } from '~/data/legal'

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
      legalName: legalCompany.name,
      url: 'https://iskelepro.com',
      logo: 'https://iskelepro.com/icon-512.png',
      telephone: '+905323919755',
      email: legalCompany.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: legalCompany.streetAddress,
        addressLocality: legalCompany.addressLocality,
        addressRegion: legalCompany.addressRegion,
        addressCountry: legalCompany.addressCountry,
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
