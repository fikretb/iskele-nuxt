<script setup lang="ts">
import { pricingNotes, pricingPlans } from '~/data/site'
</script>

<template>
  <section class="bg-navy py-14 text-white md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="flex flex-col gap-3 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Fiyatlandırma</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Pakete göre ekran seti
          </h2>
          <p class="mt-2 text-sm text-white/65">
            Net rakam demo görüşmesinde belirlenir. Kullanıma bağlı gizli kalem yoktur.
          </p>
        </div>
      </div>

      <div class="mt-8 overflow-hidden rounded-md border border-white/15 lg:grid lg:grid-cols-3">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="plan.name"
          class="flex flex-col p-5"
          :class="[
            'featured' in plan && plan.featured ? 'bg-navy-soft border-l-2 border-l-gold' : 'bg-navy-deep/60',
            index < pricingPlans.length - 1 ? 'border-b border-white/10 lg:border-b-0 lg:border-r' : '',
          ]"
        >
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="text-lg font-semibold" :class="'featured' in plan && plan.featured ? 'text-gold' : ''">
              {{ plan.name }}
            </h3>
            <span
              v-if="'featured' in plan && plan.featured"
              class="text-[10px] font-semibold tracking-wider text-gold uppercase"
            >
              Önerilen
            </span>
          </div>
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
        </div>
      </div>

      <ul class="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/45">
        <li v-for="note in pricingNotes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </section>
</template>
