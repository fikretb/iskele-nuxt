<script setup lang="ts">
type MegaKey = 'apps'

const props = defineProps<{
  name: MegaKey
  open: MegaKey | null
}>()

const emit = defineEmits<{
  enter: [key: MegaKey]
  leave: []
}>()
</script>

<template>
  <div
    v-show="open === name"
    class="absolute inset-x-0 top-full hidden border-b bg-white shadow-[0_24px_50px_-28px_rgb(11_32_81/0.35)] lg:block"
    @mouseenter="emit('enter', name)"
    @mouseleave="emit('leave')"
  >
    <slot />
  </div>
</template>
