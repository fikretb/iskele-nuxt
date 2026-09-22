<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'up' | 'left' | 'right' | 'scale' | 'clip' | 'blur'
  delay?: number
  once?: boolean
}>(), {
  variant: 'up',
  delay: 0,
  once: true,
})

const { el, visible } = useInView({ once: props.once })
</script>

<template>
  <div
    ref="el"
    :class="['motion-reveal', `motion-${variant}`, visible && 'is-in']"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>
