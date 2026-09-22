<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'

const localePath = useI18nPath()

useSeoMeta({
  title: 'İletişim · İskele Pro',
  description: 'İskele Pro demosu ve fiyatlandırma için iletişime geçin. Kredi kartı yok.',
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="İletişim"
      title="Demo randevusu alın"
      description="Firmanızın teklif, depo ve saha akışını konuşalım. Ölçeğinizi seçin; demo hesabı kredi kartı istemez."
    />
    <section class="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Bir danışmanla görüşün</h2>
        <p class="text-muted-foreground">
          Kaç şantiyeniz olduğu, teklifi kimin kestiği ve deponun nasıl işlediği yeterli.
          Form kaydı bu sitede tutulmaz; ekibimiz e-posta üzerinden döner.
        </p>
        <ul class="space-y-2 text-sm">
          <li>Teklif motoru, PDF ve 3D görünüm</li>
          <li>Depo fişi, saha QR, şantiye bakiyesi</li>
          <li>Kullanıcı yetkileri ve çoklu firma</li>
        </ul>
        <SiteFigure :image="SITE_IMAGES.mockupDemo" class="border border-navy/10" />
        <div class="flex flex-wrap gap-2 pt-2">
          <Button variant="outline" as-child>
            <NuxtLink :to="localePath('/fiyatlandirma')">{{ $t('common.seePricing') }}</NuxtLink>
          </Button>
          <Button variant="outline" as-child>
            <NuxtLink :to="localePath('/uygulamalar')">{{ $t('nav.allApps') }}</NuxtLink>
          </Button>
        </div>
      </div>

      <SiteLandingDemoForm compact :embed-id="false" title="Demo talep formu" />
    </section>
  </div>
</template>
