<script setup lang="ts">
import type { ProductApp } from '~/data/apps'

defineProps<{
  app: ProductApp
  compact?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="`/uygulamalar/${app.slug}`"
    class="group flex gap-3 rounded-xl border bg-white p-3 transition-colors hover:border-gold/50 hover:bg-muted/40"
    :class="compact ? 'items-center' : 'items-start'"
  >
    <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
      <AppGlyph :name="app.icon" class="size-5" />
    </span>
    <span class="min-w-0">
      <span class="block text-sm font-medium text-foreground group-hover:text-navy">{{ app.name }}</span>
      <span v-if="!compact" class="mt-0.5 block text-xs text-muted-foreground">{{ app.tagline }}</span>
    </span>
  </NuxtLink>
</template>
