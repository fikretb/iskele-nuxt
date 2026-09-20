<script setup lang="ts">
import { appCategories, productApps, type AppCategoryId } from '~/data/apps'

const active = ref<AppCategoryId>(appCategories[0]!.id)
const visible = computed(() =>
  productApps.filter(app => app.category === active.value),
)
</script>

<template>
  <section class="bg-navy/[0.03] py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="flex flex-col gap-4 border-b border-navy/10 pb-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Uygulama seti</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Bağlı uygulamalar
          </h2>
          <p class="mt-2 text-sm text-muted-foreground">
            Tek ürün, kategorilere ayrılmış ekranlar. Yetkisi olan kullanıcı ilgili ekranı açar.
          </p>
        </div>
        <Button variant="link" class="h-auto px-0 text-sm text-navy" as-child>
          <NuxtLink to="/uygulamalar">Tüm uygulamalar →</NuxtLink>
        </Button>
      </div>

      <div class="mt-6 flex gap-0 overflow-x-auto border-b border-navy/10">
        <button
          v-for="category in appCategories"
          :key="category.id"
          type="button"
          class="shrink-0 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors"
          :class="active === category.id
            ? 'border-gold text-navy'
            : 'border-transparent text-muted-foreground hover:text-navy'"
          @click="active = category.id"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <SiteAppTile v-for="app in visible" :key="app.slug" :app="app" />
      </div>
    </div>
  </section>
</template>
