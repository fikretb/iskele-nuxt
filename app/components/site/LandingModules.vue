<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'
import { appCategories, productApps, type AppCategoryId } from '~/data/apps'

const localePath = useI18nPath()
const active = ref<AppCategoryId>(appCategories[0]!.id)
const visible = computed(() =>
  productApps.filter(app => app.category === active.value),
)
</script>

<template>
  <section class="bg-navy/[0.03] py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <SiteReveal variant="up" class="flex flex-col gap-4 border-b border-navy/10 pb-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Dijital platform</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Tüm iş süreçleriniz, tek platformda.
          </h2>
          <p class="mt-2 text-sm text-muted-foreground">
            Operasyonlarınıza özel ekranlar, tek bir sistemde. Her kullanıcı, yetkisi dahilindeki modüllere kolayca erişir.
          </p>
        </div>
        <Button variant="link" class="h-auto px-0 text-sm text-navy" as-child>
          <NuxtLink :to="localePath('/uygulamalar')">{{ $t('nav.allApps') }} →</NuxtLink>
        </Button>
      </SiteReveal>

      <SiteReveal variant="up" class="mt-6">
        <SiteFigure
          :image="SITE_IMAGES.connectedApps"
          class="rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgb(11_32_81/0.45)] ring-1 ring-navy/8"
        />
      </SiteReveal>

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

      <TransitionGroup
        name="tile"
        tag="div"
        class="relative mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
      >
        <SiteAppTile v-for="app in visible" :key="app.slug" :app="app" />
      </TransitionGroup>
    </div>
  </section>
</template>
