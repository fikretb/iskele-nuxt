<script setup lang="ts">
import { SITE_IMAGES } from '~/data/assets'
import { quote, withoutUs, withUs } from '~/data/site'
</script>

<template>
  <section class="bg-white py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="max-w-xl">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Karşılaştırma</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Dağınık ofis mi, tek kayıt mı?
        </h2>
      </div>

      <div class="mt-8 grid overflow-hidden rounded-md border border-navy/15 md:grid-cols-2">
        <div class="border-b border-navy/10 bg-navy/[0.03] p-5 md:border-r md:border-b-0 md:p-6">
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
        </div>
        <div class="border-l-2 border-l-gold bg-white p-5 md:p-6">
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
        </div>
      </div>

      <SiteFigure
        :image="SITE_IMAGES.mockupDemo"
        class="mt-8 border border-navy/10"
      />

      <blockquote class="mt-8 border-l-2 border-navy/20 pl-4 text-sm leading-relaxed text-navy md:text-base">
        “{{ quote.text }}”
        <footer class="mt-2 text-xs text-muted-foreground not-italic">{{ quote.role }}</footer>
      </blockquote>
    </div>
  </section>
</template>
