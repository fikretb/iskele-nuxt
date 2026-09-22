<script setup lang="ts">
type MegaKey = 'apps' | 'resources'

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
    class="absolute inset-x-0 top-16 hidden border-b bg-white shadow-lg lg:block"
    @mouseenter="emit('enter', name)"
    @mouseleave="emit('leave')"
  >
    <slot />
  </div>
</template>
