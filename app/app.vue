<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale,
  },
})

useSeoMeta({
  ogImage: SITE_IMAGES.og.src,
  twitterCard: 'summary_large_image',
  twitterImage: SITE_IMAGES.og.src,
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
