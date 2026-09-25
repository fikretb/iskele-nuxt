<script setup lang="ts">
const localePath = useI18nPath()
const { visible, accept, reject } = useCookieConsent()
</script>

<template>
  <ClientOnly>
    <div
      v-if="visible"
      role="dialog"
      aria-live="polite"
      :aria-label="$t('cookie.aria')"
      class="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/96 px-4 py-3 text-white shadow-[0_-8px_28px_rgba(5,14,40,0.28)] backdrop-blur-md md:px-6"
    >
      <div class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p class="text-[13px] leading-snug text-white/85 md:text-sm">
          {{ $t('cookie.text') }}
          <NuxtLink
            :to="localePath('/gizlilik')"
            class="font-medium text-gold underline-offset-2 hover:underline"
          >
            {{ $t('footer.privacy') }}
          </NuxtLink>
        </p>
        <div class="flex shrink-0 items-center gap-2">
          <Button
            variant="outline"
            class="h-9 rounded-none border-white/25 bg-transparent px-3.5 text-xs font-semibold text-white hover:bg-white/10 hover:text-white"
            @click="reject"
          >
            {{ $t('cookie.reject') }}
          </Button>
          <Button
            class="h-9 rounded-none bg-gold px-3.5 text-xs font-semibold text-navy-deep hover:bg-gold-hover"
            @click="accept"
          >
            {{ $t('cookie.accept') }}
          </Button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
