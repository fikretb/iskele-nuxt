<script setup lang="ts">
import { companySizes } from '~/data/site'

withDefaults(defineProps<{
  embedId?: boolean
  title?: string
  compact?: boolean
}>(), {
  embedId: true,
  title: 'Demo talebi',
  compact: false,
})

const { href: whatsappHref } = useWhatsAppLink()

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  size: 'small',
  message: '',
})
const sent = ref(false)

function submit() {
  if (!form.company || !form.name || !form.email) return
  sent.value = true
}
</script>

<template>
  <component
    :is="compact ? 'div' : 'section'"
    :id="embedId ? 'demo' : undefined"
    :class="compact
      ? 'rounded-md border border-navy/15 bg-white p-5 shadow-[0_1px_0_rgb(11_32_81/0.04)]'
      : 'scroll-mt-20 border-t border-navy/10 bg-navy/[0.03] py-14 md:py-16'"
  >
    <div :class="compact ? '' : 'mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-start'">
      <div v-if="!compact" class="pt-1">
        <p class="text-xs font-semibold tracking-[0.14em] text-gold uppercase">İletişim</p>
        <h2 class="mt-2 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          {{ title }}
        </h2>
        <p class="mt-3 text-sm text-muted-foreground">
          Firmanızın teklif, depo ve saha süreçlerini birlikte değerlendirelim. Demo hesabı için kredi kartı gerekmez.
        </p>
        <ul class="mt-6 space-y-2 border-l border-navy/15 pl-4 text-sm text-navy/80">
          <li>Teklif, PDF ve 3D görünüm</li>
          <li>Depo, sevkiyat ve saha takibi</li>
          <li>Şantiye bazlı finansal görünürlük</li>
        </ul>
      </div>

      <div :class="compact ? '' : 'rounded-md border border-navy/15 bg-white p-5 shadow-[0_1px_0_rgb(11_32_81/0.04)] md:p-6'">
        <h3 v-if="compact" class="mb-4 text-sm font-semibold tracking-wide text-navy uppercase">{{ title }}</h3>
        <form v-if="!sent" class="space-y-3.5" @submit.prevent="submit">
          <div class="grid gap-3.5 sm:grid-cols-2">
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-company" class="text-xs">Firma</Label>
              <Input id="landing-company" v-model="form.company" required placeholder="İskele kiralama firmanız" class="h-9" />
            </div>
            <div class="space-y-1.5">
              <Label for="landing-name" class="text-xs">Ad soyad</Label>
              <Input id="landing-name" v-model="form.name" required placeholder="Yetkili adı" class="h-9" />
            </div>
            <div class="space-y-1.5">
              <Label for="landing-phone" class="text-xs">Telefon</Label>
              <Input id="landing-phone" v-model="form.phone" placeholder="05xx xxx xx xx" class="h-9" />
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-email" class="text-xs">E-posta</Label>
              <Input id="landing-email" v-model="form.email" type="email" required placeholder="ornek@firma.com" class="h-9" />
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-size" class="text-xs">Firma ölçeği</Label>
              <select
                id="landing-size"
                v-model="form.size"
                class="border-input bg-background h-9 w-full border px-3 text-sm"
              >
                <option v-for="size in companySizes" :key="size.id" :value="size.id">
                  {{ size.label }}
                </option>
              </select>
            </div>
            <div class="space-y-1.5 sm:col-span-2">
              <Label for="landing-message" class="text-xs">Not</Label>
              <Textarea id="landing-message" v-model="form.message" rows="3" placeholder="Şantiye sayısı, mevcut süreçleriniz..." class="min-h-20" />
            </div>
          </div>
          <Button type="submit" class="h-11 w-full rounded-md bg-gold text-sm font-semibold text-navy-deep hover:bg-gold-hover">
            Demo talebi gönder
          </Button>
          <p class="text-center text-xs text-muted-foreground">
            Kredi kartı gerekmez ·
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="text-navy underline-offset-2 hover:underline">
              WhatsApp ile yazın
            </a>
          </p>
        </form>
        <p v-else class="text-sm text-muted-foreground">
          Talebiniz alındı. En kısa sürede {{ form.email }} adresinden dönüş yapılır.
        </p>
      </div>
    </div>
  </component>
</template>
