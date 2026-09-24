<script setup lang="ts">
import { appsPath } from '~/constants/slugs'
import { megaColumns } from '~/data/site'

const config = useRuntimeConfig()
const localePath = useI18nPath()
const { href: whatsappHref } = useWhatsAppLink()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t bg-navy text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.7fr)_1fr_1fr_1fr]">
      <div class="space-y-4 sm:col-span-2 lg:col-span-1">
        <BrandLogo on-dark />
        <p class="max-w-xl text-sm leading-relaxed text-white/70">
          {{ $t('footer.blurb') }}
        </p>
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">{{ $t('footer.apps') }}</p>
        <ul class="space-y-2 text-sm text-white/80">
          <li v-for="column in megaColumns" :key="column.id">
            <NuxtLink :to="localePath(appsPath(column.id))" class="hover:text-white">{{ column.name }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/uygulamalar')" class="hover:text-white">{{ $t('nav.allApps') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">{{ $t('footer.resources') }}</p>
        <ul class="space-y-2 text-sm text-white/80">
          <li>
            <NuxtLink :to="localePath('/iletisim')" class="hover:text-white">{{ $t('nav.contact') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/fiyatlandirma')" class="hover:text-white">{{ $t('nav.pricing') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/yardim')" class="hover:text-white">{{ $t('nav.help') }}</NuxtLink>
          </li>
          <li>
            <a :href="config.public.appUrl" class="hover:text-white">{{ $t('nav.portal') }}</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">{{ $t('footer.services') }}</p>
        <ul class="space-y-2 text-sm text-white/80">
          <li>
            <NuxtLink :to="localePath('/iletisim')" class="hover:text-white">{{ $t('common.tryFree') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/iletisim')" class="hover:text-white">{{ $t('common.talkAdvisor') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/iletisim')" class="hover:text-white">{{ $t('common.bookDemo') }}</NuxtLink>
          </li>
          <li>
            <a :href="`mailto:${config.public.email}`" class="hover:text-white">{{ config.public.email }}</a>
          </li>
          <li>
            <a :href="`tel:${config.public.phone}`" class="hover:text-white">{{ config.public.phoneDisplay }}</a>
          </li>
          <li>
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="hover:text-white">WhatsApp</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <span>© {{ year }} {{ $t('brand.name') }} · Hitech Mühendislik Ltd. Şti.</span>
        <nav class="flex flex-wrap gap-x-4 gap-y-1">
          <NuxtLink :to="localePath('/kvkk')" class="hover:text-white">{{ $t('footer.kvkk') }}</NuxtLink>
          <NuxtLink :to="localePath('/gizlilik')" class="hover:text-white">{{ $t('footer.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('/kullanim-kosullari')" class="hover:text-white">{{ $t('footer.terms') }}</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>
