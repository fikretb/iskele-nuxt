<script setup lang="ts">
import { SITE_IMAGES, workflowGallery } from '~/data/assets'
import { appCategories, appsByCategory, productApps } from '~/data/apps'
import { categorySlugs, localizeSlug } from '~/constants/slugs'

const { locale } = useI18n()
const localePath = useI18nPath()

function categoryHash(id: string) {
  return localizeSlug(categorySlugs, id, locale.value)
}

usePageSeo({
  title: 'Tüm uygulamalar · İskele Pro',
  description: 'İskele kiralama ve satış için teklif, saha, depo, finans ve insan kaynakları uygulamaları.',
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="Uygulamalar"
      title="Her süreç için özel çözüm, tek birleşik altyapı."
      description="Karmaşaya ve dağınık sistemlere son verin. İhtiyacınıza uygun uygulamaları seçin, tüm departmanlarınızı tek bir merkezden uyum içinde yönetin."
      :image="SITE_IMAGES.heroCephe"
      overlay="full"
    >
      <p class="mt-4 text-sm text-white/70">{{ productApps.length }} hazır uygulama · Şirketinize özel veri alanı.</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.startFree') }}</NuxtLink>
        </Button>
        <Button variant="outline" class="border-white/30 bg-transparent text-white hover:bg-white/10" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.talkAdvisor') }}</NuxtLink>
        </Button>
      </div>
    </SitePageHero>

    <section class="border-b bg-white">
      <div class="mx-auto grid max-w-6xl gap-3 px-6 py-8 sm:grid-cols-3">
        <SiteFigure
          v-for="image in workflowGallery"
          :key="image.src"
          :image="image"
          cover
          class="aspect-[4/3]"
        />
      </div>
      <div class="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 pb-4">
        <a
          v-for="category in appCategories"
          :key="category.id"
          :href="`#${categoryHash(category.id)}`"
          class="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground hover:border-gold hover:text-navy"
        >
          {{ category.name }}
        </a>
      </div>
    </section>

    <section class="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <div v-for="category in appCategories" :id="categoryHash(category.id)" :key="category.id">
        <h2 class="text-2xl font-semibold tracking-tight">{{ category.name }}</h2>
        <p class="mt-1 text-sm text-muted-foreground">{{ category.blurb }}</p>
        <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SiteAppTile v-for="app in appsByCategory(category.id)" :key="app.slug" :app="app" />
        </div>
      </div>
    </section>

    <SiteCtaBand
      title="İşinizi büyütmeye bugün başlayın."
      note="Kredi kartı tanımlamadan saniyeler içinde demoya erişin, tüm özellikleri anında deneyimleyin."
    />
  </div>
</template>
