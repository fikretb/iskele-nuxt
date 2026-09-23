<script setup lang="ts">
import { helpTopics, resourceMega } from '~/data/site'

const config = useRuntimeConfig()
const localePath = useI18nPath()

useSeoMeta({
  title: 'Yardım · İskele Pro',
  description: 'Demo, yetki, tenant ve fiyatlandırma hakkında kısa yanıtlar.',
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="Yardım"
      title="Nasıl başlanır, veri nerede durur"
      description="Kısa yanıtlar. Derin kurulum demo görüşmesinde; kredi kartı istenmez."
    />
    <section class="border-b border-navy/10 bg-white">
      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div v-for="column in resourceMega" :key="column.name">
          <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">{{ column.name }}</p>
          <ul class="space-y-1">
            <li v-for="item in column.items" :key="item.label">
              <a
                v-if="item.to === 'portal'"
                :href="config.public.appUrl"
                class="block rounded-md px-2 py-1.5 text-sm text-navy hover:bg-muted"
              >
                {{ item.label }}
              </a>
              <NuxtLink
                v-else
                :to="localePath(item.to)"
                class="block rounded-md px-2 py-1.5 text-sm text-navy hover:bg-muted"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6 py-16">
      <Accordion type="single" collapsible class="rounded-xl border bg-white px-4">
        <AccordionItem v-for="topic in helpTopics" :key="topic.title" :value="topic.title">
          <AccordionTrigger>{{ topic.title }}</AccordionTrigger>
          <AccordionContent>{{ topic.body }}</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div class="mt-10 flex flex-wrap gap-3">
        <Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink :to="localePath('/iletisim')">{{ $t('common.bookDemo') }}</NuxtLink>
        </Button>
        <Button variant="outline" as-child>
          <NuxtLink :to="localePath('/uygulamalar')">{{ $t('common.appList') }}</NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>
