<script setup lang="ts">
import { Headset, MessageCircle, Monitor, Wrench } from '@lucide/vue'
import { companySizes, helpTopics } from '~/data/site'

const config = useRuntimeConfig()
const localePath = useI18nPath()
const { href: whatsappHref } = useWhatsAppLink()

const actions = [
  {
    title: 'Ücretsiz demo',
    body: 'Teklif, depo ve saha akışını birlikte açalım. Kredi kartı gerekmez.',
    to: '/iletisim',
    icon: Headset,
  },
  {
    title: 'Kurulum ve geliştirme',
    body: 'Veri aktarımı ve firmanıza özel kurulum görüşmede netleşir.',
    to: '/iletisim',
    icon: Wrench,
  },
  {
    title: 'Yönetim paneli',
    body: 'Hesabınız açıksa panele girin. Yeni hesap için demo bırakın.',
    to: 'portal',
    icon: Monitor,
  },
] as const

usePageSeo({
  title: 'Yardım · İskele Pro',
  description: 'Sık sorulan sorulara hızlı yanıtlar. Kuruma özel kurulum ve detaylı tanıtım için ücretsiz demo görüşmesi.',
})

useJsonLd('ld-faq', {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: helpTopics.map(topic => ({
    '@type': 'Question',
    name: topic.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: topic.body,
    },
  })),
})
</script>

<template>
  <div>
    <SitePageHero
      eyebrow="Yardım"
      title="Başlangıçtan kuruluma, ihtiyacınız olan her yanıt burada."
      description="Sık sorulan sorulara hızlı yanıtlar. Kuruma özel kurulum ve detaylı tanıtım için ücretsiz demo görüşmesi."
    />
    <section class="border-b border-navy/10 bg-[#F6F7FA] py-14 md:py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Bir insana sorun</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Sorunuz var mı?
        </h2>
        <p class="mt-2 text-sm text-muted-foreground">
          Sorunuza bu sayfada yanıt bulamadıysanız iletişime geçin. Demo için kredi kartı gerekmez.
        </p>
        <div class="mt-6">
          <Button size="lg" class="bg-navy text-white hover:bg-navy-soft" as-child>
            <NuxtLink :to="localePath('/iletisim#talep')">Bir danışmanla görüşün</NuxtLink>
          </Button>
        </div>
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <Button
            v-for="size in companySizes"
            :key="size.id"
            variant="outline"
            class="rounded-full border-navy/15 bg-white"
            as-child
          >
            <NuxtLink :to="localePath(`/iletisim?olcek=${size.id}#talep`)">{{ size.label }}</NuxtLink>
          </Button>
        </div>
        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy underline-offset-2 hover:underline"
        >
          <MessageCircle class="size-4 text-[#3DDC84]" />
          WhatsApp ile yazın
        </a>
      </div>

      <div class="mx-auto mt-10 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <a
          v-for="action in actions"
          :key="action.title"
          :href="action.to === 'portal' ? config.public.appUrl : localePath(action.to)"
          class="rounded-2xl bg-white p-5 text-left ring-1 ring-navy/10 transition-colors hover:ring-navy/25"
        >
          <span class="flex size-9 items-center justify-center rounded-xl bg-navy text-gold">
            <component :is="action.icon" class="size-4" stroke-width="1.75" />
          </span>
          <h3 class="mt-4 text-sm font-semibold text-navy">{{ action.title }}</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">{{ action.body }}</p>
        </a>
      </div>
    </section>

    <section class="bg-white py-14 md:py-16">
      <div class="mx-auto max-w-3xl px-6">
        <div class="text-center">
          <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Sık sorulan sorular</p>
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
            Paket, kullanıcı ve kurulum
          </h2>
        </div>
        <Accordion type="single" collapsible class="mt-8 rounded-2xl border border-navy/10 bg-[#F6F7FA] px-5">
          <AccordionItem v-for="topic in helpTopics" :key="topic.title" :value="topic.title">
            <AccordionTrigger class="text-navy">{{ topic.title }}</AccordionTrigger>
            <AccordionContent class="text-muted-foreground">{{ topic.body }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  </div>
</template>
