<script setup lang="ts">
const description = 'İskele kiralama ve satış: teklif, depo, saha, fatura ve puantaj aynı platformda. Ücretsiz demo.'

usePageSeo({
  title: 'İskele Pro — Tekliften sahaya, tek kayıt',
  description,
})

useJsonLd('ld-app', {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'İskele Pro',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://iskelepro.com',
  description,
  inLanguage: 'tr-TR',
})
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
