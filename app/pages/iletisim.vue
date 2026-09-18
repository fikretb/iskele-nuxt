<script setup lang="ts">
import { companySizes } from '~/data/site'

useSeoMeta({
  title: 'İletişim · İskele Pro',
  description: 'İskele Pro demosu ve fiyatlandırma için iletişime geçin. Kredi kartı yok.',
})

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
  <div>
    <SitePageHero
      eyebrow="İletişim"
      title="Demo randevusu alın"
      description="Firmanızın teklif, depo ve saha akışını konuşalım. Ölçeğinizi seçin; demo hesabı kredi kartı istemez."
    />
    <section class="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Bir danışmanla görüşün</h2>
        <p class="text-muted-foreground">
          Kaç şantiyeniz olduğu, teklifi kimin kestiği ve deponun nasıl işlediği yeterli.
          Form kaydı bu sitede tutulmaz; ekibimiz e-posta üzerinden döner.
        </p>
        <ul class="space-y-2 text-sm">
          <li>Teklif motoru, PDF ve 3D görünüm</li>
          <li>Depo fişi, saha QR, şantiye bakiyesi</li>
          <li>Kullanıcı yetkileri ve çoklu firma</li>
        </ul>
        <div class="flex flex-wrap gap-2 pt-2">
          <Button variant="outline" as-child>
            <NuxtLink to="/fiyatlandirma">Fiyatlandırmaya göz atın</NuxtLink>
          </Button>
          <Button variant="outline" as-child>
            <NuxtLink to="/uygulamalar">Tüm uygulamalar</NuxtLink>
          </Button>
        </div>
      </div>

      <Card class="bg-white">
        <CardHeader>
          <CardTitle>Demo talep formu</CardTitle>
          <CardDescription>Zorunlu alanlar: firma, ad, e-posta.</CardDescription>
        </CardHeader>
        <CardContent>
          <form v-if="!sent" class="space-y-4" @submit.prevent="submit">
            <div class="space-y-2">
              <Label for="company">Firma</Label>
              <Input id="company" v-model="form.company" required placeholder="İskele kiralama firmanız" />
            </div>
            <div class="space-y-2">
              <Label for="name">Ad soyad</Label>
              <Input id="name" v-model="form.name" required placeholder="Yetkili adı" />
            </div>
            <div class="space-y-2">
              <Label for="email">E-posta</Label>
              <Input id="email" v-model="form.email" type="email" required placeholder="ornek@firma.com" />
            </div>
            <div class="space-y-2">
              <Label for="phone">Telefon</Label>
              <Input id="phone" v-model="form.phone" placeholder="05xx xxx xx xx" />
            </div>
            <div class="space-y-2">
              <Label for="size">Firma ölçeği</Label>
              <select
                id="size"
                v-model="form.size"
                class="border-input bg-background h-9 w-full rounded-md border px-3 text-sm"
              >
                <option v-for="size in companySizes" :key="size.id" :value="size.id">
                  {{ size.label }}
                </option>
              </select>
            </div>
            <div class="space-y-2">
              <Label for="message">Not</Label>
              <Textarea id="message" v-model="form.message" placeholder="Şantiye sayısı, kullandığınız programlar..." />
            </div>
            <Button type="submit" class="w-full">Gönder</Button>
          </form>
          <p v-else class="text-sm text-muted-foreground">
            Talebiniz alındı. En kısa sürede {{ form.email }} adresinden dönüş yapılır.
          </p>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
