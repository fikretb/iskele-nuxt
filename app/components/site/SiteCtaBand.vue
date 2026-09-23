<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'

defineProps<{
  title?: string
  note?: string
}>()

const localePath = useI18nPath()
</script>

<template>
  <section class="relative overflow-hidden border-t bg-navy-deep py-20 text-white">
    <img
      :src="SITE_IMAGES.heroInner.src"
      alt=""
      :width="SITE_IMAGES.heroInner.width"
      :height="SITE_IMAGES.heroInner.height"
      loading="lazy"
      decoding="async"
      class="pointer-events-none absolute inset-0 size-full object-cover object-right opacity-70"
    >
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40" />
    <div class="relative mx-auto max-w-3xl px-6 text-center">
      <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
        {{ title ?? 'Büyüme potansiyelinizi ortaya çıkarın' }}
      </h2>
      <p class="mt-3 text-white/70">
        {{ note ?? 'Hemen başlayın. Demo hesabı kredi kartı istemez; anında bakılır.' }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <Button size="lg" class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.startFree') }}</NuxtLink>
        </Button>
        <Button size="lg" variant="outline" class="border-white/35 bg-white/5 text-white hover:bg-white/12 hover:text-white" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.talkAdvisor') }}</NuxtLink>
        </Button>
      </div>
      <p class="mt-4 text-xs text-white/50">Kredi kartı bilgisi istemiyoruz · Anında erişim</p>
    </div>
  </section>
</template>
