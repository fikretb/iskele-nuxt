declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const gtagId = useRuntimeConfig().public.gtagId
  if (!gtagId) return

  const router = useRouter()
  let firstView = true

  router.afterEach((to) => {
    if (firstView) {
      firstView = false
      return
    }
    window.gtag?.('config', gtagId, { page_path: to.fullPath })
  })
})
