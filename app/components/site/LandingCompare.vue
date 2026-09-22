<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'
import { quote, withoutUs, withUs } from '~/data/site'
</script>

<template>
  <section class="bg-white py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <SiteReveal variant="up" class="max-w-xl">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Karşılaştırma</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Dağınık ofis mi, tek kayıt mı?
        </h2>
      </SiteReveal>

      <div class="mt-8 grid overflow-hidden rounded-2xl ring-1 ring-navy/10 md:grid-cols-2">
        <SiteReveal variant="left" class="border-b border-navy/10 bg-navy/[0.03] p-6 md:border-r md:border-b-0 md:p-8">
          <h3 class="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            Dağınık ofis
          </h3>
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="item in withoutUs"
              :key="item"
              class="border-b border-navy/5 pb-2.5 text-sm text-muted-foreground last:border-0 last:pb-0"
            >
              {{ item }}
            </li>
          </ul>
        </SiteReveal>
        <SiteReveal variant="right" :delay="120" class="border-l-2 border-l-gold bg-white p-6 md:p-8">
          <h3 class="text-xs font-semibold tracking-[0.12em] text-gold uppercase">
            İskele Pro
          </h3>
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="item in withUs"
              :key="item"
              class="border-b border-navy/5 pb-2.5 text-sm text-navy last:border-0 last:pb-0"
            >
              {{ item }}
            </li>
          </ul>
        </SiteReveal>
      </div>

      <div class="mt-8 grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <SiteReveal variant="up" :delay="80" class="min-w-0">
          <blockquote class="rounded-2xl bg-navy px-6 py-7 text-white md:px-8 md:py-8">
            <p class="text-base leading-relaxed md:text-lg">“{{ quote.text }}”</p>
            <footer class="mt-4 text-xs tracking-wide text-white/55 not-italic">{{ quote.role }}</footer>
          </blockquote>
        </SiteReveal>
        <SiteReveal variant="up" :delay="140" class="min-w-0">
          <SiteFigure
            :image="SITE_IMAGES.mockupDemo"
            class="rounded-2xl shadow-[0_18px_40px_-28px_rgb(11_32_81/0.55)] ring-1 ring-navy/10"
          />
        </SiteReveal>
      </div>
    </div>
  </section>
</template>
