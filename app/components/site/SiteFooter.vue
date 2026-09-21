<script setup lang="ts">
import { appsPath } from '~/constants/slugs'
import { megaColumns } from '~/data/site'

const config = useRuntimeConfig()
const localePath = useI18nPath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t bg-navy text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div class="space-y-4">
        <BrandLogo on-dark />
        <p class="text-sm text-white/70">
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
            <NuxtLink :to="localePath('/sektor')" class="hover:text-white">{{ $t('footer.industry') }}</NuxtLink>
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
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <span>© {{ year }} {{ $t('brand.name') }}</span>
        <span>{{ $t('footer.legalNote') }}</span>
      </div>
    </div>
  </footer>
</template>
