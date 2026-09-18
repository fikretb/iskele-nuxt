<script setup lang="ts">
import { pricingNotes, pricingPlans } from '~/data/site'

useSeoMeta({
  title: 'Fiyatlandırma · İskele Pro',
  description: 'İskele firmaları için Başlangıç, Operasyon ve Kurumsal paketler. Kullanıma göre gizli kalem yok; kesin fiyat demo görüşmesinde.',
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="Fiyatlandırma"
      title="Tek platform, ihtiyacınız kadar uygulama"
      description="Kullanıma göre gizli kalem yok, uzun vadeli sürpriz sözleşme yok. Paket ekran setine göre; kişi başı eklenti satılmaz. Kesin rakam demo görüşmesinde."
    />
    <section class="mx-auto max-w-6xl px-6 py-16">
      <ul class="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="note in pricingNotes" :key="note" class="rounded-xl border bg-white px-4 py-3 text-sm">
          {{ note }}
        </li>
      </ul>
      <div class="grid gap-6 lg:grid-cols-3">
        <Card
          v-for="plan in pricingPlans"
          :key="plan.name"
          :class="plan.featured ? 'border-gold ring-1 ring-gold bg-white' : 'bg-white'"
        >
          <CardHeader>
            <Badge v-if="plan.featured" class="w-fit">Önerilen</Badge>
            <CardTitle class="text-2xl">{{ plan.name }}</CardTitle>
            <CardDescription>{{ plan.audience }}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button class="w-full" :variant="plan.featured ? 'default' : 'outline'" as-child>
              <NuxtLink to="/iletisim">{{ plan.cta }}</NuxtLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
    <SiteCtaBand title="Adil fiyat, sürpriz yok" />
  </div>
</template>
