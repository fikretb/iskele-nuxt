<script setup lang="ts">
defineProps<{
  title?: string
  note?: string
}>()
</script>

<template>
  <section class="border-t bg-white py-20">
    <div class="mx-auto max-w-3xl px-6 text-center">
      <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
        {{ title ?? 'Büyüme potansiyelinizi ortaya çıkarın' }}
      </h2>
      <p class="mt-3 text-muted-foreground">
        {{ note ?? 'Hemen başlayın. Demo hesabı kredi kartı istemez; anında bakılır.' }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <Button size="lg" class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
          <NuxtLink to="/iletisim">Hemen başlayın — ücretsiz deneyin</NuxtLink>
        </Button>
        <Button size="lg" variant="outline" as-child>
          <NuxtLink to="/iletisim">Bir danışmanla görüşün</NuxtLink>
        </Button>
      </div>
      <p class="mt-4 text-xs text-muted-foreground">Kredi kartı bilgisi istemiyoruz · Anında erişim</p>
    </div>
  </section>
</template>
