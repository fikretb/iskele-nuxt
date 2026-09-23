<script setup lang="ts">
import { ArrowRight, ChevronDownIcon, MenuIcon } from '@lucide/vue'
import type { AppCategoryId } from '~/data/apps'
import { appPath } from '~/constants/slugs'
import { megaColumns, megaNavLinks, plainNavLinks } from '~/data/site'

type MegaKey = 'apps'

const config = useRuntimeConfig()
const localePath = useI18nPath()
const { t } = useI18n()
const mobileOpen = ref(false)
const openMenu = ref<MegaKey | null>(null)
const activeCategory = ref<AppCategoryId>('ticari')
let closeTimer: ReturnType<typeof setTimeout> | null = null

const megaLabelKey: Record<MegaKey, string> = {
  apps: 'nav.apps',
}

const plainLabelKey: Record<string, string> = {
  '/fiyatlandirma': 'nav.pricing',
  '/yardim': 'nav.help',
  '/iletisim': 'nav.contact',
}

const categoryIcons: Record<AppCategoryId, string> = {
  ticari: 'FileText',
  operasyon: 'HardHat',
  tedarik: 'ShoppingCart',
  finans: 'Wallet',
  ik: 'UserRound',
  yonetim: 'LayoutDashboard',
}

const activeColumn = computed(() => megaColumns.find(column => column.id === activeCategory.value) ?? megaColumns[0])
const appCount = megaColumns.reduce((total, column) => total + column.apps.length, 0)

function enter(key: MegaKey) {
  if (closeTimer) clearTimeout(closeTimer)
  openMenu.value = key
}

function leave() {
  closeTimer = setTimeout(() => {
    openMenu.value = null
  }, 160)
}

function showCategory(id: AppCategoryId) {
  activeCategory.value = id
}

watch(openMenu, (key) => {
  if (key === 'apps') activeCategory.value = 'ticari'
})

watch(() => useRoute().fullPath, () => {
  mobileOpen.value = false
  openMenu.value = null
})
</script>

