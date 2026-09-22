<script setup lang="ts">
import { appPath } from '~/constants/slugs'
import { journeyImages, SITE_IMAGES } from '~/data/assets'
import { extraFeatures, industryApps, industryJourney } from '~/data/site'

const localePath = useI18nPath()

useSeoMeta({
  title: 'İskele kiralama sektörü · İskele Pro',
  description: 'İskele kiralama ve kurulum firmaları için teklif, saha, depo ve tahsilat yazılımı. Pipeline’dan şantiye bakiyesine tek kayıt.',
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="Sektör · İskele kiralama"
      title="Kiralama firması için iskele araç seti"
      description="Talebi merkeze alın, ölçüden teklif ve 3D çıkarın, stoğu fişle koruyun, sahadaki kârı şantiye bakiyesinde görün."
    >
      <div class="mt-8 flex flex-wrap gap-3">
        <Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.startNow') }}</NuxtLink>
        </Button>
        <Button variant="outline" class="border-white/30 bg-transparent text-white hover:bg-white/10" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.talkAdvisor') }}</NuxtLink>
        </Button>
      </div>
    </SitePageHero>

    <section class="mx-auto max-w-6xl space-y-20 px-6 py-16">
      <SiteFigure
        :image="SITE_IMAGES.sektorKolaj"
        cover
        class="aspect-[3/1] border border-navy/10"
      />

      <article
        v-for="(step, index) in industryJourney"
        :id="step.id"
        :key="step.id"
        class="grid items-center gap-8 border-b pb-16 last:border-0 md:grid-cols-2 md:pb-20"
      >
        <div :class="index % 2 === 1 ? 'md:order-2' : ''">
          <p class="text-xs font-semibold tracking-wider text-gold uppercase">{{ step.app }}</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{{ step.title }}</h2>
          <p class="mt-4 text-muted-foreground">{{ step.body }}</p>
          <Button variant="link" class="mt-3 px-0" as-child>
            <NuxtLink :to="localePath(appPath(step.slug))">{{ $t('common.appLink', { name: step.app }) }}</NuxtLink>
          </Button>
        </div>
        <SiteFigure
          :image="journeyImages[step.id] ?? SITE_IMAGES.heroLaptop"
          :class="index % 2 === 1 ? 'md:order-1' : ''"
          class="border border-navy/10"
        />
      </article>

      <div>
        <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">Tüm özellikler olması gerektiği gibi.</h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card v-for="item in extraFeatures" :key="item.title" class="bg-white">
            <CardHeader>
              <CardTitle class="text-lg">{{ item.title }}</CardTitle>
              <CardDescription>{{ item.body }}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Tek bir ihtiyaç, tek bir uygulama.</h2>
        <p class="mt-1 text-sm text-muted-foreground">Büyüdükçe ilerleyin.</p>
        <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SiteAppTile v-for="app in industryApps" :key="app.slug" :app="app" />
        </div>
        <Button variant="link" class="mt-4 px-0" as-child>
          <NuxtLink :to="localePath('/uygulamalar')">{{ $t('common.seeAllApps') }}</NuxtLink>
        </Button>
      </div>
    </section>

    <SiteCtaBand note="15 günlük bakış değil: demo tenant’ı firmanızın teklif ve depo akışına göre açılır." />
  </div>
</template>
