<script setup lang="ts">
import { featuredApps, pillars, productivityPoints, quote, valueProps, withUs, withoutUs } from '~/data/site'
import { productApps } from '~/data/apps'

useSeoMeta({
  title: 'İskele Pro — İskele işinizin tamamı için tek platform',
  description: 'Teklif, 3D, şantiye, depo, saha, muhasebe ve insan kaynakları. Basit, bağlı, iskele kiralama firmasına göre.',
})
</script>

<template>
  <div>
    <section class="bg-background">
      <div class="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h1 class="text-4xl font-semibold tracking-tight text-navy md:text-6xl">
          İskele işinizin tamamı için tek bir platform.
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Basit, işlevsel ve bütçenize uygun. Tekliften sahaya, depodan maaşa — tüm uygulamalar aynı kayıtta.
        </p>
        <p class="mt-4 text-base font-medium text-navy">
          Demo ile tüm uygulamalar · kredi kartı yok
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
            <NuxtLink to="/iletisim">Hemen başlayın — ücretsiz deneyin</NuxtLink>
          </Button>
          <Button size="lg" variant="outline" as-child>
            <NuxtLink to="/iletisim">Bir danışmanla görüşün</NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <section class="border-y bg-white py-12">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <NuxtLink
            v-for="app in featuredApps"
            :key="app.slug"
            :to="`/uygulamalar/${app.slug}`"
            class="flex flex-col items-center gap-2 rounded-xl px-2 py-4 text-center hover:bg-muted"
          >
            <span class="flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
              <AppGlyph :name="app.icon" class="size-6" />
            </span>
            <span class="text-xs font-medium leading-tight">{{ app.name }}</span>
          </NuxtLink>
        </div>
        <div class="mt-8 text-center">
          <Button variant="link" as-child>
            <NuxtLink to="/uygulamalar">Tüm uygulamalara göz atın →</NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-center text-3xl font-semibold tracking-tight md:text-4xl">
        Bir de İskele Pro’suz hayal edin
      </h2>
      <p class="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Geniş bir iskele uygulaması koleksiyonunun hizmetinizde olduğunu hayal edin.
        Geliştirmek istediğiniz bir süreç mi var — kiralama işinde karşılığı var.
      </p>
      <p class="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
        Ne karmaşık ne de masraflı; yetkisi olan ekranı açar. Her uygulama bir süreci sadeleştirir.
      </p>
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <Card class="bg-muted/40">
          <CardHeader>
            <CardTitle>Dağınık ofis</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li v-for="item in withoutUs" :key="item">{{ item }}</li>
            </ul>
          </CardContent>
        </Card>
        <Card class="border-gold/40 bg-white ring-1 ring-gold/30">
          <CardHeader>
            <CardTitle>İskele Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li v-for="item in withUs" :key="item">{{ item }}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <blockquote class="mx-auto mt-12 max-w-3xl text-center text-lg italic text-navy">
        “Her şeyi sadeleştirirseniz, sahayı da ofisi de yönetirsiniz.”
      </blockquote>
    </section>

    <section class="bg-navy py-20 text-white">
      <div class="mx-auto max-w-6xl px-6">
        <p class="text-sm font-medium text-gold">İş kalitesini sahaya indirin</p>
        <h2 class="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Üretkenlik için sadeleştirildi</h2>
        <p class="mt-3 max-w-2xl text-white/75">
          Gerçek tempo: daha az veri girişi, QR ile teslim, ofiste aynı fiş. Genel ERP vitrini değil; iskele sevkiyatının günü.
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div v-for="item in productivityPoints" :key="item.title" class="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-medium text-gold">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-white/75">{{ item.body }}</p>
          </div>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="item in valueProps" :key="item.title" class="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 class="font-medium">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-white/75">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">Kurumsal yazılım, doğru yerde.</h2>
      <p class="mt-3 max-w-2xl text-muted-foreground">
        Kullanımı kolay ve tamamen bağlı. {{ productApps.length }} uygulama, tek tenant, iskele kiralama işine göre.
      </p>
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card v-for="item in pillars" :key="item.title" class="bg-white">
          <CardHeader>
            <CardTitle>{{ item.title }}</CardTitle>
            <CardDescription>{{ item.body }}</CardDescription>
          </CardHeader>
          <CardFooter v-if="item.to">
            <Button variant="link" class="px-0" as-child>
              <NuxtLink :to="item.to">{{ item.link }}</NuxtLink>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>

    <section class="bg-muted/40 py-20">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <p class="text-lg leading-relaxed text-navy">“{{ quote.text }}”</p>
        <p class="mt-4 text-sm text-muted-foreground">{{ quote.role }}</p>
      </div>
    </section>

    <SiteCtaBand />
  </div>
</template>
