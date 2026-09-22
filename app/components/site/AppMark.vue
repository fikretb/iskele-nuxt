<script setup lang="ts">
import { iconForApp } from '~/data/assets'

const props = defineProps<{
  slug: string
  icon: string
  name: string
  size?: 'sm' | 'md'
}>()

const src = computed(() => iconForApp(props.slug))
const box = computed(() => props.size === 'sm' ? 'size-10' : 'size-12')
</script>

<template>
  <span :class="['flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white', box]">
    <img
      v-if="src"
      :src="src"
      :alt="name"
      width="80"
      height="80"
      class="size-full object-contain"
      loading="lazy"
    >
    <span v-else class="flex size-full items-center justify-center rounded-xl bg-navy text-gold">
      <SiteAppGlyph :name="icon" :class="size === 'sm' ? 'size-4' : 'size-5'" />
    </span>
  </span>
</template>
