<script setup lang="ts">
import { Check, Minus } from '@lucide/vue'
import { SITE_IMAGES } from '~/data/assets'
import { quote, withoutUs, withUs } from '~/data/site'

const rows = withoutUs.map((before, index) => ({
  before,
  after: withUs[index] ?? '',
}))
</script>

<template>
  <section class="bg-white py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <SiteReveal variant="up" class="max-w-xl">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Karşılaştırma</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Dağınık ofis mi, tek sistem mi?
        </h2>
      </SiteReveal>

      <SiteReveal variant="up" :delay="80" class="mt-8">
        <div class="overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgb(11_32_81/0.4)] ring-1 ring-navy/10">
          <div class="grid md:grid-cols-2">
            <div class="border-b border-navy/10 bg-navy/[0.03] px-5 py-3.5 md:border-r md:px-6">
              <h3 class="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Dağınık ofis
              </h3>
            </div>
            <div class="border-b border-navy/10 bg-navy px-5 py-3.5 md:px-6">
              <h3 class="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">
                İskele Pro
              </h3>
            </div>
          </div>

          <div
            v-for="(row, index) in rows"
            :key="row.before"
            class="grid md:grid-cols-2"
            :class="index < rows.length - 1 ? 'border-b border-navy/8' : ''"
          >
            <div class="flex gap-3 border-b border-navy/8 px-5 py-4 md:border-r md:border-b-0 md:px-6">
              <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy/6 text-muted-foreground">
                <Minus class="size-3" stroke-width="2.4" />
              </span>
              <p class="text-sm leading-relaxed text-muted-foreground">{{ row.before }}</p>
            </div>
            <div class="flex gap-3 bg-gold/[0.06] px-5 py-4 md:px-6">
              <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Check class="size-3" stroke-width="2.6" />
              </span>
              <p class="text-sm leading-relaxed font-medium text-navy">{{ row.after }}</p>
            </div>
          </div>
        </div>
      </SiteReveal>

      <div class="mt-8 grid items-center gap-5 lg:grid-cols-12 lg:gap-6">
        <SiteReveal variant="up" :delay="120" class="min-w-0 lg:col-span-5">
          <blockquote class="rounded-2xl bg-navy px-6 py-7 text-white md:px-8 md:py-8">
            <p class="text-5xl leading-none font-semibold text-gold" aria-hidden="true">“</p>
            <p class="-mt-3 text-[15px] leading-relaxed text-white/90 md:text-base">
              {{ quote.text }}
            </p>
            <footer class="mt-6 flex items-start gap-3 border-t border-white/10 pt-4 not-italic">
              <span class="mt-1.5 h-px w-6 shrink-0 bg-gold" />
              <span class="text-xs leading-relaxed text-white/55">{{ quote.role }}</span>
            </footer>
          </blockquote>
        </SiteReveal>
        <SiteReveal variant="up" :delay="180" class="min-w-0 lg:col-span-7">
          <SiteFigure
            :image="SITE_IMAGES.mockupDemo"
            class="rounded-2xl shadow-[0_22px_48px_-28px_rgb(11_32_81/0.55)] ring-1 ring-navy/10"
          />
        </SiteReveal>
      </div>
    </div>
  </section>
</template>
