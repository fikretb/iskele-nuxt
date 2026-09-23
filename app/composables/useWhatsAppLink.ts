export function useWhatsAppLink() {
  const config = useRuntimeConfig()
  const href = computed(() => {
    const base = String(config.public.whatsappUrl || 'https://wa.me/905323919755')
    const text = String(config.public.whatsappMessage || '')
    if (!text) return base
    const sep = base.includes('?') ? '&' : '?'
    return `${base}${sep}text=${encodeURIComponent(text)}`
  })
  return { href }
}
