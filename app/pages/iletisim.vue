<script setup lang="ts">
import { MessageCircle } from '@lucide/vue'
import { SITE_IMAGES } from '~/data/assets'

const localePath = useI18nPath()
const { href: whatsappHref } = useWhatsAppLink()

usePageSeo({
  title: 'İletişim · İskele Pro',
  description: 'İskele Pro demo, fiyat ve kurulum için iletişime geçin. Kiralama ve satış süreçleri için kredi kartı gerekmez.',
})

const points = [
  'Teklif, PDF ve 3D görünüm',
  'Depo, sevkiyat ve saha takibi',
  'Şantiye bazlı finansal görünürlük',
]
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="İletişim"
      title="Demo ve görüşme"
      description="Firmanızın teklif, depo ve saha süreçlerini birlikte değerlendirelim. Demo hesabı için kredi kartı gerekmez."
    />

    <section class="mx-auto grid max-w-6xl items-start gap-8 px-6 py-14 lg:grid-cols-2 lg:gap-10 lg:py-16">
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-navy">Nasıl ulaşılır</h2>
          <p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Formu doldurun ya da WhatsApp’tan yazın. En kısa sürede size döneriz.
          </p>
        </div>

        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-navy/10 transition-colors hover:bg-navy/[0.03]"
        >
          <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#3DDC84] text-white">
            <MessageCircle class="size-5" />
          </span>
          <span>
            <span class="block text-sm font-semibold text-navy">WhatsApp</span>
            <span class="mt-0.5 block text-sm text-muted-foreground">Demo ve fiyat için doğrudan yazın</span>
          </span>
        </a>

        <ul class="space-y-2.5 text-sm text-navy">
          <li v-for="point in points" :key="point">{{ point }}</li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <Button variant="outline" as-child>
            <NuxtLink :to="localePath('/fiyatlandirma')">{{ $t('common.seePricing') }}</NuxtLink>
          </Button>
          <Button variant="outline" as-child>
            <NuxtLink :to="localePath('/uygulamalar')">{{ $t('nav.allApps') }}</NuxtLink>
          </Button>
        </div>

        <SiteFigure :image="SITE_IMAGES.mockupDemo" class="border border-navy/10" />
      </div>

      <SiteLandingDemoForm compact :embed-id="false" title="İletişim formu" />
    </section>
  </div>
</template>
