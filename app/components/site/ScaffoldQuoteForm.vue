<script setup lang="ts">
import { Check } from '@lucide/vue'
import { formatScaffoldSummary, type ScaffoldEstimate, type ScaffoldInputs } from '~/data/scaffoldCalc'

const props = defineProps<{
  inputs: ScaffoldInputs
  estimate: ScaffoldEstimate | null
}>()

const config = useRuntimeConfig()
const localePath = useI18nPath()

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  message: '',
  website: '',
  consent: false,
})
const sent = ref(false)
const sending = ref(false)
const error = ref('')

const summary = computed(() => {
  if (!props.estimate) return ''
  return formatScaffoldSummary(props.inputs, props.estimate)
})

const whatsappHref = computed(() => {
  const base = String(config.public.whatsappUrl || 'https://wa.me/905323919755')
  const text = summary.value
    ? `Merhaba, bu cephe ölçülerine göre teklif almak istiyorum.\n${summary.value}`
    : 'Merhaba, cephe iskelesi için teklif almak istiyorum.'
  const sep = base.includes('?') ? '&' : '?'
  return `${base}${sep}text=${encodeURIComponent(text)}`
})

async function submit() {
  if (!form.company || !form.name || !form.email || !form.consent || !props.estimate || sending.value) return
  sending.value = true
  error.value = ''
  try {
    await $fetch('/api/demo', {
      method: 'POST',
      body: {
        company: form.company,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        website: form.website,
        consent: form.consent,
        source: 'iskele-hesapla',
        scaffold: {
          ...props.inputs,
          ...props.estimate,
        },
      },
    })
    sent.value = true
  }
  catch {
    error.value = 'Talebiniz gönderilemedi. Telefon veya WhatsApp ile ulaşın.'
  }
  finally {
    sending.value = false
  }
}
</script>

<template>
  <div>
    <form v-if="!sent" class="space-y-4" @submit.prevent="submit">
      <div class="grid gap-3.5 sm:grid-cols-2">
        <div class="space-y-1.5 sm:col-span-2">
          <Label for="calc-company" class="text-xs">Firma</Label>
          <Input id="calc-company" v-model="form.company" required placeholder="İskele kiralama ve satış firmanız" class="h-11" />
        </div>
        <div class="space-y-1.5">
          <Label for="calc-name" class="text-xs">Ad soyad</Label>
          <Input id="calc-name" v-model="form.name" required placeholder="Yetkili adı" class="h-11" />
        </div>
        <div class="space-y-1.5">
          <Label for="calc-phone" class="text-xs">Telefon</Label>
          <Input id="calc-phone" v-model="form.phone" placeholder="05xx xxx xx xx" class="h-11" />
        </div>
        <div class="space-y-1.5 sm:col-span-2">
          <Label for="calc-email" class="text-xs">E-posta</Label>
          <Input id="calc-email" v-model="form.email" type="email" required placeholder="ornek@firma.com" class="h-11" />
        </div>
        <div class="space-y-1.5 sm:col-span-2">
          <Label for="calc-message" class="text-xs">Not</Label>
          <Textarea id="calc-message" v-model="form.message" rows="3" placeholder="Şantiye, teslim tarihi veya özel durum..." class="min-h-20" />
        </div>
        <div class="hidden" aria-hidden="true">
          <label for="calc-website">Website</label>
          <input id="calc-website" v-model="form.website" type="text" tabindex="-1" autocomplete="off">
        </div>
      </div>
      <label class="flex items-start gap-2.5 text-xs leading-5 text-navy/75">
        <input
          id="calc-consent"
          v-model="form.consent"
          type="checkbox"
          required
          class="mt-0.5 size-3.5 shrink-0 accent-navy"
        >
        <span>
          {{ $t('form.consentBefore') }}
          <NuxtLink :to="localePath('/kvkk')" class="font-medium text-navy underline-offset-2 hover:underline">
            {{ $t('form.consentLink') }}
          </NuxtLink>
          {{ $t('form.consentAfter') }}
        </span>
      </label>
      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
      <Button
        type="submit"
        :disabled="sending || !estimate"
        class="h-11 w-full rounded-xl bg-gold text-sm font-semibold text-navy-deep hover:bg-gold-hover disabled:opacity-60"
      >
        {{ sending ? 'Gönderiliyor...' : 'Bu ölçülere göre teklif al' }}
      </Button>
      <p class="text-center text-xs text-muted-foreground">
        Ön hesap bağlayıcı değildir ·
        <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="text-navy underline-offset-2 hover:underline">
          WhatsApp ile yazın
        </a>
      </p>
    </form>
    <div
      v-else
      class="flex flex-col items-center justify-center px-2 py-8 text-center md:py-12"
    >
      <span class="flex size-16 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_14px_32px_-14px_rgb(34_197_94/0.85)]">
        <Check class="size-8" stroke-width="2.8" />
      </span>
      <p class="mt-5 font-semibold tracking-tight text-navy text-[1.65rem] leading-tight">
        Teşekkürler
      </p>
      <p class="mt-3 max-w-[20rem] text-[15px] leading-7 text-navy/70">
        Ölçülerinizi aldık. En kısa sürede
        <span class="whitespace-nowrap font-medium text-navy">{{ config.public.email }}</span>
        adresinden size dönüş yapacağız.
      </p>
    </div>
  </div>
</template>
