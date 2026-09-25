import { absoluteUrl } from '~/data/seo'

export function useBreadcrumbJsonLd(items: MaybeRefOrGetter<{ name: string, to: string }[]>) {
  const localePath = useI18nPath()

  useJsonLd('ld-breadcrumb', () => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: toValue(items).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localePath(item.to)),
    })),
  }))
}
