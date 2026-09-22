<script setup lang="ts">
withDefaults(defineProps<{
  motion?: 'wipe' | 'rise' | 'scale' | 'split' | 'blur' | 'slide'
}>(), {
  motion: 'rise',
})

const { el, visible } = useInView({
  once: true,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.08,
})

const settled = ref(false)
let settleTimer: number | undefined

watch(visible, (value) => {
  if (!value || !import.meta.client) return
  window.clearTimeout(settleTimer)
  settleTimer = window.setTimeout(() => {
    settled.value = true
  }, 1150)
})

onUnmounted(() => {
  if (import.meta.client) window.clearTimeout(settleTimer)
})
</script>

<template>
  <div
    ref="el"
    :class="['scene', `scene-${motion}`, visible && 'is-in', settled && 'is-settled']"
  >
    <slot />
  </div>
</template>
