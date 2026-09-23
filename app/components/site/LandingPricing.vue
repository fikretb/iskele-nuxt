<script setup lang="ts">
import { billedMonthlyCents, formatEuro, pricingNotes, pricingPlans } from '~/data/site'
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
          <p class="mt-3 text-2xl font-semibold tracking-tight" :class="'featured' in plan && plan.featured ? 'text-gold' : 'text-white'">
            €{{ plan.monthlyCents === 0 ? '0' : formatEuro(billedMonthlyCents(plan.monthlyCents, 'yearly')) }}
          </p>
          <p class="text-xs text-white/45">
            {{ plan.monthlyCents === 0 ? 'ücretsiz' : 'ayda kullanıcı başına · yıllık' }}
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
            <a href="#demo">Demo iste</a>
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
