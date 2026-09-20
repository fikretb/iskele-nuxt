# İskele Pro — One-page tanıtım (satış landing)

**Tarih:** 2026-09-20  
**Durum:** Tasarım onaylandı — implementasyon öncesi kullanıcı incelemesi  
**Hedef (primary conversion):** Ücretsiz demo / deneme formu doldurtmak  
**İkincil kanal:** Floating WhatsApp (placeholder link)

## Bağlam

Mevcut Nuxt sitesinde içerik ve marka (navy `#0B2051`, gold `#E89414`, Geist) hazır; ana sayfa iskelet hissediyor: metin-ağırlıklı hero, 24 aynı lacivert uygulama kutusu, kart yığını, ürün UI vitrini yok. Alt sayfalar (`/uygulamalar`, `/sektor`, `/fiyatlandirma`, `/iletisim`) kalır; ana trafik ve satış hikâyesi `index` one-page’de toplanır.

## Kapsam

**Dahil:**
- `app/pages/index.vue` one-page yeniden yapılandırma
- Yeni site section bileşenleri (hero, workflow, modules, compare, pricing strip, demo form band, WhatsApp FAB)
- Mevcut `site.ts` / `apps.ts` verisinin yeniden kullanımı (gerekirse hafif genişletme)
- WhatsApp placeholder URL (runtime config veya `brand` / site sabiti)
- Nav’da Demo anchor; mevcut mega-nav korunabilir ama sadeleştirilebilir

**Hariç (bu iterasyon):**
- Gerçek WhatsApp numarası (sonra değiştirilir)
- Backend form API / CRM entegrasyonu (mevcut iletişim formu gibi client-side success state yeterli)
- Alt sayfaların tam yeniden tasarımı
- Gerçek ürün screenshot pipeline (CSS/HTML ERP mock UI ile başlanır)

## Sayfa mimarisi

Yukarıdan aşağı:

1. **SiteHeader** — linkler: Uygulamalar · Sektör · Fiyat · Demo (`#demo`)
2. **Hero** — marka + tek headline + tek cümle + CTA + full-bleed ERP UI mock
3. **Güven şeridi (kısa)** — 3–4 madde (kredi kartı yok, tek tenant, iskele’ye özel, QR/saha) — istatistik strip değil
4. **İş akışı** — 5 adım
5. **Modüller** — kategorili (sekme), 24’lük düz grid yok
6. **Önce / sonra** — dağınık ofis vs İskele Pro
7. **Fiyat özeti** — 3 paket, rakam yok, CTA → `#demo`
8. **Demo form** — `#demo` ana conversion
9. **SiteFooter**
10. **WhatsApp FAB** — sabit sağ alt

## Bölüm detayları

### Hero

- Tek kompozisyon: brand (logo + İskele Pro), bir headline, bir destek cümlesi, CTA grubu, dominant ERP UI görseli.
- Primary CTA: “Ücretsiz demo” → `#demo` smooth scroll.
- Secondary CTA: WhatsApp (aynı placeholder link).
- Kart / floating badge / promo chip yok.
- Arka plan: navy gradient / hafif doku; düz tek renk beyaz değil.
- Görsel: tarayıcı/app frame içinde mock UI (teklif listesi veya şantiye panosu); gerçek screenshot gelince swap.

### İş akışı

Başlık: “Ofisten sahaya tek kayıt.”  
Adımlar (mevcut `industryJourney` ile hizalı):

1. Talep / teklif (3D, PDF)
2. Şantiye / kiralama
3. Depo sevkiyat & iade (QR)
4. Saha teslim
5. Fatura / tahsilat / puantaj

Her adım: kısa başlık + 1 satır. Alt CTA: “Demo’da bu akışı görün” → `#demo`.

### Modüller

Kategoriler (mevcut `appCategories`): Ticari · Operasyon · Tedarik · Finans · İK · Yönetim.  
UI: sekme/filtre; seçili grupta 4–6 tile (glyph + isim + tagline).  
“Tüm uygulamalara göz atın →” → `/uygulamalar`.  
Placeholder düz lacivert kare hissi yok; `AppGlyph` + navy/gold.

### Önce / sonra

- Sol: `withoutUs` maddeleri (“Dağınık ofis”)
- Sağ: `withUs` maddeleri (“İskele Pro”) — gold vurgu
- Altında sadeleştirilmiş quote (`quote` from `site.ts`)
- Ağır Card grid’i yerine net iki kolon karşılaştırma

### Fiyat özeti

`pricingPlans` üç paket; Operasyon `featured`.  
Fiyat rakamı yok; notlar: `pricingNotes`.  
Her paket CTA → `#demo`.

### Demo form (`#demo`)

Alanlar (iletişim sayfasıyla uyumlu):
- Firma (zorunlu)
- Ad soyad (zorunlu)
- E-posta (zorunlu)
- Telefon
- Firma ölçeği (`companySizes`)
- Not (opsiyonel)

Primary: “Ücretsiz demo hesabı açın”  
Alt: “Kredi kartı yok · WhatsApp’tan da yazın”  
Submit: mevcut `iletisim.vue` ile aynı client success pattern (bu iterasyonda API yok).  
İsteğe bağlı: form bileşenini paylaşımlı hale getirip `/iletisim` ile reuse.

### WhatsApp FAB

- Sağ alt, `position: fixed`, z-index header üstü ama modal/sheet altında kalabilir
- Link: `https://wa.me/905000000000` (placeholder; `runtimeConfig.public.whatsappUrl` veya `site.ts` sabiti)
- Prefill text: `Merhaba, İskele Pro demo hakkında bilgi almak istiyorum.`
- `aria-label`: WhatsApp ile yazın
- Safe-area padding (mobil)
- İkon: resmi WhatsApp glyph (SVG), yeşil marka rengi kabul (kanal tanıma)

## Teknik notlar

- Stack: Nuxt 4 + mevcut shadcn-vue / Tailwind / brand token’ları
- Yeni bileşenler tercihen `app/components/site/` altında (`LandingHero`, `LandingWorkflow`, `LandingModules`, `LandingCompare`, `LandingPricing`, `LandingDemoForm`, `WhatsAppFab`)
- Motion: 2–3 bilinçli hareket (hero fade/slide, workflow stagger, FAB entrance) — abartısız
- SEO: mevcut index `useSeoMeta` korunur / güçlendirilir
- Erişilebilirlik: form label’ları, skip to `#demo`, FAB focusable

## Başarı kriterleri

- İlk viewport’ta marka + tek vaat + demo CTA + ERP UI görünür
- 24’lük ikon duvarı ana hikâye değil; kategorili modül seçimi
- Sayfada tek net conversion: demo form; WhatsApp her zaman erişilebilir
- Mobilde tek kolon akış, FAB içeriği örtmez
- Mevcut marka renkleri ve Geist korunur

## Bilinçli non-goals

- Multi-page’i kaldırmak
- Gerçek fiyat rakamları yayınlamak
- CRM / e-posta gönderimi
- Dark-mode-first veya mor/indigo “AI landing” estetiği

## Onay kaydı

- Yaklaşım: Satış one-page (seçenek 1) — onaylandı
- Bölüm 1 (iskelet + hero) — onaylandı
- Bölüm 2 (iş akışı + modüller) — onaylandı
- Bölüm 3 (önce/sonra + fiyat + form + WhatsApp) — onaylandı
