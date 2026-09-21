import type { RouteLocationRaw, RouteParamsRaw } from 'vue-router'
import {
  appSlugs,
  canonicalSlug,
  categorySlugs,
  localizeSlug,
} from '~/constants/slugs'

function baseRouteName(name: unknown) {
  return String(name ?? '').replace(/___[a-z0-9-]+$/i, '')
}

function paramValue(value: unknown) {
  if (Array.isArray(value)) return value[0]
  return typeof value === 'string' ? value : null
}

function localizeParam(map: Parameters<typeof localizeSlug>[0], value: unknown, locale: string) {
  const raw = paramValue(value)
  if (!raw) return value
  const canonical = canonicalSlug(map, raw)
  return canonical ? localizeSlug(map, canonical, locale) : raw
}

function localizeHash(hash: string | undefined, locale: string) {
  if (!hash) return hash
  const id = hash.replace(/^#/, '')
  const canonical = canonicalSlug(categorySlugs, id)
  if (!canonical) return hash
  return `#${localizeSlug(categorySlugs, canonical, locale)}`
}

export function localizeRouteParams(to: RouteLocationRaw, locale: string): RouteLocationRaw {
  if (typeof to === 'string') return to
  if (!('name' in to) || !to.name) return to

  const name = baseRouteName(to.name)
  const params = { ...(to.params as RouteParamsRaw | undefined) }
  const hash = localizeHash(to.hash, locale)

  if (name === 'uygulamalar-slug' && params?.slug) {
    params.slug = localizeParam(appSlugs, params.slug, locale)
  }

  return {
    ...to,
    ...(params && Object.keys(params).length ? { params } : {}),
    ...(hash ? { hash } : {}),
  }
}
