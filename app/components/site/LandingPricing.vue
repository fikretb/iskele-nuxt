<script setup lang="ts">
import { billedMonthlyCents, formatEuro, pricingNotes, pricingPlans, type BillingCycle } from '~/data/site'

const localePath = useI18nPath()

const billing = ref<BillingCycle>('yearly')

function planPrice(monthlyCents: number) {
  const amount = billedMonthlyCents(monthlyCents, billing.value)
  const compareAt = billing.value === 'yearly' && monthlyCents > 0 ? monthlyCents : 0
  return { amount, compareAt }
}
</script>

<template>
  <section class="bg-navy py-14 text-white md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <SiteReveal variant="blur" class="flex flex-col gap-3 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Fiyatlandırma</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            İşletmenize Uygun Paketi Seçin
          </h2>
          <p class="mt-2 max-w-2xl text-sm text-white/65">
            İhtiyacınıza uygun paketi seçin, iskele ve kalıp operasyonlarınızı tek platformdan yönetin. Kullanıcı başına aylık fiyatlandırma ve yıllık abonelikte 2 ay bizden avantajıyla işinizi büyütün.
          </p>
        </div>
      </SiteReveal>

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
        <p class="text-xs text-white/55">
          {{ billing === 'yearly' ? '12 ay yerine 10 ay ücret · 2 ay hediye' : 'Aylık fatura · yıllıkta 2 ay kazanın' }}
        </p>
      </div>

      <div class="mt-10 grid gap-x-4 gap-y-7 lg:grid-cols-3">
        <SiteReveal
          v-for="(plan, index) in pricingPlans"
          :key="plan.name"
          variant="up"
          :delay="index * 110"
          class="h-full ![clip-path:none]"
        >
          <article
            class="relative flex h-full flex-col border-2 p-5"
            :class="'featured' in plan && plan.featured
              ? 'border-gold bg-navy-soft'
              : 'border-white/15 bg-navy-deep'"
          >
          <span
            v-if="'featured' in plan && plan.featured"
            class="absolute top-0 left-5 z-10 -translate-y-1/2 bg-gold px-2.5 py-1 text-[11px] font-semibold leading-none tracking-wider text-navy-deep uppercase"
          >
            Önerilen
          </span>
          <h3 class="text-lg font-semibold" :class="'featured' in plan && plan.featured ? 'text-gold' : ''">
            {{ plan.name }}
          </h3>
          <div class="mt-3 flex items-end gap-2">
            <p class="text-2xl font-semibold tracking-tight" :class="'featured' in plan && plan.featured ? 'text-gold' : 'text-white'">
              €{{ plan.monthlyCents === 0 ? '0' : formatEuro(planPrice(plan.monthlyCents).amount) }}
            </p>
            <p
              v-if="planPrice(plan.monthlyCents).compareAt > 0"
              class="mb-0.5 text-sm text-white/40 line-through"
            >
              €{{ formatEuro(planPrice(plan.monthlyCents).compareAt) }}
            </p>
          </div>
          <p class="text-xs text-white/45">
            {{ plan.monthlyCents === 0 ? 'ücretsiz' : 'ayda kullanıcı başına' }}
          </p>
          <p class="mt-1 text-xs text-white/55">{{ plan.audience }}</p>
          <ul class="mt-5 flex-1 space-y-2 border-t border-white/10 pt-4 text-sm text-white/75">
            <li v-for="feature in plan.features" :key="feature" class="flex gap-2">
              <span class="mt-2 size-1 shrink-0 bg-gold" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <Button
            size="lg"
            class="mt-6 h-10 w-full rounded-md bg-gold text-sm font-semibold text-navy-deep hover:bg-gold-hover"
            as-child
          >
            <a :href="localePath(`/?paket=${plan.id}&donem=${billing}#demo`)">Demo iste</a>
          </Button>
          </article>
        </SiteReveal>
      </div>

      <ul class="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/45">
        <li v-for="note in pricingNotes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </section>
</template>