<template>
  <header class="sticky top-0 z-50 overflow-visible border-b bg-background/95 backdrop-blur">
    <div class="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
      <NuxtLink :to="localePath('/')" class="shrink-0" :aria-label="$t('brand.homeAria')">
        <BrandLogo size="lg" />
      </NuxtLink>

      <nav class="hidden items-center gap-0.5 lg:flex">
        <div
          v-for="link in megaNavLinks"
          :key="link.to"
          @mouseenter="enter(link.mega)"
          @mouseleave="leave"
        >
          <NuxtLink
            :to="localePath(link.to)"
            class="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            :class="openMenu === link.mega ? 'bg-muted text-foreground' : ''"
          >
            {{ t(megaLabelKey[link.mega]) }}
            <ChevronDownIcon class="ml-1 size-3.5" />
          </NuxtLink>
        </div>
        <NuxtLink
          v-for="link in plainNavLinks"
          :key="`${link.to}-${link.label}`"
          :to="localePath(link.to)"
          class="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="text-foreground bg-muted"
        >
          {{ t(plainLabelKey[link.to] ?? 'nav.help') }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <SiteSearch />
        <div class="hidden items-center gap-2 lg:flex">
          <Button variant="outline" class="h-10 rounded-none border-navy bg-navy px-5 text-sm font-semibold text-white shadow-none hover:border-navy-deep hover:bg-navy-deep hover:text-white" as-child>
            <a :href="config.public.appUrl">{{ $t('nav.portal') }}</a>
          </Button>
          <Button class="h-10 rounded-none bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover" as-child>
            <NuxtLink :to="localePath('/#demo')">{{ $t('nav.freeDemo') }}</NuxtLink>
          </Button>
        </div>
        <Sheet v-model:open="mobileOpen">
          <SheetTrigger as-child class="lg:hidden">
            <Button variant="outline" size="icon" :aria-label="$t('nav.menu')">
              <MenuIcon />
            </Button>
          </SheetTrigger>
        <SheetContent side="right" class="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              <BrandLogo size="sm" />
            </SheetTitle>
            <SheetDescription>{{ $t('brand.tagline') }}</SheetDescription>
          </SheetHeader>
          <div class="space-y-4 px-4 pb-6">
            <Accordion type="single" collapsible default-value="ticari">
              <AccordionItem v-for="column in megaColumns" :key="column.id" :value="column.id">
                <AccordionTrigger class="py-2.5 text-sm font-semibold text-navy">
                  {{ column.name }}
                </AccordionTrigger>
                <AccordionContent>
                  <div class="flex flex-col gap-0.5 pb-2">
                    <p class="px-2 pb-1 text-xs text-muted-foreground">{{ column.blurb }}</p>
                    <NuxtLink
                      v-for="app in column.apps"
                      :key="app.slug"
                      :to="localePath(appPath(app.slug))"
                      class="rounded-md px-2 py-1.5 text-sm text-navy/80 hover:bg-muted hover:text-navy"
                    >
                      {{ app.name }}
                    </NuxtLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator />
            <NuxtLink :to="localePath('/uygulamalar')" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">{{ $t('nav.allApps') }}</NuxtLink>
            <NuxtLink :to="localePath('/fiyatlandirma')" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">{{ $t('nav.pricing') }}</NuxtLink>
            <NuxtLink :to="localePath('/yardim')" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">{{ $t('nav.help') }}</NuxtLink>
            <NuxtLink :to="localePath('/iletisim')" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">{{ $t('nav.contact') }}</NuxtLink>
          </div>
          <SheetFooter class="gap-2">
            <Button variant="outline" class="h-10 rounded-none border-navy bg-navy px-5 text-sm font-semibold text-white shadow-none hover:border-navy-deep hover:bg-navy-deep hover:text-white" as-child>
              <a :href="config.public.appUrl">{{ $t('nav.portal') }}</a>
            </Button>
            <Button class="h-10 rounded-none bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover" as-child>
              <NuxtLink :to="localePath('/#demo')">{{ $t('nav.freeDemo') }}</NuxtLink>
            </Button>
          </SheetFooter>
        </SheetContent>
        </Sheet>
      </div>
    </div>

    <SiteMegaPanel name="apps" :open="openMenu" @enter="enter" @leave="leave">
      <div class="mx-auto grid max-w-6xl lg:grid-cols-[17.5rem_minmax(0,1fr)]">
        <div class="bg-[#F6F7FA] px-4 py-5">
          <p class="px-3 text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">Kategoriler</p>
          <div class="mt-3 space-y-1">
            <button
              v-for="column in megaColumns"
              :key="column.id"
              type="button"
              class="flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors"
              :class="activeCategory === column.id
                ? 'bg-white text-navy shadow-sm ring-1 ring-navy/10'
                : 'text-navy/70 hover:bg-white/80 hover:text-navy'"
              @mouseenter="showCategory(column.id)"
              @focus="showCategory(column.id)"
            >
              <span
                class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md"
                :class="activeCategory === column.id ? 'bg-navy text-gold' : 'bg-navy/8 text-navy'"
              >
                <SiteAppGlyph :name="categoryIcons[column.id]" class="size-3.5" />
              </span>
              <span class="min-w-0">
                <span class="block text-sm font-semibold">{{ column.name }}</span>
                <span class="mt-0.5 block text-xs leading-snug text-muted-foreground">{{ column.blurb }}</span>
              </span>
            </button>
          </div>
        </div>

        <div class="flex min-h-[22rem] flex-col px-6 py-5">
          <div>
            <p class="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase">{{ activeColumn.name }}</p>
            <p class="mt-1 text-sm text-muted-foreground">{{ activeColumn.blurb }}</p>
          </div>
          <div class="mt-4 grid gap-2 sm:grid-cols-2">
            <SiteAppTile
              v-for="app in activeColumn.apps"
              :key="app.slug"
              :app="app"
            />
          </div>
          <div class="mt-auto flex items-center justify-between gap-3 border-t border-navy/8 pt-4">
            <p class="text-xs text-muted-foreground">{{ appCount }} hazır uygulama</p>
            <NuxtLink
              :to="localePath('/uygulamalar')"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              {{ $t('nav.allAppsCta') }}
              <ArrowRight class="size-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </SiteMegaPanel>
  </header>
</template>
