<script setup lang="ts">
const { href: whatsappHref } = useWhatsAppLink()
</script>

<template>
  <section class="relative overflow-hidden bg-navy-deep text-white">
    <div
      class="pointer-events-none absolute inset-0"
      style="background: linear-gradient(135deg, rgb(5 14 40) 0%, rgb(11 32 81) 55%, rgb(18 40 92) 100%);"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-30"
      style="background: radial-gradient(ellipse at 70% 40%, rgb(232 148 20 / 22%), transparent 60%);"
    />
    <div class="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:gap-14 md:py-20 lg:grid-cols-2">
      <div>
        <h1 class="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.08]">
          Tekliften sahaya,<br class="hidden sm:block"> tek kayıt.
        </h1>
        <p class="mt-5 max-w-md text-base text-white/70 md:text-lg">
          İskele kiralama operasyonunuz için teklif, depo, saha ve finans aynı platformda.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <Button
            size="lg"
            class="h-11 rounded-md bg-gold px-7 text-sm font-semibold text-navy-deep shadow-sm hover:bg-gold-hover"
            as-child
          >
            <a href="#demo">Ücretsiz demo</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="h-11 rounded-md border-white/35 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/12 hover:text-white"
            as-child
          >
            <a :href="whatsappHref" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>
        <p class="mt-3.5 text-xs text-white/45">
          Ücretsiz demo · kredi kartı gerekmez
        </p>
      </div>

      <div class="overflow-hidden rounded-lg border border-white/15 bg-navy/70">
        <div class="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <span class="text-[11px] font-medium text-white/50">Teklif &amp; şantiye paneli</span>
          <span class="rounded bg-gold/20 px-2 py-0.5 text-[10px] font-semibold text-gold">Onaylı</span>
        </div>
        <div class="space-y-px bg-white/10 p-px">
          <div class="flex items-center justify-between bg-navy-deep px-4 py-3">
            <div>
              <p class="text-[11px] text-white/40">Teklif</p>
              <p class="text-sm font-medium">#124 · Cephe iskelesi</p>
            </div>
            <span class="border border-gold/40 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-gold uppercase">Onaylandı</span>
          </div>
          <div class="grid grid-cols-2 gap-px">
            <div class="bg-navy-deep px-4 py-3">
              <p class="text-[11px] text-white/40">Şantiye bakiyesi</p>
              <p class="mt-0.5 text-base font-semibold text-gold">₺186.400</p>
            </div>
            <div class="bg-navy-deep px-4 py-3">
              <p class="text-[11px] text-white/40">Saha stok</p>
              <p class="mt-0.5 text-base font-semibold">842 parça</p>
            </div>
          </div>
          <div class="bg-navy-deep px-4 py-3">
            <p class="text-[11px] text-white/40">Son sevkiyat</p>
            <p class="mt-0.5 text-sm">SF-0891 · Teslim alındı · Stok güncellendi</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
