<script setup lang="ts">
import { appCategories, appsByCategory, productApps } from '~/data/apps'

useSeoMeta({
  title: 'Tüm uygulamalar · İskele Pro',
  description: 'Tek bir ihtiyaç, tek bir uygulama. Teklif, saha, depo, finans ve insan kaynakları setinin tamamı.',
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="Uygulamalar"
      title="Tek bir ihtiyaç, tek bir uygulama."
      description="Ne karmaşık ne de dağınık. İhtiyacınız olan süreç açılır; kayıtlar birbirine bağlı kalır. Büyüdükçe ilerleyin."
    >
      <p class="mt-4 text-sm text-white/70">{{ productApps.length }} uygulama · tek tenant</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink to="/iletisim">Hemen başlayın — ücretsiz deneyin</NuxtLink>
        </Button>
        <Button variant="outline" class="border-white/30 bg-transparent text-white hover:bg-white/10" as-child>
          <NuxtLink to="/iletisim">Bir danışmanla görüşün</NuxtLink>
        </Button>
      </div>
    </SitePageHero>

    <section class="border-b bg-white">
      <div class="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4">
        <a
          v-for="category in appCategories"
          :key="category.id"
          :href="`#${category.id}`"
          class="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground hover:border-gold hover:text-navy"
        >
          {{ category.name }}
        </a>
      </div>
    </section>

    <section class="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <div v-for="category in appCategories" :id="category.id" :key="category.id">
        <h2 class="text-2xl font-semibold tracking-tight">{{ category.name }}</h2>
        <p class="mt-1 text-sm text-muted-foreground">{{ category.blurb }}</p>
        <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <AppTile v-for="app in appsByCategory(category.id)" :key="app.slug" :app="app" />
        </div>
      </div>
    </section>

    <SiteCtaBand />
  </div>
</template>
