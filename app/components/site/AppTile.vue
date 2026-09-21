<script setup lang="ts">
import type { ProductApp } from '~/data/apps'
import { appPath } from '~/constants/slugs'

defineProps<{
  app: ProductApp
  compact?: boolean
}>()

const localePath = useI18nPath()
</script>

<template>
  <NuxtLink
    :to="localePath(appPath(app.slug))"
    class="group flex gap-3 rounded-md border border-navy/15 bg-white px-3.5 py-3 shadow-[0_1px_0_rgb(11_32_81/0.04)] transition-colors hover:border-navy/30 hover:bg-navy/[0.02]"
    :class="compact ? 'items-center' : 'items-start'"
  >
    <span class="flex size-9 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
      <SiteAppGlyph :name="app.icon" class="size-4" />
    </span>
    <span class="min-w-0">
      <span class="block text-sm font-semibold text-navy">{{ app.name }}</span>
      <span v-if="!compact" class="mt-0.5 block text-xs leading-snug text-muted-foreground line-clamp-2">{{ app.tagline }}</span>
    </span>
  </NuxtLink>
</template>
