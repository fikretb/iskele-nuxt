<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'

const { href: whatsappHref } = useWhatsAppLink()

useHead({
  link: [
    { rel: 'preload', as: 'image', href: SITE_IMAGES.heroLaptop.src },
  ],
})
</script>

<template>
  <section class="relative overflow-hidden bg-navy-deep text-white">
    <div
      class="pointer-events-none absolute inset-0"
      style="background: linear-gradient(135deg, rgb(5 14 40) 0%, rgb(11 32 81) 55%, rgb(18 40 92) 100%);"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
      style="background: radial-gradient(ellipse at 70% 40%, rgb(232 148 20 / 22%), transparent 60%);"
    />
    <div class="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:gap-14 md:py-20 lg:grid-cols-2">
      <div>
        <h1 class="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.08]">
          Tekliften sahaya,<br class="hidden sm:block"> tek kayıt.
        </h1>
        <p class="mt-5 max-w-md text-base text-white/70 md:text-lg">
          İskele kiralama operasyonunuz için teklif, depo, saha ve finans aynı platformda.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Button
            size="lg"
            class="h-11 rounded-md bg-gold px-7 text-sm font-semibold text-navy-deep shadow-sm hover:bg-gold-hover"
            as-child
          >
            <a href="#demo">Ücretsiz demo</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="h-11 rounded-md border-white/35 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/12 hover:text-white"
            as-child
          >
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>
        <p class="mt-3.5 text-xs text-white/45">
          Ücretsiz demo · kredi kartı gerekmez
        </p>
      </div>

      <SiteFigure
        :image="SITE_IMAGES.heroLaptop"
        priority
        class="border border-white/15 shadow-[0_24px_60px_rgb(0_0_0/0.35)]"
      />
    </div>
  </section>
</template>
