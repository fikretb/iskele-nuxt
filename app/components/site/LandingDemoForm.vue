<script setup lang="ts">
import { Check } from '@lucide/vue'
import { SITE_IMAGES } from '~/data/assets'
import { companySizes, pricingPlans, pricingScales } from '~/data/site'

const points = [
  'Teklif, PDF ve 3D görünüm',
  'Depo, sevkiyat ve saha takibi',
  'Şantiye bazlı finansal görünürlük',
]

withDefaults(defineProps<{
  embedId?: boolean
  title?: string
  compact?: boolean
}>(), {
  embedId: true,
  title: 'Demo talebi',
  compact: false,
})

const { href: whatsappHref } = useWhatsAppLink()
const route = useRoute()

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  size: 'small',
  plan: '',
  cycle: '',
  message: '',
})
const sent = ref(false)

const selectedPlan = computed(() => pricingPlans.find(plan => plan.id === form.plan))

const cycleLabel = computed(() => {
  if (form.cycle === 'yearly') return 'yıllık'
  if (form.cycle === 'monthly') return 'aylık'
  return ''
})

function queryValue(value: unknown) {
  return Array.isArray(value) ? value[0] : value
}

function applyPlan(planId: string) {
  const plan = pricingPlans.find(item => item.id === planId)
  if (!plan) return
  form.plan = plan.id
  const scale = pricingScales.find(item => item.planId === plan.id)
  if (scale) form.size = scale.id
}

function readSelection() {
  const planId = queryValue(route.query.paket)
  const sizeId = queryValue(route.query.olcek)
  const cycle = queryValue(route.query.donem)
  if (typeof planId === 'string') applyPlan(planId)
  else if (typeof sizeId === 'string' && companySizes.some(size => size.id === sizeId)) form.size = sizeId
  form.cycle = cycle === 'yearly' || cycle === 'monthly' ? cycle : ''
}

watch(() => [route.query.paket, route.query.olcek, route.query.donem], readSelection, { immediate: true })

function submit() {
  if (!form.company || !form.name || !form.email) return
  sent.value = true
}
</script>

<template>
  <component
    :is="compact ? 'div' : 'section'"
    :id="embedId ? 'demo' : 'talep'"
    :class="compact
      ? 'rounded-2xl bg-white p-5 ring-1 ring-navy/10'
      : 'scroll-mt-20 bg-[#eef1f6] py-16 md:py-20'"
  >
    <div :class="compact ? '' : 'mx-auto grid max-w-6xl items-stretch gap-8 px-6 lg:grid-cols-2 lg:gap-10'">
      <SiteReveal v-if="!compact" variant="up" class="flex min-w-0 flex-col">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">İletişim</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Firmanızın teklif, depo ve saha süreçlerini birlikte değerlendirelim. Demo hesabı için kredi kartı gerekmez.
        </p>
        <ul class="mt-6 space-y-3">
          <li v-for="point in points" :key="point" class="flex items-center gap-3 text-sm text-navy">
            <span class="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
              <Check class="size-3.5" stroke-width="2.5" />
            </span>
            {{ point }}
          </li>
        </ul>
        <SiteFigure
          :image="SITE_IMAGES.demoDashboard"
          class="mt-8 hidden rounded-2xl shadow-[0_22px_50px_-28px_rgb(11_32_81/0.55)] ring-1 ring-navy/10 lg:block"
        />
      </SiteReveal>

      <SiteReveal
        :variant="compact ? 'up' : 'up'"
        :delay="compact ? 0 : 100"
        :class="compact ? '' : 'flex min-w-0 flex-col justify-center rounded-2xl bg-white p-6 shadow-[0_24px_60px_-32px_rgb(11_32_81/0.45)] ring-1 ring-navy/10 md:p-8'"
      >
        <h3 v-if="compact" class="mb-4 text-sm font-semibold tracking-wide text-navy uppercase">{{ title }}</h3>
        <form v-if="!sent" class="space-y-3.5" @submit.prevent="submit">
          <p
            v-if="selectedPlan"
            class="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2.5 text-xs leading-relaxed text-navy"
          >
            <span class="font-semibold">{{ selectedPlan.name }} paketi</span>
            <span v-if="cycleLabel"> · {{ cycleLabel }}</span>
            <span class="mt-0.5 block text-navy/75">{{ selectedPlan.audience }}</span>
          </p>
          <div class="grid gap-3.5 sm:grid-cols-2">
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-company" class="text-xs">Firma</Label>
              <Input id="landing-company" v-model="form.company" required placeholder="İskele kiralama ve satış firmanız" class="h-9" />
            </div>
            <div class="space-y-1.5">
              <Label for="landing-name" class="text-xs">Ad soyad</Label>
              <Input id="landing-name" v-model="form.name" required placeholder="Yetkili adı" class="h-9" />
            </div>
            <div class="space-y-1.5">
              <Label for="landing-phone" class="text-xs">Telefon</Label>
              <Input id="landing-phone" v-model="form.phone" placeholder="05xx xxx xx xx" class="h-9" />
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-email" class="text-xs">E-posta</Label>
              <Input id="landing-email" v-model="form.email" type="email" required placeholder="ornek@firma.com" class="h-9" />
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-plan" class="text-xs">Tercih edilen paket</Label>
              <select
                id="landing-plan"
                v-model="form.plan"
                class="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
                @change="form.plan && applyPlan(form.plan)"
              >
                <option value="">Paket seçin</option>
                <option v-for="plan in pricingPlans" :key="plan.id" :value="plan.id">
                  {{ plan.name }} · {{ plan.headcount }} kişi
                </option>
              </select>
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-size" class="text-xs">Firma ölçeği</Label>
              <select
                id="landing-size"
                v-model="form.size"
                class="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
              >
                <option v-for="size in companySizes" :key="size.id" :value="size.id">
                  {{ size.label }}
                </option>
              </select>
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-message" class="text-xs">Not</Label>
              <Textarea id="landing-message" v-model="form.message" rows="3" placeholder="Şantiye sayısı, mevcut süreçleriniz..." class="min-h-20" />
            </div>
          </div>
          <Button type="submit" class="h-11 w-full rounded-xl bg-gold text-sm font-semibold text-navy-deep hover:bg-gold-hover">
            Demo talebi gönder
          </Button>
          <p class="text-center text-xs text-muted-foreground">
            Kredi kartı gerekmez ·
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="text-navy underline-offset-2 hover:underline">
              WhatsApp ile yazın
            </a>
          </p>
        </form>
        <p v-else class="text-sm text-muted-foreground">
          Talebiniz alındı. En kısa sürede {{ form.email }} adresinden dönüş yapılır.
        </p>
      </SiteReveal>
    </div>
  </component>
</template>
