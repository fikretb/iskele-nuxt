# İskele Pro One-page Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ana sayfayı demo-form odaklı satış one-page’ine çevirmek; floating WhatsApp (placeholder) eklemek.

**Architecture:** Mevcut Nuxt layout (`SiteHeader` / `SiteFooter`) korunur. Landing bölümleri `app/components/site/Landing*.vue` bileşenlerine ayrılır; `index.vue` sadece sıralar. WhatsApp URL `runtimeConfig.public.whatsappUrl` üzerinden gelir. Demo formu paylaşımlı `LandingDemoForm` olur; `/iletisim` aynı bileşeni kullanır. Gerçek screenshot yok — hero’da CSS ERP mock UI.

**Tech Stack:** Nuxt 4, Vue 3, Tailwind 4, shadcn-vue, `@lucide/vue`, mevcut `~/data/site` + `~/data/apps`, Geist + navy/gold brand token’ları.

**Spec:** `docs/superpowers/specs/2026-09-20-iskele-pro-onepage-design.md`

## Global Constraints

- Primary CTA hedefi: `#demo` form (ücretsiz demo)
- WhatsApp placeholder: `https://wa.me/905000000000` + prefill mesajı
- Marka: navy `#0B2051`, gold `#E89414`, Geist — mor/indigo/cream AI look yok
- Hero’da kart, badge, floating sticker yok
- 24’lük düz ikon duvarı ana hikâye değil — kategorili modüller
- Bu iterasyonda form API / CRM yok (client success state)
- Commit yalnızca kullanıcı isterse; aksi halde commit adımlarını atla
- Test runner yok — doğrulama: `npm run build` + tarayıcıda görsel kontrol

## File map

| File | Responsibility |
|------|----------------|
| `nuxt.config.ts` | `public.whatsappUrl`, `public.whatsappMessage` |
| `app/data/site.ts` | `landingTrust`, `landingWorkflow` (veya mevcut veriyi export), nav Demo link |
| `app/composables/useWhatsAppLink.ts` | Prefill’li `wa.me` URL üretir |
| `app/components/site/WhatsAppFab.vue` | Sabit FAB |
| `app/components/site/LandingHero.vue` | Hero + ERP mock |
| `app/components/site/LandingTrust.vue` | Kısa güven şeridi |
| `app/components/site/LandingWorkflow.vue` | 5 adımlı akış |
| `app/components/site/LandingModules.vue` | Kategori sekmeli uygulamalar |
| `app/components/site/LandingCompare.vue` | Önce/sonra |
| `app/components/site/LandingPricing.vue` | 3 paket özeti |
| `app/components/site/LandingDemoForm.vue` | Demo form (`#demo`) |
| `app/pages/index.vue` | Bölümleri sırala |
| `app/layouts/default.vue` | `WhatsAppFab` ekle |
| `app/components/site/SiteHeader.vue` | Primary CTA → `/#demo` |
| `app/pages/iletisim.vue` | `LandingDemoForm` reuse |

---

### Task 1: WhatsApp config + composable + FAB

**Files:**
- Modify: `nuxt.config.ts`
- Create: `app/composables/useWhatsAppLink.ts`
- Create: `app/components/site/WhatsAppFab.vue`
- Modify: `app/layouts/default.vue`

**Interfaces:**
- Consumes: `useRuntimeConfig().public.whatsappUrl`, `whatsappMessage`
- Produces: `useWhatsAppLink()` → `{ href: ComputedRef<string> }`; `WhatsAppFab` global layout’ta

- [ ] **Step 1: `nuxt.config.ts` public config ekle**

`runtimeConfig.public` içine ekle:

```ts
runtimeConfig: {
  public: {
    appUrl: 'https://app.iskelepro.com',
    whatsappUrl: 'https://wa.me/905000000000',
    whatsappMessage: 'Merhaba, İskele Pro demo hakkında bilgi almak istiyorum.',
  },
},
```

