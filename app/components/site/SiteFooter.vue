<script setup lang="ts">
import { megaColumns } from '~/data/site'

const config = useRuntimeConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t bg-navy text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div class="space-y-4">
        <BrandLogo on-dark />
        <p class="text-sm text-white/70">
          İskele kiralama, teklif, saha, depo, muhasebe ve insan kaynakları. Kullanımı sade, kayıtlar birbirine bağlı.
        </p>
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">Uygulamalar</p>
        <ul class="space-y-2 text-sm text-white/80">
          <li v-for="column in megaColumns" :key="column.id">
            <NuxtLink :to="`/uygulamalar#${column.id}`" class="hover:text-white">{{ column.name }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/uygulamalar" class="hover:text-white">Tüm uygulamalar</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">Kaynaklar</p>
        <ul class="space-y-2 text-sm text-white/80">
          <li>
            <NuxtLink to="/sektor" class="hover:text-white">Sektör</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/fiyatlandirma" class="hover:text-white">Fiyatlandırma</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/yardim" class="hover:text-white">Yardım</NuxtLink>
          </li>
          <li>
            <a :href="config.public.appUrl" class="hover:text-white">Portal</a>
          </li>
        </ul>
      </div>
      <div>
        <p class="mb-3 text-xs font-semibold tracking-wider text-gold uppercase">Hizmetler</p>
        <ul class="space-y-2 text-sm text-white/80">
          <li>
            <NuxtLink to="/iletisim" class="hover:text-white">Ücretsiz deneyin</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/iletisim" class="hover:text-white">Bir danışmanla görüşün</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/iletisim" class="hover:text-white">Demo randevusu alın</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <span>© {{ year }} İskele Pro</span>
        <span>İskele kiralama operasyonu için entegre uygulama seti. Veriniz sizin tenant’ınızda kalır.</span>
      </div>
    </div>
  </footer>
</template>
