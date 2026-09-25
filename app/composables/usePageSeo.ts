const SITE_URL = 'https://iskelepro.com'
const SHARE_IMAGE = `${SITE_URL}/og.jpg`

export function usePageSeo(options: {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string | undefined>
  robots?: MaybeRefOrGetter<string>
}) {
  const title = computed(() => toValue(options.title).trim())
  const description = computed(() => toValue(options.description) ?? '')

  useSeoMeta({
    title,
    description,
    robots: () => toValue(options.robots) || 'index, follow',
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogSiteName: 'İskele Pro',
    ogImage: SHARE_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: title,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: SHARE_IMAGE,
    twitterImageAlt: title,
  })
}

export function useJsonLd(key: string, data: MaybeRefOrGetter<Record<string, unknown>>) {
  useHead(() => ({
    script: [{
      key,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(toValue(data)),
    }],
  }))
}
