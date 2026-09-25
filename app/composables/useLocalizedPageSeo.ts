import { pageSeo, type PageSeoKey } from '~/data/seo'

export function useLocalizedPageSeo(key: PageSeoKey) {
  const { locale } = useI18n()
  const copy = computed(() => pageSeo[key][locale.value === 'en' ? 'en' : 'tr'])

  usePageSeo({
    title: () => copy.value.title,
    description: () => copy.value.description,
  })

  return copy
}