- [ ] **Step 2: Composable yaz**

`app/composables/useWhatsAppLink.ts`:

```ts
export function useWhatsAppLink() {
  const config = useRuntimeConfig()
  const href = computed(() => {
    const base = String(config.public.whatsappUrl || 'https://wa.me/905000000000')
    const text = String(config.public.whatsappMessage || '')
    if (!text) return base
    const sep = base.includes('?') ? '&' : '?'
    return `${base}${sep}text=${encodeURIComponent(text)}`
  })
  return { href }
}
```

- [ ] **Step 3: FAB bileşeni**

`app/components/site/WhatsAppFab.vue` — sabit sağ alt, yeşil daire, WhatsApp SVG, `target="_blank"` `rel="noopener noreferrer"`, `aria-label="WhatsApp ile yazın"`, `pb-safe` / `bottom-6 right-6`, `z-40`.

İkon için inline SVG (basit official-style path) kullan; harici paket ekleme.

- [ ] **Step 4: Layout’a ekle**

`app/layouts/default.vue`:

```vue
<template>
  <div>
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
    <WhatsAppFab />
  </div>
</template>
```

- [ ] **Step 5: Doğrula**

Run: `npm run build`  
Expected: build success; layout’ta FAB compile olur.

---

### Task 2: Landing data + header Demo CTA

**Files:**
- Modify: `app/data/site.ts`
- Modify: `app/components/site/SiteHeader.vue`

**Interfaces:**
- Produces: `landingTrust`, `landingWorkflow` exports; header gold buton `/#demo`

- [ ] **Step 1: `site.ts` landing verisi**

Dosyanın uygun yerine ekle (mevcut `industryJourney` / `pricingPlans` kalsın):

```ts
export const landingTrust = [
  { title: 'Kredi kartı yok', body: 'Demo hesabı anında; kart istemiyoruz.' },
  { title: 'Tek tenant', body: 'Firmanızın verisi başka kiracıya görünmez.' },
  { title: 'İskele’ye özel', body: 'Cephe, kiralama süresi, sevkiyat fişi omurgadır.' },
  { title: 'Sahaya iner', body: 'QR, imza ve token’lı link ile teslim.' },
] as const

export const landingWorkflow = [
  {
    step: '01',
    title: 'Talep ve teklif',
    body: 'Cephe ölçüsünden malzeme, PDF ve 3D aynı kayıttan.',
  },
  {
    step: '02',
    title: 'Şantiye ve kiralama',
    body: 'Onaylanan iş şantiye kartında; süre ve saha stoku birlikte.',
  },
  {
    step: '03',
    title: 'Depo sevkiyat',
    body: 'Çıkan / dönen fiş, QR ve imza ile stok güncellenir.',
  },
  {
    step: '04',
    title: 'Saha teslim',
    body: 'Montaj ekibi fişi telefonda görür; ofisle aynı kayıt.',
  },
  {
    step: '05',
    title: 'Tahsilat ve puantaj',
    body: 'Fatura, çek ve yevmiye şantiye bakiyesine akar.',
  },
] as const
```

- [ ] **Step 2: Header CTA**

`SiteHeader.vue` içinde gold buton:

```vue
<Button class="bg-gold text-navy-deep hover:bg-gold-hover" as-child>
  <NuxtLink to="/#demo">Ücretsiz demo</NuxtLink>
</Button>
```

Mobil sheet içindeki aynı CTA’yı da `/#demo` yap (dosyadaki diğer “Ücretsiz deneyin” / iletisim linklerini kontrol et).

- [ ] **Step 3: Doğrula**

Run: `npm run build`  
Expected: success.

---

### Task 3: LandingHero + LandingTrust

**Files:**
- Create: `app/components/site/LandingHero.vue`
- Create: `app/components/site/LandingTrust.vue`

**Interfaces:**
- Consumes: `useWhatsAppLink()`, `BRAND_ASSETS` / `BrandLogo`
- Produces: Hero section; Trust section

