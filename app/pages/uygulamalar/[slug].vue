<script setup lang="ts">
import { appCategories, appsByCategory, findApp } from '~/data/apps'
import { connectedApps, getAppStory } from '~/data/appStories'
import { imageForApp } from '~/data/assets'
import { appSlugs, i18nSlugParams } from '~/constants/slugs'

const route = useRoute()
const { t } = useI18n()
const localePath = useI18nPath()
const slug = computed(() => String(route.params.slug || ''))
const app = computed(() => findApp(slug.value))

watch(app, (value) => {
  if (!value) {
    showError({ statusCode: 404, statusMessage: t('error.appNotFound') })
  }
}, { immediate: true })

if (app.value) {
  await useSyncedI18nParams(i18nSlugParams(appSlugs, app.value.slug))
}

const category = computed(() => appCategories.find(item => item.id === app.value?.category))
const story = computed(() => app.value ? getAppStory(app.value) : null)
const related = computed(() => {
  if (!app.value) return []
  const linked = connectedApps(app.value)
  if (linked.length) return linked
  return appsByCategory(app.value.category).filter(item => item.slug !== app.value!.slug).slice(0, 5)
})
const featuredImage = computed(() => app.value ? imageForApp(app.value.slug) : null)
const isPortrait = computed(() => Boolean(featuredImage.value && featuredImage.value.height > featuredImage.value.width))

useSeoMeta({
  title: () => app.value ? `${app.value.name} · İskele Pro` : 'Uygulama',
  description: () => story.value?.lead ?? app.value?.description,
})
</script>

<template>
  <div v-if="app && story">
    <SitePageHero
      :eyebrow="category?.name"
      :title="story.headline"
      :description="story.lead"
    >
      <div class="mt-8 flex flex-wrap gap-3">
        <Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.startFree') }}</NuxtLink>
        </Button>
        <Button variant="outline" class="border-white/30 bg-transparent text-white hover:bg-white/10" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.talkAdvisor') }}</NuxtLink>
        </Button>
      </div>
    </SitePageHero>

    <section class="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <div
        v-if="featuredImage && isPortrait"
        class="grid items-start gap-10 lg:grid-cols-[minmax(0,20rem)_1fr]"
      >
        <SiteFigure :image="featuredImage" class="mx-auto w-full max-w-xs border border-navy/10 lg:max-w-none" />
        <div class="space-y-12">
          <article v-for="section in story.sections" :key="section.title">
            <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">{{ section.title }}</h2>
            <p class="mt-3 text-lg text-muted-foreground">{{ section.body }}</p>
          </article>
        </div>
      </div>

      <template v-else>
        <SiteFigure
          v-if="featuredImage"
          :image="featuredImage"
          class="border border-navy/10"
        />
        <article v-for="section in story.sections" :key="section.title" class="max-w-3xl">
          <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">{{ section.title }}</h2>
          <p class="mt-3 text-lg text-muted-foreground">{{ section.body }}</p>
        </article>
      </template>

      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">Tüm özellikler olması gerektiği gibi.</h2>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <Card v-for="extra in story.extras" :key="extra.title" class="bg-white">
              <CardHeader>
                <CardTitle class="text-lg">{{ extra.title }}</CardTitle>
                <CardDescription>{{ extra.body }}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <Card class="h-fit bg-white">
          <CardHeader>
            <CardTitle>{{ app.name }}</CardTitle>
            <CardDescription>{{ app.tagline }}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li v-for="feature in app.features" :key="feature" class="flex gap-2">
                <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                {{ feature }}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Tek bir ihtiyaç, tek bir uygulama.</h2>
        <p class="mt-1 text-sm text-muted-foreground">Büyüdükçe ilerleyin. {{ category?.blurb }}</p>
        <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <SiteAppTile v-for="item in related" :key="item.slug" :app="item" />
        </div>
        <Button variant="link" class="mt-4 px-0" as-child>
          <NuxtLink :to="localePath('/uygulamalar')">{{ $t('common.seeAllApps') }}</NuxtLink>
        </Button>
      </div>
    </section>

    <SiteCtaBand />
  </div>
</template>
