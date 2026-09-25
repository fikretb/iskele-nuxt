<script setup lang="ts">
import { Check, Mail, MapPin, MessageCircle, Phone } from '@lucide/vue'
import { legalCompany } from '~/data/legal'
import { useBreadcrumbJsonLd } from '~/composables/useBreadcrumbJsonLd'
import { useLocalizedPageSeo } from '~/composables/useLocalizedPageSeo'

const config = useRuntimeConfig()
const localePath = useI18nPath()
const { href: whatsappHref } = useWhatsAppLink()

const { locale } = useI18n()
useLocalizedPageSeo('contact')
useBreadcrumbJsonLd(() => [
  { name: locale.value === 'en' ? 'Home' : 'Ana sayfa', to: '/' },
  { name: locale.value === 'en' ? 'Contact' : 'İletişim', to: '/iletisim' },
])
useJsonLd('ld-contact', () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: locale.value === 'en' ? 'Contact · İskele Pro' : 'İletişim · İskele Pro',
  url: locale.value === 'en' ? 'https://iskelepro.com/en/contact' : 'https://iskelepro.com/iletisim',
  mainEntity: {
    '@type': 'Organization',
    name: legalCompany.product,
    legalName: legalCompany.name,
    email: legalCompany.email,
    telephone: '+905323919755',
    address: {
      '@type': 'PostalAddress',
      streetAddress: legalCompany.streetAddress,
      addressLocality: legalCompany.addressLocality,
      addressRegion: legalCompany.addressRegion,
      addressCountry: legalCompany.addressCountry,
    },
  },
}))

const points = [
  'Teklif, PDF ve 3D görünüm',
  'Depo, sevkiyat ve saha takibi',
  'Şantiye bazlı finansal görünürlük',
]
</script>

<template>
  <div>
    <SitePageHero
      band
      eyebrow="İletişim"
      title="Demo ve görüşme"
      description="Firmanızın teklif, depo ve saha süreçlerini birlikte değerlendirelim. Demo hesabı için kredi kartı gerekmez."
    />

    <section class="border-b border-navy/10 bg-[#F6F7FA] py-14 md:py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid overflow-hidden bg-white shadow-[0_24px_60px_-32px_rgb(11_32_81/0.28)] ring-1 ring-navy/10 lg:grid-cols-2 lg:items-stretch">
          <div class="flex flex-col justify-between bg-navy p-8 text-white md:p-10">
            <div>
              <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Nasıl ulaşılır</p>
              <h2 class="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Form, telefon veya WhatsApp
              </h2>
              <p class="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                Formu doldurun, arayın ya da WhatsApp’tan yazın. En kısa sürede size döneriz.
              </p>

              <div class="mt-8 grid gap-3">
                <a
                  :href="`tel:${config.public.phone}`"
                  class="flex items-center gap-4 rounded-xl bg-white/8 p-4 ring-1 ring-white/12 transition-colors hover:bg-white/12"
                >
                  <span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold text-navy-deep">
                    <Phone class="size-5" />
                  </span>
                  <span>
                    <span class="block text-xs font-medium tracking-wide text-white/55 uppercase">Telefon</span>
                    <span class="mt-0.5 block text-base font-semibold">{{ config.public.phoneDisplay }}</span>
                  </span>
                </a>

                <a
                  :href="`mailto:${config.public.email}`"
                  class="flex items-center gap-4 rounded-xl bg-white/8 p-4 ring-1 ring-white/12 transition-colors hover:bg-white/12"
                >
                  <span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold text-navy-deep">
                    <Mail class="size-5" />
                  </span>
                  <span>
                    <span class="block text-xs font-medium tracking-wide text-white/55 uppercase">E-posta</span>
                    <span class="mt-0.5 block text-base font-semibold">{{ config.public.email }}</span>
                  </span>
                </a>

                <a
                  :href="legalCompany.mapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 rounded-xl bg-white/8 p-4 ring-1 ring-white/12 transition-colors hover:bg-white/12"
                >
                  <span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold text-navy-deep">
                    <MapPin class="size-5" />
                  </span>
                  <span>
                    <span class="block text-xs font-medium tracking-wide text-white/55 uppercase">Adres</span>
                    <span class="mt-0.5 block text-sm font-semibold leading-snug">{{ legalCompany.address }}</span>
                  </span>
                </a>

                <a
                  :href="whatsappHref"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 rounded-xl bg-white/8 p-4 ring-1 ring-white/12 transition-colors hover:bg-white/12"
                >
                  <span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#3DDC84] text-white">
                    <MessageCircle class="size-5" />
                  </span>
                  <span>
                    <span class="block text-xs font-medium tracking-wide text-white/55 uppercase">WhatsApp</span>
                    <span class="mt-0.5 block text-base font-semibold">{{ config.public.phoneDisplay }}</span>
                  </span>
                </a>
              </div>

              <ul class="mt-8 space-y-3">
                <li v-for="point in points" :key="point" class="flex items-center gap-3 text-sm text-white/85">
                  <span class="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep">
                    <Check class="size-3" stroke-width="2.6" />
                  </span>
                  {{ point }}
                </li>
              </ul>
            </div>

            <div class="mt-10 flex flex-wrap gap-3">
              <Button
                variant="outline"
                class="rounded-none border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                as-child
              >
                <NuxtLink :to="localePath('/fiyatlandirma')">{{ $t('common.seePricing') }}</NuxtLink>
              </Button>
              <Button
                variant="outline"
                class="rounded-none border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                as-child
              >
                <NuxtLink :to="localePath('/uygulamalar')">{{ $t('nav.allApps') }}</NuxtLink>
              </Button>
            </div>
          </div>

          <div class="flex flex-col justify-center p-8 md:p-10">
            <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Demo talebi</p>
            <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy">
              İletişim formu
            </h2>
            <p class="mt-2 text-sm text-muted-foreground">
              Paket ve ölçek bilgisi forma düşer. Demo hesabı için kredi kartı gerekmez.
            </p>
            <div class="mt-6">
              <SiteLandingDemoForm inset :embed-id="false" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
