<script setup lang="ts">
import type { SiteImage } from '~/data/assets'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  image: SiteImage
  priority?: boolean
  rounded?: boolean
  cover?: boolean
  class?: string
}>(), {
  rounded: true,
  cover: false,
})
</script>

<template>
  <figure :class="cn('overflow-hidden', rounded && 'rounded-lg', props.class)">
    <img
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
      :class="cover ? 'size-full object-cover' : 'h-auto w-full object-cover'"
    >
  </figure>
</template>
