<script setup lang="ts">
import { HardHat, QrCode, Scale, Truck } from '@lucide/vue'
import { SITE_IMAGES } from '~/data/assets'

/**
 * Tanıtım metni kuralları (bu blok):
 * - Fayda odaklı başlık (ürün jargonu değil)
 * - Kurumsal B2B ton: emir kipi / sokak ağzı yok
 * - Teknik detay (QR, token, ERP, veri alanı) yok — alt sayfalarda anlatılır
 * - Her madde: kim için + ne kazanır
 */
const items = [
  {
    title: 'İskele kiralama ve satış için yazıldı',
    body: 'Genel inşaat ERP’si değil. Teklif, kiralama, satış ve şantiye yönetimi iskele firmasının işine göre kuruludur.',
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
      <SiteReveal variant="blur" class="border-b border-navy/10 pb-6 text-center">
        <span class="hairline mx-auto mb-4 block" />
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">
          Neden İskele Pro
        </p>
        <h2 class="mx-auto mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          İskele kiralama ve satış operasyonunuzu tek platformda yönetin.
        </h2>
      </SiteReveal>

      <div class="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <SiteReveal variant="up" class="min-w-0">
          <SiteFigure
            :image="SITE_IMAGES.featureTrio"
            class="h-full rounded-2xl bg-[#eef1f6] p-6 shadow-[0_18px_40px_-28px_rgb(11_32_81/0.45)] ring-1 ring-navy/8 md:p-8"
          />
        </SiteReveal>

        <div class="grid content-center gap-3 sm:grid-cols-2">
          <SiteReveal
            v-for="(item, index) in items"
            :key="item.title"
            variant="up"
            :delay="80 + index * 70"
            class="rounded-2xl bg-white p-5 ring-1 ring-navy/8"
          >
            <div class="flex size-9 items-center justify-center rounded-xl bg-navy text-gold">
              <component :is="item.icon" class="size-4" stroke-width="1.75" />
            </div>
            <h3 class="mt-4 text-sm font-semibold text-navy">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {{ item.body }}
            </p>
          </SiteReveal>
        </div>
      </div>
    </div>
  </section>
</template>
