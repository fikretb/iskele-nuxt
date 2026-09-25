<script setup lang="ts">
import { legalDoc } from '~/data/legal'
import { useBreadcrumbJsonLd } from '~/composables/useBreadcrumbJsonLd'

const { locale } = useI18n()
const doc = computed(() => legalDoc('kvkk', locale.value))

usePageSeo({
  title: computed(() => doc.value.seoTitle),
  description: computed(() => doc.value.seoDescription),
})
useBreadcrumbJsonLd(() => [
  { name: locale.value === 'en' ? 'Home' : 'Ana sayfa', to: '/' },
  { name: 'KVKK', to: '/kvkk' },
])
</script>

<template>
  <div>
    <SitePageHero
      band
      :eyebrow="doc.eyebrow"
      :title="doc.title"
      :description="doc.description"
    />
    <SiteLegalArticle :doc="doc" />
  </div>
</template>
