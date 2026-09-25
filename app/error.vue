<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const localePath = useI18nPath()
const is404 = computed(() => props.error.statusCode === 404)

const { t } = useI18n()

usePageSeo({
  title: () => `${is404.value ? t('error.notFoundTitle') : t('error.serverTitle')} · İskele Pro`,
  description: () => is404.value ? t('error.notFoundBody') : t('error.serverBody'),
  robots: 'noindex, nofollow',
})

function goHome() {
  clearError({ redirect: localePath('/') })
}
</script>

<template>
  <div>
    <SiteHeader />
    <main class="border-b border-navy/10 bg-[#F6F7FA] py-20 md:py-28">
      <div class="mx-auto max-w-6xl px-6">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
          {{ error.statusCode || 500 }}
        </p>
        <h1 class="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          {{ is404 ? $t('error.notFoundTitle') : $t('error.serverTitle') }}
        </h1>
        <p class="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {{ is404 ? $t('error.notFoundBody') : $t('error.serverBody') }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Button class="h-11 rounded-none bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover" @click="goHome">
            {{ $t('error.home') }}
          </Button>
          <Button variant="outline" class="h-11 rounded-none border-navy px-5 text-sm font-semibold text-navy" as-child>
            <NuxtLink :to="localePath('/iletisim')">{{ $t('nav.contact') }}</NuxtLink>
          </Button>
        </div>
      </div>
    </main>
    <SiteFooter />
    <SiteCookieBanner />
  </div>
</template>
