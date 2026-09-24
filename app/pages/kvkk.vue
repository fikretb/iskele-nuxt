<script setup lang="ts">
import { legalDoc } from '~/data/legal'

const { locale } = useI18n()
const doc = computed(() => legalDoc('kvkk', locale.value))

usePageSeo({
  title: computed(() => doc.value.seoTitle),
  description: computed(() => doc.value.seoDescription),
})
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
