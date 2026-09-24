<script setup lang="ts">
import type { LegalDoc } from '~/data/legal'
import { legalCompany } from '~/data/legal'

defineProps<{
  doc: LegalDoc
}>()

const { locale } = useI18n()
const updated = computed(() => locale.value.startsWith('en') ? legalCompany.updatedEn : legalCompany.updatedTr)
</script>

<template>
  <article class="mx-auto max-w-3xl px-6 py-12 md:py-16">
    <p class="text-xs text-muted-foreground">
      {{ legalCompany.name }} · {{ locale.startsWith('en') ? 'Last updated' : 'Son güncelleme' }}
      {{ updated }}
    </p>
    <p class="mt-2 text-sm leading-relaxed text-navy/70">
      {{ legalCompany.address }}
    </p>

    <div class="mt-10 space-y-9">
      <section v-for="section in doc.sections" :key="section.heading">
        <h2 class="text-lg font-semibold tracking-tight text-navy">{{ section.heading }}</h2>
        <p
          v-for="(paragraph, index) in section.body"
          :key="index"
          class="mt-3 text-[15px] leading-7 text-navy/75"
        >
          {{ paragraph }}
        </p>
      </section>
    </div>
  </article>
</template>
