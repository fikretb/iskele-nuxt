<script setup lang="ts">
import { HardHat, QrCode, Scale, Truck } from '@lucide/vue'
import { SITE_IMAGES } from '~/data/assets'

/**
 * Tanıtım metni kuralları (bu blok):
 * - Fayda odaklı başlık (ürün jargonu değil)
 * - Kurumsal B2B ton: emir kipi / sokak ağzı yok
 * - Teknik detay (QR, token, ERP, tenant) yok — alt sayfalarda anlatılır
 * - Her madde: kim için + ne kazanır
 */
const items = [
  {
    title: 'Sektöre özel çözüm',
    body: 'İskele kiralama süreçlerine göre tasarlandı. Teklif, kiralama ve şantiye yönetimi işinize uyum sağlar.',
    icon: HardHat,
  },
  {
    title: 'Depo ve sevkiyat kontrolü',
    body: 'Sahaya gönderilen ve iade alınan malzemeyi anlık izleyin. Stok görünürlüğünü artırın, kayıp riskini azaltın.',
    icon: Truck,
  },
  {
    title: 'Şantiye bazlı kârlılık',
    body: 'Her şantiyenin tahsilatını ve açık bakiyesini ayrı takip edin. Finansal sonucu iş bazında görün.',
    icon: Scale,
  },
  {
    title: 'Ofis–saha bütünlüğü',
    body: 'Saha ekibi teslimatı mobil üzerinden tamamlar. Ofis ile saha bilgisi eşzamanlı güncellenir.',
    icon: QrCode,
  },
]
</script>

<template>
  <section class="relative overflow-hidden border-y border-navy/10 bg-white py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="border-b border-navy/10 pb-6 text-center">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
          Neden İskele Pro
        </p>
        <h2 class="mx-auto mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          İskele kiralama operasyonunuzu tek platformda yönetin.
        </h2>
      </div>

      <div class="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <SiteFigure :image="SITE_IMAGES.featureTrio" class="bg-[#f3f3f3]" />

        <div class="grid sm:grid-cols-2">
          <div
            v-for="(item, index) in items"
            :key="item.title"
            class="group border-navy/10 px-0 py-5 sm:px-5"
            :class="[
              index % 2 === 0 ? 'sm:border-r' : '',
              index < 2 ? 'border-b' : '',
            ]"
          >
            <div class="flex size-8 items-center justify-center rounded-md bg-navy text-gold">
              <component :is="item.icon" class="size-4" stroke-width="1.75" />
            </div>
            <h3 class="mt-4 text-sm font-semibold text-navy">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
