<script setup lang="ts">
import { Check, Headset, ShieldCheck, Sparkles, Wallet } from '@lucide/vue'
import { appPath } from '~/constants/slugs'
import { productApps } from '~/data/apps'
import { SITE_IMAGES } from '~/data/assets'
import {
  billedMonthlyCents,
  companySizes,
  formatEuro,
  pricingFaqs,
  pricingNotes,
  pricingPerks,
  pricingPlans,
  type BillingCycle,
} from '~/data/site'

const localePath = useI18nPath()

usePageSeo({
  title: 'Fiyatlandırma · İskele Pro',
  description: 'İskele kiralama ve satış için Başlangıç, Operasyon ve Kurumsal. Yıllıkta 2 ay hediye; kullanıcı başı aylık fiyat.',
})

useJsonLd('ld-faq', {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map(topic => ({
    '@type': 'Question',
    name: topic.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: topic.body,
    },
  })),
})

type PlanId = (typeof pricingPlans)[number]['id']

const billing = ref<BillingCycle>('yearly')
const selectedId = ref<PlanId>('operasyon')

const selected = computed(() =>
  pricingPlans.find(plan => plan.id === selectedId.value) ?? pricingPlans[1]!,
)

const selectedApps = computed(() => {
  const slugs = new Set<string>(selected.value.apps)
  return productApps.filter(app => slugs.has(app.slug))
})

const perkIcons = [Sparkles, Wallet, ShieldCheck, Headset] as const

const valueShots = [
  {
    image: SITE_IMAGES.mockupPdf,
    title: 'Teklif ve PDF',
    body: 'Cephe ölçüsünden malzeme listesi ve antetli evrak aynı kayıttan.',
  },
  {
    image: SITE_IMAGES.mockupDepo,
    title: 'Depo ve sevkiyat',
    body: 'Çıkan ve dönen malzeme fişle belli olsun; stok tahmini değil.',
  },
  {
    image: SITE_IMAGES.mockupSaha,
    title: 'Saha teslim',
    body: 'QR, imza ve token’lı link ile montaj ekibi ofisle aynı fişi görür.',
  },
] as const

function isFeatured(plan: (typeof pricingPlans)[number]) {
  return 'featured' in plan && plan.featured
}

function selectPlan(id: PlanId) {
  selectedId.value = id
}

function planPrice(plan: (typeof pricingPlans)[number]) {
  const amount = billedMonthlyCents(plan.monthlyCents, billing.value)
  const compareAt = billing.value === 'yearly' && plan.monthlyCents > 0
    ? plan.monthlyCents
    : 0
  return { amount, compareAt }
}
</script>

