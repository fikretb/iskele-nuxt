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
      <SiteReveal variant="up" class="max-w-2xl">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Karşılaştırma</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Dağınık ofis mi, tek sistem mi?
        </h2>
      </SiteReveal>

      <SiteReveal variant="up" :delay="80" class="mt-8">
        <div class="overflow-hidden ring-1 ring-navy/10">
          <div class="grid grid-cols-2">
            <div class="flex items-center border-b border-navy/10 bg-[#F6F7FA] px-5 py-3.5 md:px-6">
              <h3 class="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Dağınık ofis
              </h3>
            </div>
            <div class="flex items-center border-b border-navy/10 bg-navy px-5 py-3.5 md:px-6">
              <h3 class="text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">
                İskele Pro
              </h3>
            </div>
          </div>

          <div
            v-for="(row, index) in rows"
            :key="row.before"
            class="grid grid-cols-2"
            :class="index < rows.length - 1 ? 'border-b border-navy/8' : ''"
          >
            <div class="flex min-h-[4.5rem] items-center gap-3 border-r border-navy/8 px-5 py-4 md:px-6">
              <span class="flex size-5 shrink-0 items-center justify-center rounded-full bg-navy/6 text-muted-foreground">
                <Minus class="size-3" stroke-width="2.4" />
              </span>
              <p class="text-sm leading-relaxed text-muted-foreground">{{ row.before }}</p>
            </div>
            <div class="flex min-h-[4.5rem] items-center gap-3 bg-gold/[0.05] px-5 py-4 md:px-6">
              <span class="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Check class="size-3" stroke-width="2.6" />
              </span>
              <p class="text-sm leading-relaxed font-medium text-navy">{{ row.after }}</p>
            </div>
          </div>
        </div>
      </SiteReveal>

      <SiteReveal variant="up" :delay="140" class="mt-5">
        <div class="grid overflow-hidden ring-1 ring-navy/10 lg:grid-cols-2 lg:items-stretch">
          <blockquote class="flex flex-col justify-center bg-navy px-6 py-7 md:px-8 md:py-8">
            <p class="text-sm leading-relaxed text-white/85">
              {{ quote.lead }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-white/85">
              {{ quote.text }}
            </p>
            <footer class="mt-4 text-xs leading-relaxed text-white/45">
              {{ quote.role }}
            </footer>
          </blockquote>
          <SiteFigure
            :image="SITE_IMAGES.mockupDemo"
            cover
            :rounded="false"
            class="min-h-56 lg:h-full"
          />
        </div>
      </SiteReveal>
    </div>
  </section>
</template>
