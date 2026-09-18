<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <section class="bg-navy text-white">
    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p v-if="eyebrow" class="mb-3 text-sm font-medium text-gold">{{ eyebrow }}</p>
      <h1 class="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
        {{ description }}
      </p>
      <slot />
    </div>
  </section>
</template>
