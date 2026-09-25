<script setup lang="ts">
import { useLocalizedPageSeo } from '~/composables/useLocalizedPageSeo'

const { locale } = useI18n()
const seo = useLocalizedPageSeo('home')

useJsonLd('ld-app', () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'İskele Pro',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://iskelepro.com',
  description: seo.value.description,
  inLanguage: locale.value === 'en' ? 'en-US' : 'tr-TR',
  publisher: { '@type': 'Organization', name: 'İskele Pro', legalName: 'Hitech Mühendislik Ltd. Şti.' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: locale.value === 'en' ? 'Starter plan' : 'Başlangıç paketi',
  },
}))
</script>

<template>
  <div>
    <SiteLandingHero />
    <SiteScene motion="wipe">
      <SiteLandingTrust />
    </SiteScene>
    <SiteLandingWorkflow />
    <SiteScene motion="scale">
      <SiteLandingModules />
    </SiteScene>
    <SiteScene motion="split">
      <SiteLandingCompare />
    </SiteScene>
    <SiteScene motion="blur">
      <SiteLandingPricing />
    </SiteScene>
    <SiteScene motion="slide">
      <SiteLandingDemoForm />
    </SiteScene>
  </div>
</template>