- [ ] **Step 1: `LandingHero.vue`**

Gereksinimler:
- Section: navy gradient (`from-navy-deep via-navy to-navy-soft`), text white/gold
- Üstte logo (on-dark) + “İskele Pro”
- H1: `İskele işinizin tamamı için tek platform.`
- P: `Tekliften sahaya, depodan maaşa — tüm uygulamalar aynı kayıtta.`
- CTA: gold `Ücretsiz demo` → `#demo`; outline/ghost `WhatsApp` → `href` from composable
- Sağda (desktop) veya altta (mobile): ERP mock — yuvarlatılmış pencere çerçevesi, üstte 3 nokta, içinde sahte satırlar (Teklif #124 · Onaylandı, Şantiye Bakiyesi, Sevkiyat fişi). Kart/badge overlay yok.
- Hafif motion: `animate-in fade-in` veya CSS `@keyframes` ile opacity/translate (abartısız)

- [ ] **Step 2: `LandingTrust.vue`**

`landingTrust` map; 2×2 / 4 kolon grid; kısa title + body; border-y, beyaz/muted zemin; ikon şart değil.

- [ ] **Step 3: Doğrula**

Geçici olarak `index.vue`’ya sadece bu iki bileşeni koyup `npm run build` — veya Task 7’ye kadar build’i bileşen dosyalarıyla bırak (Nuxt auto-import). Build success.

---

### Task 4: LandingWorkflow + LandingModules

**Files:**
- Create: `app/components/site/LandingWorkflow.vue`
- Create: `app/components/site/LandingModules.vue`

**Interfaces:**
- Consumes: `landingWorkflow`, `appCategories`, `productApps`, `AppGlyph` / `AppTile`
- Produces: workflow + tabbed modules sections

- [ ] **Step 1: `LandingWorkflow.vue`**

- Başlık: `Ofisten sahaya tek kayıt`
- Destek cümlesi: tek kayıt vurgusu
- `landingWorkflow` için 5 kolon (md+) / dikey (mobile); step numarası gold
- Alt CTA: `Demo’da bu akışı görün` → `#demo`

- [ ] **Step 2: `LandingModules.vue`**

```ts
import { appCategories, productApps, type AppCategoryId } from '~/data/apps'

const active = ref<AppCategoryId>(appCategories[0]!.id)
const visible = computed(() =>
  productApps.filter(app => app.category === active.value),
)
```

- Sekmeler: `appCategories` butonları; aktif: navy/gold border
- Grid: `AppTile` ile `visible` listesi (max görüntüleme — hepsi kategori içinde gelsin, scroll yoksa 2–3 satır OK)
- Alt link: `NuxtLink` `/uygulamalar` — `Tüm uygulamalara göz atın →`
- 24’lük tek grid kullanma

- [ ] **Step 3: Doğrula**

`npm run build` → success.

---

### Task 5: LandingCompare + LandingPricing

**Files:**
- Create: `app/components/site/LandingCompare.vue`
- Create: `app/components/site/LandingPricing.vue`

**Interfaces:**
- Consumes: `withoutUs`, `withUs`, `quote`, `pricingPlans`, `pricingNotes`
- Produces: compare + pricing sections

- [ ] **Step 1: `LandingCompare.vue`**

- H2: `Bir de İskele Pro’suz hayal edin` (veya daha kısa: `Dağınık ofis mi, tek kayıt mı?`)
- İki kolon: sol muted “Dağınık ofis” + `withoutUs`; sağ navy/gold ring “İskele Pro” + `withUs`
- Altında quote italic

- [ ] **Step 2: `LandingPricing.vue`**

- H2: paketlere göre ekran seti
- `pricingPlans` map; `featured` olan Operasyon: gold ring / navy başlık
- Özellik listesi; CTA her pakette `NuxtLink` veya `<a href="#demo">Demo iste</a>`
- Altında `pricingNotes` kısa satırlar
- Fiyat rakamı yok

- [ ] **Step 3: Doğrula**

`npm run build` → success.

---

### Task 6: LandingDemoForm + iletisim reuse

**Files:**
- Create: `app/components/site/LandingDemoForm.vue`
- Modify: `app/pages/iletisim.vue`

**Interfaces:**
- Consumes: `companySizes`, `useWhatsAppLink`
- Produces: `LandingDemoForm` with root `id="demo"` (prop ile kapatılabilir)

- [ ] **Step 1: Form bileşeni**

Props:

```ts
defineProps<{
  embedId?: boolean // default true → id="demo"
  title?: string
}>()
```

Logic (mevcut iletisim ile aynı):

```ts
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
```

UI:
- Section `id="demo"` when `embedId !== false`
- Navy veya muted band; form beyaz panel
- Alanlar: Firma, Ad, E-posta, Telefon, Ölçek select, Not
- Submit: `Ücretsiz demo hesabı açın` (gold)
- Alt: `Kredi kartı yok` + WhatsApp link (`useWhatsAppLink`)
- Success: e-posta adresine dönüş mesajı

- [ ] **Step 2: `iletisim.vue` sadeleştir**

Hero + kısa metin kalsın; sağdaki Card form yerine:

```vue
<LandingDemoForm :embed-id="false" />
```

Duplicate reactive form kodunu sil.

- [ ] **Step 3: Doğrula**

`npm run build` → success.

---

### Task 7: index.vue birleştir + header polish

**Files:**
- Modify: `app/pages/index.vue`
- Modify: `app/components/site/SiteCtaBand.vue` (opsiyonel — index’te artık kullanma; veya CTA’ları `#demo` yap)

**Interfaces:**
- Consumes: tüm Landing* bileşenleri

- [ ] **Step 1: `index.vue` yeniden yaz**

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'İskele Pro — İskele işinizin tamamı için tek platform',
  description: 'Teklif, 3D, şantiye, depo, saha, muhasebe ve insan kaynakları. Basit, bağlı, iskele kiralama firmasına göre. Ücretsiz demo.',
})
</script>

