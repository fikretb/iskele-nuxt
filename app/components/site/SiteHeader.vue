<script setup lang="ts">
import { ChevronDownIcon, MenuIcon } from '@lucide/vue'
import { industryMega, megaColumns, megaNavLinks, plainNavLinks, resourceMega } from '~/data/site'

type MegaKey = 'apps' | 'industries' | 'resources'

const config = useRuntimeConfig()
const mobileOpen = ref(false)
const openMenu = ref<MegaKey | null>(null)
let closeTimer: ReturnType<typeof setTimeout> | null = null

function enter(key: MegaKey) {
  if (closeTimer) clearTimeout(closeTimer)
  openMenu.value = key
}

function leave() {
  closeTimer = setTimeout(() => {
    openMenu.value = null
  }, 160)
}

watch(() => useRoute().fullPath, () => {
  mobileOpen.value = false
  openMenu.value = null
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
    <div class="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
      <NuxtLink to="/" class="shrink-0" aria-label="İskele Pro ana sayfa">
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
            :to="link.to"
            class="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            :class="openMenu === link.mega ? 'bg-muted text-foreground' : ''"
          >
            {{ link.label }}
            <ChevronDownIcon class="ml-1 size-3.5" />
          </NuxtLink>
        </div>
        <NuxtLink
          v-for="link in plainNavLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="text-foreground bg-muted"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <Button variant="ghost" as-child>
          <a :href="config.public.appUrl">Portal</a>
        </Button>
        <Button class="h-10 rounded-md bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink to="/#demo">Ücretsiz demo</NuxtLink>
        </Button>
      </div>

      <Sheet v-model:open="mobileOpen">
        <SheetTrigger as-child class="lg:hidden">
          <Button variant="outline" size="icon" aria-label="Menü">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              <BrandLogo size="sm" />
            </SheetTitle>
            <SheetDescription>İskele firmaları için uygulama seti</SheetDescription>
          </SheetHeader>
          <div class="space-y-4 px-4 pb-6">
            <div v-for="column in megaColumns" :key="column.id">
              <p class="mb-2 text-xs font-semibold tracking-wider text-gold uppercase">{{ column.name }}</p>
              <div class="flex flex-col gap-1">
                <NuxtLink
                  v-for="app in column.apps"
                  :key="app.slug"
                  :to="`/uygulamalar/${app.slug}`"
                  class="rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                >
                  {{ app.name }}
                </NuxtLink>
              </div>
            </div>
            <Separator />
            <NuxtLink to="/sektor" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">Sektörler</NuxtLink>
            <NuxtLink to="/fiyatlandirma" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">Fiyatlandırma</NuxtLink>
            <NuxtLink to="/yardim" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">Yardım</NuxtLink>
            <NuxtLink to="/iletisim" class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted">İletişim</NuxtLink>
          </div>
          <SheetFooter class="gap-2">
            <Button variant="outline" as-child>
              <a :href="config.public.appUrl">Portal</a>
            </Button>
            <Button class="h-10 rounded-md bg-gold px-5 text-sm font-semibold text-navy-deep hover:bg-gold-hover" as-child>
              <NuxtLink to="/#demo">Ücretsiz demo</NuxtLink>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <SiteMegaPanel name="apps" :open="openMenu" @enter="enter" @leave="leave">
      <div class="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-3 xl:grid-cols-6">
        <div v-for="column in megaColumns" :key="column.id">
          <p class="mb-1 text-xs font-semibold tracking-wider text-gold uppercase">{{ column.name }}</p>
          <p class="mb-3 text-xs text-muted-foreground">{{ column.blurb }}</p>
          <ul class="space-y-1">
            <li v-for="app in column.apps" :key="app.slug">
              <NuxtLink
                :to="`/uygulamalar/${app.slug}`"
                class="block rounded-md px-2 py-1 text-sm text-foreground/80 hover:bg-muted hover:text-navy"
              >
                {{ app.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t bg-muted/50">
        <div class="mx-auto flex max-w-6xl justify-end px-6 py-3">
          <Button variant="link" class="px-0" as-child>
            <NuxtLink to="/uygulamalar">Tüm uygulamalara göz atın →</NuxtLink>
          </Button>
        </div>
      </div>
    </SiteMegaPanel>

    <SiteMegaPanel name="industries" :open="openMenu" @enter="enter" @leave="leave">
      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-3">
        <div v-for="column in industryMega" :key="column.name">
          <p class="mb-1 text-xs font-semibold tracking-wider text-gold uppercase">{{ column.name }}</p>
          <p class="mb-3 text-xs text-muted-foreground">{{ column.blurb }}</p>
          <ul class="space-y-2">
            <li v-for="item in column.items" :key="item.label">
              <NuxtLink :to="item.to" class="block rounded-md px-2 py-1.5 hover:bg-muted">
                <span class="block text-sm font-medium">{{ item.label }}</span>
                <span class="block text-xs text-muted-foreground">{{ item.note }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t bg-muted/50">
        <div class="mx-auto flex max-w-6xl justify-end px-6 py-3">
          <Button variant="link" class="px-0" as-child>
            <NuxtLink to="/sektor">İskele kiralama sektörü →</NuxtLink>
          </Button>
        </div>
      </div>
    </SiteMegaPanel>

    <SiteMegaPanel name="resources" :open="openMenu" @enter="enter" @leave="leave">
      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-3">
        <div v-for="column in resourceMega" :key="column.name">
          <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">{{ column.name }}</p>
          <ul class="space-y-1">
            <li v-for="item in column.items" :key="item.label">
              <a
                v-if="item.to === 'portal'"
                :href="config.public.appUrl"
                class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                {{ item.label }}
              </a>
              <NuxtLink
                v-else
                :to="item.to"
                class="block rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </SiteMegaPanel>
  </header>
</template>