<template>
  <div>
    <SitePageHero
      narrow
      eyebrow="Fiyatlandırma"
      title="Tek ürün. Pakete göre ekran."
      description="Kullanıcı başı aylık fiyat. Yıllık ödemede 12 ay yerine 10 ay ücret alınır; 2 ay hediyedir."
    >
      <div class="mt-8 flex flex-wrap gap-3">
        <Button size="lg" class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.startFree') }}</NuxtLink>
        </Button>
        <Button size="lg" variant="outline" class="border-white/35 bg-white/5 text-white hover:bg-white/12 hover:text-white" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.talkAdvisor') }}</NuxtLink>
        </Button>
      </div>
    </SitePageHero>

    <section class="border-b border-navy/10 bg-[#F6F7FA] py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mx-auto max-w-xl text-center">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Paketler</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Kullanıcı başına, şeffaf fiyat
          </h2>
          <p class="mt-2 text-sm text-muted-foreground">
            Yıllıkta 2 ay bizden. Paket, iskele firmanızın ölçeğine göre açılan ekran setidir.
          </p>
        </div>

        <div class="mt-8 flex flex-col items-center gap-2">
          <div class="inline-flex rounded-full border border-navy/15 bg-white p-1 shadow-[0_1px_0_rgb(11_32_81/0.04)]">
            <button
              type="button"
              class="rounded-full px-5 py-2 text-sm font-medium transition-colors"
              :class="billing === 'yearly' ? 'bg-navy text-white' : 'text-muted-foreground hover:text-navy'"
              @click="billing = 'yearly'"
            >
              Yıllık
            </button>
            <button
              type="button"
              class="rounded-full px-5 py-2 text-sm font-medium transition-colors"
              :class="billing === 'monthly' ? 'bg-navy text-white' : 'text-muted-foreground hover:text-navy'"
              @click="billing = 'monthly'"
            >
              Aylık
            </button>
          </div>
          <p class="text-xs text-muted-foreground">
            {{ billing === 'yearly' ? '12 ay yerine 10 ay ücret · 2 ay hediye' : 'Aylık fatura · yıllıkta 2 ay kazanın' }}
          </p>
        </div>

        <div class="mt-10 grid items-stretch gap-5 lg:grid-cols-3 lg:items-start">
          <article
            v-for="plan in pricingPlans"
            :key="plan.id"
            class="flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white transition-shadow"
            :class="isFeatured(plan)
              ? 'border-gold shadow-[0_18px_40px_-24px_rgb(11_32_81/0.45)] lg:-translate-y-3'
              : selectedId === plan.id
                ? 'border-navy/40 shadow-sm'
                : 'border-navy/12'"
            @click="selectPlan(plan.id)"
          >
            <div
              class="px-6 pt-6"
              :class="isFeatured(plan) ? 'bg-navy pb-6 text-white' : ''"
            >
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-lg font-semibold" :class="isFeatured(plan) ? 'text-white' : 'text-navy'">
                  {{ plan.name }}
                </h3>
                <span
                  v-if="isFeatured(plan)"
                  class="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-navy-deep uppercase"
                >
                  Önerilen
                </span>
              </div>
              <p class="mt-1 text-sm" :class="isFeatured(plan) ? 'text-white/65' : 'text-muted-foreground'">
                {{ plan.blurb }}
              </p>
              <div class="mt-5 flex items-end gap-2">
                <p
                  class="font-semibold tracking-tight"
                  :class="isFeatured(plan) ? 'text-5xl text-gold' : 'text-5xl text-navy'"
                >
                  €{{ plan.monthlyCents === 0 ? '0' : formatEuro(planPrice(plan).amount) }}
                </p>
                <p
                  v-if="planPrice(plan).compareAt > 0"
                  class="mb-1.5 text-sm line-through"
                  :class="isFeatured(plan) ? 'text-white/40' : 'text-muted-foreground/70'"
                >
                  €{{ formatEuro(planPrice(plan).compareAt) }}
                </p>
              </div>
              <p class="mt-1 text-xs" :class="isFeatured(plan) ? 'text-white/55' : 'text-muted-foreground'">
                {{ plan.monthlyCents === 0 ? 'sınırsız kullanıcı · ücretsiz' : 'ayda kullanıcı başına' }}
              </p>
              <p class="mt-0.5 text-xs" :class="isFeatured(plan) ? 'text-white/40' : 'text-muted-foreground/80'">
                {{ plan.headcount }} kişi · {{ plan.headcountNote }}
              </p>
            </div>

            <ul class="flex-1 space-y-2.5 px-6 py-6 text-sm">
              <li v-for="feature in plan.features" :key="feature" class="flex gap-2.5 text-navy/85">
                <Check class="mt-0.5 size-4 shrink-0 text-gold" stroke-width="2.4" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div class="px-6 pb-6">
              <Button
                class="h-11 w-full rounded-md text-sm font-semibold"
                :class="isFeatured(plan)
                  ? 'bg-gold text-navy-deep hover:bg-gold-hover'
                  : 'bg-navy text-white hover:bg-navy-soft'"
                as-child
              >
                <NuxtLink :to="localePath(`/iletisim?paket=${plan.id}&donem=${billing}#talep`)">{{ plan.cta }}</NuxtLink>
              </Button>
              <p class="mt-3 text-center text-xs text-muted-foreground">
                {{ plan.audience }}
              </p>
            </div>
          </article>
        </div>

        <ul class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <li v-for="note in pricingNotes" :key="note" class="flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-gold" />
            {{ note }}
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-white py-14 md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col gap-3 border-b border-navy/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Uygulamalar</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              {{ selected.name }} paketinde açık ekranlar
            </h2>
            <p class="mt-2 text-sm text-muted-foreground">
              Tek ücrette bağlı uygulamalar. Ayrı satılmaz; yetkisi olan kullanıcı ilgili ekranı açar.
            </p>
          </div>
          <Button variant="link" class="h-auto px-0 text-sm text-navy" as-child>
            <NuxtLink :to="localePath('/uygulamalar')">{{ $t('nav.allApps') }} →</NuxtLink>
          </Button>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <NuxtLink
            v-for="app in selectedApps"
            :key="app.slug"
            :to="localePath(appPath(app.slug))"
            class="flex items-center gap-3 rounded-xl border border-navy/10 bg-[#F6F7FA] px-3 py-3 transition-colors hover:border-navy/25 hover:bg-white"
          >
            <SiteAppMark :slug="app.slug" :icon="app.icon" :name="app.name" size="sm" />
            <span class="min-w-0 text-sm font-medium text-navy">{{ app.name }}</span>
          </NuxtLink>
        </div>
        <p class="mt-5 text-center text-xs text-muted-foreground">
          {{ selectedApps.length }} ekran bu pakette açık · Kurumsal’da tüm uygulama seti
        </p>
      </div>
    </section>

    <section class="border-y border-navy/10 bg-[#F6F7FA] py-14 md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Neler görürsünüz</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Teklif, depo ve saha aynı üründe
          </h2>
        </div>
        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <figure v-for="shot in valueShots" :key="shot.title" class="overflow-hidden rounded-2xl border border-navy/10 bg-white">
            <SiteFigure :image="shot.image" :rounded="false" class="aspect-[4/3] bg-[#f3f3f3]" cover />
            <figcaption class="px-5 py-4">
              <h3 class="text-sm font-semibold text-navy">{{ shot.title }}</h3>
              <p class="mt-1 text-xs leading-relaxed text-muted-foreground">{{ shot.body }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="bg-navy py-14 text-white md:py-16">
      <div class="mx-auto max-w-6xl px-6">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Tüm paketlerde</p>
        <h2 class="mt-2 max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
          Destek, barındırma ve firmaya özel veri alanı dahildir
        </h2>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(perk, index) in pricingPerks"
            :key="perk.title"
            class="rounded-xl border border-white/10 bg-navy-soft/50 p-5"
          >
            <component :is="perkIcons[index]" class="size-5 text-gold" stroke-width="1.75" />
            <h3 class="mt-4 text-sm font-semibold">{{ perk.title }}</h3>
            <p class="mt-1.5 text-xs leading-relaxed text-white/65">{{ perk.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white py-14 md:py-16">
      <div class="mx-auto max-w-3xl px-6">
        <div class="text-center">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Sorular</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Fiyatlandırmaya dair
          </h2>
        </div>
        <Accordion type="single" collapsible class="mt-8 rounded-2xl border border-navy/10 bg-[#F6F7FA] px-5">
          <AccordionItem v-for="topic in pricingFaqs" :key="topic.title" :value="topic.title">
            <AccordionTrigger class="text-navy">{{ topic.title }}</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">{{ topic.body }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <section class="border-t border-navy/10 bg-[#F6F7FA] py-14">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Danışman</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Ölçeğinize göre paket konuşalım
        </h2>
        <p class="mt-2 text-sm text-muted-foreground">
          Şantiye sayısı ve teklif hacmi yeterlidir. Demo hesabı kredi kartı istemez.
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            v-for="size in companySizes"
            :key="size.id"
            variant="outline"
            class="rounded-full border-navy/15 bg-white"
            as-child
          >
            <NuxtLink :to="localePath(`/iletisim?olcek=${size.id}#talep`)">{{ size.label }}</NuxtLink>
          </Button>
        </div>
        <div class="mt-6">
          <Button size="lg" class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
            <NuxtLink :to="localePath('/iletisim')">{{ $t('common.talkAdvisor') }}</NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <SiteCtaBand title="Adil fiyat, sürpriz yok" note="Hemen başlayın. Demo hesabı kredi kartı istemez. Yıllıkta 2 ay hediye." />
  </div>
</template>
