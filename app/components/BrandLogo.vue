<script setup lang="ts">
import { BRAND_ASSETS } from '~/utils/brand'

const props = withDefaults(defineProps<{
  onDark?: boolean
  size?: 'sm' | 'md' | 'lg'
}>(), {
  onDark: false,
  size: 'md',
})

const heightClass = computed(() => ({
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-12',
}[props.size]))
</script>

<template>
  <img
    :src="onDark ? BRAND_ASSETS.logoOnDark : BRAND_ASSETS.logo"
    alt="İskele Pro"
    :class="['w-auto object-contain object-left', heightClass]"
  >
</template>
