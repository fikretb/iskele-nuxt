<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'

useSeoMeta({
  title: 'İskele Pro — Tekliften sahaya, tek kayıt ',
  description: 'İskele kiralama: teklif, depo, saha, fatura ve puantaj aynı platformda. Ücretsiz demo.',
  ogImage: SITE_IMAGES.og.src,
  twitterCard: 'summary_large_image',
  twitterImage: SITE_IMAGES.og.src,
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
