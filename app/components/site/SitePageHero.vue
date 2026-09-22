<script setup lang="ts">
import type { SiteImage } from '~/data/assets'
import { SITE_IMAGES } from '~/data/assets'

const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  image?: SiteImage
  overlay?: 'left' | 'full'
}>(), {
  overlay: 'left',
})

const heroImage = computed(() => props.image ?? SITE_IMAGES.heroInner)
</script>

<template>
  <section class="relative overflow-hidden bg-navy-deep text-white">
    <img
      :src="heroImage.src"
      alt=""
      :width="heroImage.width"
      :height="heroImage.height"
      class="pointer-events-none absolute inset-0 size-full object-cover"
      :class="overlay === 'left' ? 'object-right' : 'object-center'"
    >
    <div
      class="pointer-events-none absolute inset-0"
      :class="overlay === 'left'
        ? 'bg-gradient-to-r from-navy-deep from-[12%] via-navy-deep/88 to-navy-deep/25'
        : 'bg-navy-deep/70'"
    />
    <div class="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p v-if="eyebrow" class="mb-3 text-sm font-medium text-gold">{{ eyebrow }}</p>
      <h1 class="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
        {{ description }}
      </p>
      <slot />
    </div>
  </section>
</template>
