# İskele Pro — Web ve sosyal görsel paketi
Tarih: 2026-09-22  
Marka renkleri: lacivert `#0B2148` · amber `#E39B12` · beyaz `#FFFFFF`

Site incelemesi (iskelepro.com): mevcut sayfa metin ve sade ikon ağırlıklı. Logo zaten doğru kullanılıyor. Eksik olanlar fotoğraf, ürün mockup, OG/sosyal kapak ve kategori görselleriydi. Bu paket bunları tamamlar.

Üretilen dosyalar yaklaşık 1176×784 (yatay) veya 784×1176 (dikey). WebP/JPG olarak sıkıştırıp kullanın. OG için 1200×630’a kırpın.

---

## 1. Logo (sizin verdiğiniz dosyalar)
| Dosya | Kullanım |
|---|---|
| `logo/iskele-pro-logo-beyaz-zemin.png` | Header, açık zemin, evrak |
| `logo/iskele-pro-logo-navy-zemin.png` | Footer, koyu bant, e-posta |
| `logo/iskele-pro-logo-siyah-zemin.png` | Video, koyu slayt |
| `logo/iskele-pro-logo-seffaf.png` | Overlay (şeffaf arka plan) |
| `logo/iskele-pro-icon-navy-zemin.png` | Favicon, uygulama ikonu, profil |
| `logo/iskele-pro-icon-siyah-zemin.png` | Koyu tema app ikonu |
| `logo/iskele-pro-icon-seffaf.png` | Şeffaf app ikonu |

Önerilen favicon boyutları (sizin ikondan üretin): 32, 48, 180 (Apple), 192, 512 (PWA).

---

## 2. Open Graph / paylaşım
`og/og-tekliften-sahaya.jpg`  
- WhatsApp, LinkedIn, Facebook, Slack önizlemesi  
- `<meta property="og:image">` ve Twitter `summary_large_image`  
- Hedef kırpma: 1200×630, konu solda metin + sağda panel

---

## 3. Hero / anasayfa ve iç sayfalar
| Dosya | Sayfa |
|---|---|
| `hero/hero-laptop-dashboard.jpg` | Anasayfa hero sağ görsel veya “Neden İskele Pro” |
| `hero/hero-cephe-iskele-3d.jpg` | 3D İskele uygulama sayfası, Uygulamalar hero |
| `hero/hero-ic-sayfa-iskele-metafor.jpg` | Sektör / Yardım / Fiyatlandırma üst bandı (sol boş, yazı bindirilir) |
| `hero/feature-teklif-depo-saha.jpg` | Operasyon akışı veya 3 özellik kartı |

---

## 4. Ürün mockup’ları
| Dosya | Sayfa |
|---|---|
| `mockups/mockup-saha-teslim-mobil.jpg` | Saha, QR, teslim uygulaması |
| `mockups/mockup-depo-stok-tablet.jpg` | Stok ve depolar, sevkiyat |
| `mockups/mockup-pdf-teklif-studio.jpg` | PDF stüdyosu, Teklifler (örnek evrak kompozisyonu; başlıktaki firma adı kurgusal) |
| `mockups/mockup-demo-ofis-ekran.jpg` | Demo talebi bölümü, Kaynaklar |

Not: Ekranlardaki rakam ve menü metinleri temsili. Canlı ürün ekran görüntüsü varsa mockup içine bindirin.

---

## 5. Sektörler
| Dosya | Kullanım |
|---|---|
| `sectors/sektor-saha-montaj.jpg` | Saha montaj / kurulum ekipli firma |
| `sectors/sektorler-dortlu-kolaj.jpg` | /sektor sayfası üst görsel: kiralama, saha, depo, teklif ofisi |

---

## 6. Menü / uygulama ikon setleri
Mevcut sitedeki küçük lacivert kare ikonların yerini alabilir veya uygulama kartlarında kullanılabilir.

`icons/ikon-set-ticari-operasyon.jpg`  
1 zarf = Talepler · 2 bina = Müşteriler · 3 belge = Teklifler  
4 küp = 3D İskele · 5 yazıcı = PDF stüdyosu · 6 baret = Şantiyeler  
7 anahtar = Kiralama · 8 depo = Stok · 9 telefon+QR = Saha

`icons/ikon-set-finans-ik-yonetim.jpg`  
Fatura · Çek · Kasa · Nakit akışı · Çalışanlar · Puantaj · İzinler · Yetkiler · Raporlar

Kullanım: seti keserek her ikonu ~128×128 veya 256×256 PNG yapın (şeffaf zemin için tekrar export).

---

## 7. Sosyal medya
| Dosya | Platform / ölçü |
|---|---|
| `social/profil-instagram-linkedin.png` | Profil foto (kare ikon, lacivert zemin) |
| `social/linkedin-facebook-cover.jpg` | LinkedIn kapak 1584×396 veya FB 820×312’ye kırpın |
| `social/instagram-post-tek-kayit.jpg` | Akış gönderisi 1080×1350 (4:5) veya kare kırpın |
| `social/instagram-story-whatsapp-demo.jpg` | Story 1080×1920, WhatsApp durumu, Reels kapağı |

---

## Önerilen yerleşim (iskelepro.com)

**Anasayfa**
- Hero sağ: `hero-laptop-dashboard.jpg` veya mevcut panel + bu foto
- Neden İskele Pro: `feature-teklif-depo-saha.jpg`
- Operasyon 01–05: ikon setinden ilgili kesitler
- Karşılaştırma altı: `mockup-demo-ofis-ekran.jpg`

**Uygulamalar**
- Liste hero: `hero-cephe-iskele-3d.jpg`
- Teklif/PDF: `mockup-pdf-teklif-studio.jpg`
- 3D: `hero-cephe-iskele-3d.jpg`
- Depo: `mockup-depo-stok-tablet.jpg`
- Saha: `mockup-saha-teslim-mobil.jpg`

**Sektörler**
- Üst: `hero-ic-sayfa-iskele-metafor.jpg` + başlık
- Kartlar: `sektorler-dortlu-kolaj.jpg` parçaları veya `sektor-saha-montaj.jpg`

**Sosyal / SEO**
- og:image = `og-tekliften-sahaya.jpg`
- Favicon = sizin icon PNG

---

## Teknik not
Görseller JPG (foto) ve PNG (logo). Sitede performans için:
- Hero: 1600–2000 px genişlik, kalite 75–80, WebP
- Kart: 800–1200 px
- OG: tam 1200×630
- Lazy-load + `alt` metinleri Türkçe yazın (ör. “İskele Pro saha teslim mobil uygulaması”)
