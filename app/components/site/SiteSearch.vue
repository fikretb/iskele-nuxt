<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import { onClickOutside } from '@vueuse/core'
import { searchCategoryName, searchSite } from '~/data/search'

const localePath = useI18nPath()
const open = ref(false)
const query = ref('')
const root = ref<HTMLElement | null>(null)
const input = ref<HTMLInputElement | null>(null)

const results = computed(() => searchSite(query.value))

onClickOutside(root, () => {
  if (open.value) close()
})

watch(() => useRoute().fullPath, close)

function toggle() {
  if (open.value) {
    close()
    return
  }
  open.value = true
  nextTick(() => input.value?.focus())
}

function close() {
  open.value = false
  query.value = ''
}

function go(to: string) {
  close()
  return navigateTo(localePath(to))
}

function submit() {
  const first = results.value[0]
  if (first) {
    go(first.to)
    return
  }
  if (query.value.trim()) {
    go('/uygulamalar')
  }
}

function onWindowKey(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) {
    event.preventDefault()
    close()
  }
}

onMounted(() => window.addEventListener('keydown', onWindowKey))
onUnmounted(() => window.removeEventListener('keydown', onWindowKey))
</script>

<template>
  <div ref="root" class="relative">
    <Button
      variant="outline"
      size="icon"
      class="size-9 rounded-full border-navy/15"
      :aria-expanded="open"
      :aria-label="$t('search.open')"
      @click="toggle"
    >
      <SearchIcon class="size-4" />
    </Button>

    <div
      v-if="open"
      class="fixed inset-x-0 top-[4.75rem] z-50 px-4 md:top-[5.35rem]"
    >
      <div class="mx-auto w-full max-w-xl">
      <form
        class="relative flex items-center"
        @submit.prevent="submit"
      >
        <label class="sr-only" for="site-search">{{ $t('search.placeholder') }}</label>
        <div class="flex h-12 w-full items-center rounded-full border border-navy/10 bg-white pl-4 pr-[5.75rem] shadow-[0_10px_32px_rgb(11_32_81/0.12)]">
          <SearchIcon class="size-4 shrink-0 text-muted-foreground" />
          <input
            id="site-search"
            ref="input"
            v-model="query"
            type="text"
            autocomplete="off"
            :placeholder="$t('search.placeholder')"
            class="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-navy outline-none placeholder:text-muted-foreground"
          >
        </div>
        <Button
          type="submit"
          class="absolute top-1 right-1 h-10 rounded-full bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          {{ $t('search.action') }}
        </Button>
      </form>

      <div
        v-if="query.trim()"
        class="mt-2 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-[0_12px_32px_rgb(11_32_81/0.1)]"
      >
        <p v-if="!results.length" class="px-4 py-3 text-sm text-muted-foreground">
          {{ $t('search.empty') }}
        </p>
        <ul v-else class="max-h-80 overflow-y-auto py-1">
          <li v-for="item in results" :key="item.to">
            <NuxtLink
              :to="localePath(item.to)"
              class="flex items-start gap-3 px-3.5 py-2.5 hover:bg-navy/[0.04]"
              @click="close"
            >
              <span class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-navy text-gold">
                <SiteAppGlyph v-if="item.icon" :name="item.icon" class="size-3.5" />
                <SearchIcon v-else class="size-3.5" />
              </span>
              <span class="min-w-0">
                <span class="block text-sm font-semibold text-navy">{{ item.title }}</span>
                <span class="mt-0.5 block text-xs text-muted-foreground">
                  {{ searchCategoryName(item.kind) }} · {{ item.blurb }}
                </span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>
