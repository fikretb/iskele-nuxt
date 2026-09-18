<script setup lang="ts">
import { helpTopics } from '~/data/site'

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
    <section class="mx-auto max-w-3xl px-6 py-16">
      <Accordion type="single" collapsible class="rounded-xl border bg-white px-4">
        <AccordionItem v-for="topic in helpTopics" :key="topic.title" :value="topic.title">
          <AccordionTrigger>{{ topic.title }}</AccordionTrigger>
          <AccordionContent>{{ topic.body }}</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div class="mt-10 flex flex-wrap gap-3">
        <Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink to="/iletisim">Demo randevusu alın</NuxtLink>
        </Button>
        <Button variant="outline" as-child>
          <NuxtLink to="/uygulamalar">Uygulama listesi</NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>
