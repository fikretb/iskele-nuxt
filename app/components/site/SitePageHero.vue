<script setup lang="ts">
import type { SiteImage } from '~/data/assets'
import { SITE_IMAGES } from '~/data/assets'

const props = withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  image?: SiteImage
  overlay?: 'left' | 'full'
  narrow?: boolean
  band?: boolean
}>(), {
  overlay: 'left',
  narrow: false,
  band: false,
})

const heroImage = computed(() => props.image ?? SITE_IMAGES.heroInner)
</script>

<template>
  <section class="relative overflow-hidden bg-navy-deep text-white">
    <img
      :src="heroImage.src"
      :alt="heroImage.alt"
      :width="heroImage.width"
      :height="heroImage.height"
      decoding="async"
      fetchpriority="low"
      class="pointer-events-none absolute inset-0 size-full object-cover"
      :class="overlay === 'left' ? 'object-right' : 'object-center'"
    >
    <div
      class="pointer-events-none absolute inset-0"
      :class="overlay === 'full'
        ? 'bg-navy-deep/70'
        : narrow
          ? 'bg-gradient-to-r from-navy-deep from-[6%] via-navy-deep/92 via-[28%] to-navy-deep/10'
          : 'bg-gradient-to-r from-navy-deep from-[12%] via-navy-deep/88 to-navy-deep/25'"
    />
    <div
      class="relative mx-auto flex w-full max-w-6xl items-center px-6"
      :class="band
        ? 'min-h-72 md:h-[19.5rem]'
        : narrow ? 'py-10 md:py-12' : 'py-16 md:py-20'"
    >
      <div :class="narrow && !band ? 'max-w-md' : band ? 'max-w-2xl' : ''">
        <p v-if="eyebrow" class="mb-3 text-sm font-medium text-gold">{{ eyebrow }}</p>
        <h1
          class="font-semibold tracking-tight"
          :class="band || narrow ? 'text-3xl md:text-4xl' : 'max-w-3xl text-3xl md:text-5xl'"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="mt-4 text-white/75"
          :class="band || narrow ? 'text-sm md:text-base' : 'max-w-2xl text-base md:text-lg'"
        >
          {{ description }}
        </p>
        <slot />
      </div>
    </div>
  </section>
</template>
