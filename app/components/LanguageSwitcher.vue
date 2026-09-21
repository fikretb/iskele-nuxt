<script setup lang="ts">
const { locale, locales } = useI18n()
const route = useRoute()
const localePath = useI18nPath()

function routeName() {
  return String(route.name ?? 'index').replace(/___[a-z0-9-]+$/i, '')
}

const options = computed(() =>
  (locales.value as Array<{ code: 'tr' | 'en', name: string }>).map(item => ({
    code: item.code,
    label: item.code.toUpperCase(),
    to: localePath({
      name: routeName(),
      params: route.params,
      query: route.query,
    }, item.code),
    active: locale.value === item.code,
  })),
)
</script>

<template>
  <div
    class="inline-flex items-center rounded-md border border-border bg-muted/60 p-0.5"
    :aria-label="$t('language.switchTo')"
  >
    <NuxtLink
      v-for="item in options"
      :key="item.code"
      :to="item.to"
      class="rounded px-2.5 py-1 text-xs font-bold tracking-wide transition-colors"
      :class="item.active
        ? 'bg-background text-foreground shadow-sm'
        : 'text-muted-foreground hover:text-foreground'"
    >
      {{ item.label }}
    </NuxtLink>
  </div>
</template>
