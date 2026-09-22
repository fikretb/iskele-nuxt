<script setup lang="ts">
import { workflowGallery } from '~/data/assets'
import { landingWorkflow } from '~/data/site'
</script>

<template>
  <section class="border-y border-navy/10 bg-white py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div class="flex flex-col gap-4 border-b border-navy/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Operasyon akışı</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Ofisten sahaya tek kayıt
          </h2>
          <p class="mt-2 text-sm text-muted-foreground md:text-base">
            Teklif onayından tahsilata kadar tüm adımlar aynı iş kaydında ilerler.
          </p>
        </div>
        <Button
          size="lg"
          class="h-10 shrink-0 rounded-md bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover"
          as-child
        >
          <a href="#demo">Demo’da akışı görün</a>
        </Button>
      </div>

      <ol class="mt-0 divide-y divide-navy/10 md:grid md:grid-cols-5 md:divide-x md:divide-y-0">
        <li
          v-for="item in landingWorkflow"
          :key="item.step"
          class="px-0 py-5 md:px-4 md:py-6 first:md:pl-0 last:md:pr-0"
        >
          <span class="font-mono text-xs font-semibold tracking-wider text-gold">{{ item.step }}</span>
          <h3 class="mt-2 text-sm font-semibold text-navy">{{ item.title }}</h3>
          <p class="mt-1.5 text-xs leading-relaxed text-muted-foreground">{{ item.body }}</p>
        </li>
      </ol>

      <div class="mt-10 grid gap-3 sm:grid-cols-3">
        <SiteFigure
          v-for="image in workflowGallery"
          :key="image.src"
          :image="image"
          cover
          class="aspect-[4/3]"
        />
      </div>
    </div>
  </section>
</template>