<template>
  <div>
    <LandingHero />
    <LandingTrust />
    <LandingWorkflow />
    <LandingModules />
    <LandingCompare />
    <LandingPricing />
    <LandingDemoForm />
  </div>
</template>
```

Eski section’ları ve kullanılmayan import’ları kaldır. `SiteCtaBand` index’ten çıksın (form zaten CTA).

- [ ] **Step 2: Smooth scroll (opsiyonel ama önerilir)**

`app/assets/css/tailwind.css` veya `app.vue`’da:

```css
html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Build + manuel checklist**

Run: `npm run build`  
Expected: success.

Manuel (`npm run dev`):
- [ ] Hero’da marka + demo + WhatsApp + mock UI
- [ ] Modül sekmeleri kategori değiştiriyor
- [ ] `#demo` scroll çalışıyor
- [ ] Form zorunlu alan + success state
- [ ] FAB WhatsApp placeholder açıyor
- [ ] Mobil: tek kolon, FAB formu tamamen örtmez

---

## Spec coverage checklist

| Spec requirement | Task |
|------------------|------|
| Hero brand + CTA + ERP mock | 3 |
| Trust strip | 3 |
| 5-step workflow | 4 |
| Categorized modules | 4 |
| Before/after + quote | 5 |
| Pricing 3 plans → demo | 5 |
| Demo form `#demo` | 6–7 |
| WhatsApp FAB placeholder | 1 |
| Header Demo CTA | 2 |
| No form API this iteration | 6 |
| Brand navy/gold | all |
| index composition | 7 |

## Self-review notes

- Placeholder scan: WhatsApp numarası bilinçli placeholder (config).
- Test runner yok; build = gate.
- Commit adımları kullanıcı kuralına bağlı — varsayılan atla.
- `SiteCtaBand` başka sayfalarda kalabilir; index kullanmaz.
