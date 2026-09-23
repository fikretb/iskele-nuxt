<script setup lang="ts">
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'
import { SITE_IMAGES } from '~/data/assets'
import { landingWorkflow } from '~/data/site'

const stepImages = [
  SITE_IMAGES.mockupPdf,
  SITE_IMAGES.heroCephe,
  SITE_IMAGES.mockupDepo,
  SITE_IMAGES.mockupSaha,
  SITE_IMAGES.mockupDemo,
] as const

const active = ref(0)
const stepEls = ref<HTMLElement[]>([])
const reduce = usePreferredReducedMotion()

useIntersectionObserver(
  stepEls,
  (entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (!visible) return
    const index = Number((visible.target as HTMLElement).dataset.step)
    if (!Number.isNaN(index)) active.value = index
  },
  { rootMargin: '-35% 0px -40% 0px', threshold: [0.25, 0.5, 0.75] },
)
</script>

<template>
  <section class="border-y border-navy/10 bg-white py-14 md:py-16">
    <div class="mx-auto max-w-6xl px-6">
      <SiteReveal variant="up" class="flex flex-col gap-4 border-b border-navy/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Operasyon akışı</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Tekliften tahsilata, tüm süreçler tek merkezde.
          </h2>
          <p class="mt-2 text-sm text-muted-foreground md:text-base">
            Ofisten sahaya uzanan tüm operasyonlar, tek bir dijital kayıt üzerinden ilerler. Teklif, sipariş, sevkiyat ve tahsilat süreçleri, birbirine bağlı ve kontrol altında.
          </p>
        </div>
        <Button
          size="lg"
          class="h-10 shrink-0 rounded-md bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover"
          as-child
        >
          <a href="#demo">Demo’da akışı görün</a>
        </Button>
      </SiteReveal>

      <div class="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div class="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#eef1f6] ring-1 ring-navy/8 lg:sticky lg:top-28">
          <Transition name="flow-image">
            <img
              :key="stepImages[active]!.src"
              :src="stepImages[active]!.src"
              :alt="stepImages[active]!.alt"
              :width="stepImages[active]!.width"
              :height="stepImages[active]!.height"
              decoding="async"
              loading="lazy"
              class="absolute inset-3 m-auto max-h-[calc(100%-1.5rem)] max-w-[calc(100%-1.5rem)] rounded-xl object-contain shadow-[0_16px_40px_-24px_rgb(11_32_81/0.55)]"
            >
          </Transition>
          <p class="absolute bottom-4 left-4 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-medium text-white">
            {{ landingWorkflow[active]?.step }} · {{ landingWorkflow[active]?.title }}
          </p>
        </div>

        <ol class="relative">
          <span
            class="absolute top-2 bottom-2 left-[5px] w-px bg-navy/10"
            aria-hidden="true"
          />
          <span
            class="absolute top-2 left-[5px] w-px origin-top bg-gold transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            :style="{ height: reduce === 'reduce' ? '100%' : `${(active / Math.max(landingWorkflow.length - 1, 1)) * 100}%` }"
            aria-hidden="true"
          />
          <li
            v-for="(item, index) in landingWorkflow"
            :key="item.step"
            :ref="(el) => { if (el) stepEls[index] = el as HTMLElement }"
            :data-step="index"
            class="relative pl-8 py-5 transition-colors duration-500"
            :class="active === index ? 'text-navy' : 'text-muted-foreground'"
          >
            <span
              class="absolute top-6 left-0 size-2.5 rounded-full border-2 transition-colors duration-500"
              :class="active === index ? 'border-gold bg-gold' : 'border-navy/25 bg-white'"
            />
            <span class="font-mono text-xs font-semibold tracking-wider text-gold">{{ item.step }}</span>
            <h3 class="mt-2 text-sm font-semibold" :class="active === index ? 'text-navy' : 'text-navy/55'">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-xs leading-relaxed">{{ item.body }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
