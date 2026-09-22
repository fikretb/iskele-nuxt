import { useEventListener, useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

export function useInView(options?: {
  once?: boolean
  rootMargin?: string
  threshold?: number
}) {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)
  const reduce = usePreferredReducedMotion()

  function revealIfPassed() {
    if (!import.meta.client || !el.value) return
    if (reduce.value === 'reduce') {
      visible.value = true
      return
    }
    if (el.value.getBoundingClientRect().top < window.innerHeight * 0.88) {
      visible.value = true
    }
  }

  if (import.meta.client && reduce.value === 'reduce') {
    visible.value = true
  }

  useIntersectionObserver(
    el,
    ([entry]) => {
      if (!entry) return
      if (reduce.value === 'reduce') {
        visible.value = true
        return
      }
      if (entry.isIntersecting) {
        visible.value = true
      }
      else if (!options?.once) {
        visible.value = false
      }
    },
    {
      rootMargin: options?.rootMargin ?? '0px 0px -14% 0px',
      threshold: options?.threshold ?? 0.18,
    },
  )

  onMounted(() => {
    requestAnimationFrame(revealIfPassed)
  })

  if (import.meta.client) {
    useEventListener(window, 'scroll', () => {
      if (!visible.value) revealIfPassed()
    }, { passive: true })
  }

  return { el, visible, reduceMotion: computed(() => reduce.value === 'reduce') }
}
