<div align="center">

# deepin Indonesia — About Site

**Situs "Tentang deepin" & product planning**

[about.deepin.id](https://about.deepin.id) · 🇮🇩 **Bahasa Indonesia** · [🇬🇧 English](README.en.md)

</div>

---

Situs statis **deepin Indonesia** sekaligus pusat informasi **Tentang deepin**: profil komunitas, pengurus, aplikasi orisinal, desktop environment, dan roadmap versi. Dibangun dengan [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Halaman](#halaman)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Mengubah Konten](#mengubah-konten)
- [Deployment](#deployment)
- [SEO, Performa & AdSense](#seo-performa--adsense)
- [Analitik](#analitik)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)

## Tentang Proyek

`about-site` adalah halaman **deepin Indonesia** di **https://about.deepin.id**. Halaman ini menjelaskan komunitasnya terlebih dahulu, lalu menyajikan tiga topik utama: **Product Planning**, **Original Apps**, dan **Desktop Environment (DDE/Treeland)**.

### Ekosistem deepin Indonesia

| Subdomain | Repo | Fungsi |
|---|---|---|
| [deepin.id](https://deepin.id) | `home-site` | Halaman utama |
| [os.deepin.id](https://os.deepin.id) | `download-site` | Download image deepin |
| [news.deepin.id](https://news.deepin.id) | `news-site` | Berita & artikel |
| [about.deepin.id](https://about.deepin.id) | `about-site` ← repo ini | Tentang & product planning |
| [donasi.deepin.id](https://donasi.deepin.id) | `donasi-site` | Donasi komunitas |

## Halaman

| Route | Isi |
|---|---|
| `/` | Profil komunitas: hero, pengantar, kegiatan, tiga kartu topik, section `#original-apps` & `#desktop-environment`, pengurus, FAQ, CTA |
| `/product-planning/` | Roadmap versi (jadwal rilis), fitur deepin 25.3.0, disclaimer, FAQ |

## Fitur

- **Profil komunitas** lengkap dengan pengurus dan dukungan resmi deepin.
- **Section Original Apps** — 12 aplikasi orisinal deepin.
- **Section Desktop Environment** — DDE 7.0 & Treeland.
- **Product Planning** — jadwal rilis, status versi, dan sorotan fitur.
- **Structured data kaya**: `AboutPage`, `ItemList`, `Person`, `FAQPage`, `SoftwareApplication`, `TechArticle`, dan `BreadcrumbList`.
- **Sitemap dengan `lastmod` akurat** per halaman (bukan tanggal build).
- **`_redirects`** untuk URL lama + redirect `/privacy/` ke halaman utama.

## Tech Stack

| Teknologi | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Bahasa** | TypeScript (`strict`), alias `@/*` → `src/*` |
| **Ikon** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` dengan `lastmod` per halaman |
| **Analitik** | Google Analytics 4 — `G-2J4TLB9W7H` |
| **Iklan** | Google AdSense — `ca-pub-1345939033565649` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Runtime** | Node.js 20+ |

## Struktur Proyek

```
about-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # <head>, SEO, schema, AdSense, hreflang, preload LCP
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Analytics.astro
│   ├── data/
│   │   ├── deepin-indonesia.ts   # Konten halaman utama (/)
│   │   ├── product-planning.ts   # Konten halaman /product-planning/
│   │   └── site.ts               # Konfigurasi situs & navigasi
│   ├── pages/
│   │   ├── index.astro           # Halaman komunitas
│   │   ├── 404.astro             # 404 (noindex)
│   │   └── product-planning/
│   │       └── index.astro       # Product planning
│   └── styles/
│       └── global.css            # Tailwind + palet deepin + .section-eyebrow
├── public/
│   ├── images/                   # Logo, foto pengurus, OG image
│   ├── _redirects                # URL lama + redirect privasi
│   ├── ads.txt
│   ├── robots.txt
│   ├── llms.txt
│   └── site.webmanifest
├── astro.config.mjs              # site, sitemap lastmod (CONTENT_UPDATED)
├── tsconfig.json
└── package.json
```

## Memulai

### Prasyarat

- [Node.js](https://nodejs.org) 20+
- npm

### Instalasi & pengembangan

```bash
git clone https://github.com/deepin-Indonesia/about-site.git
cd about-site
npm install
npm run dev        # → http://localhost:4321 (atau port berikutnya)
```

### Perintah

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Preview hasil build |

## Mengubah Konten

### Halaman utama — `src/data/deepin-indonesia.ts`

| Ekspor | Isi |
|---|---|
| `INDONESIA_PAGE` | Judul, tagline, pengantar, tanggal pembaruan |
| `INDONESIA_SUPPORT` | Dukungan resmi dari deepin main community |
| `INDONESIA_VALUES` | Prinsip komunitas |
| `INDONESIA_ACTIVITIES` | Kegiatan komunitas + tautan |
| `EXPLORE_SECTIONS` | Tiga kartu topik (`#original-apps`, `#desktop-environment`, `/product-planning/`) |
| `COMMUNITY_LEADS` | Pengurus (nama, jabatan, badge, foto, bio, tautan) |
| `INDONESIA_FAQ` | FAQ (juga jadi schema `FAQPage`) |

> Ikon pada `links` harus menyertakan gaya Font Awesome (`fas`/`fab`), mis. `fas fa-link` atau `fab fa-github`.

### Halaman product planning — `src/data/product-planning.ts`

| Ekspor | Isi |
|---|---|
| `PLANNING_PAGE` | Judul, tagline, pengantar, tanggal pembaruan |
| `RELEASE_SCHEDULE` | Jadwal rilis + status versi |
| `NEXT_RELEASE` | Versi fokus halaman (hero & metadata) |
| `PLAN_CATEGORIES` | Kategori fitur beserta item |
| `PLAN_HIGHLIGHTS` | Chip sorotan di atas halaman |
| `PLAN_DISCLAIMER` | Catatan penting |
| `FAQ_ITEMS` | FAQ (juga jadi schema `FAQPage`) |

> Setiap kali konten berubah, perbarui tanggal di `CONTENT_UPDATED` (`astro.config.mjs`), `INDONESIA_PAGE.updated`, dan `PLANNING_PAGE.updated` agar `lastmod` sitemap dan schema tetap akurat.

## Deployment

Push ke `main` → **Cloudflare Pages** otomatis build & deploy.

| Setting | Nilai |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

## SEO, Performa & AdSense

- **Meta per halaman**: description, keywords, canonical, `robots`, dan `hreflang` (`id-ID`, `x-default`).
- **Open Graph & Twitter Card** dengan gambar 1200×630 (`/images/og-about.png`), `og:image:type`, dan dimensi sesuai.
- **JSON-LD**: `Organization`, `WebSite`, `BreadcrumbList`, `AboutPage`, `ItemList`, `TechArticle`, `FAQPage`, `SoftwareApplication`.
- **Sitemap** dengan `lastmod` per halaman (`CONTENT_UPDATED` di `astro.config.mjs`) + `robots.txt`.
- **404** memakai `noindex, follow` tanpa `hreflang`.
- **Performa**: `preconnect` ke cdnjs & GTM, `dns-prefetch` ke GA, `preload` gambar LCP (`preloadImage`), blur berat dikurangi.
- **AdSense**: script + meta + `public/ads.txt`.
- **Kebijakan Privasi** terpusat di **https://deepin.id/privacy/**; `/privacy/` di subdomain ini 301 ke sana.

## Analitik

Satu property GA4 (`G-2J4TLB9W7H`) untuk semua subdomain; setiap event membawa parameter `site`. Event penting: `nav_click`, `dropdown_toggle`, `anchor_click`, `cta_click`, `faq_toggle`, `scroll_depth`, `engaged_reader`.

## Berkontribusi

1. Fork repo, lalu buat branch dari `preview`: `git checkout preview && git checkout -b feat/deskripsi`.
2. Commit dengan pesan jelas, push ke fork, dan buka **Pull Request** ke `deepin-Indonesia/about-site` (target: **`preview`**).
3. Setelah review, merge `preview` → `main`.

> ⚠️ Jangan push langsung ke `main` — branch itu otomatis tayang.

## Pemecahan Masalah & Kontak

### Branch `main` vs `preview`

- **`main`** — produksi. Hanya push ke `main` yang memicu **Cloudflare Pages**, dan hasilnya otomatis tayang di domain utama.
- **`preview`** — staging untuk review. Push ke `preview` **tidak** memicu deploy; perubahan dicek secara **lokal** (`npm run dev`) sebelum di-merge ke `main`.

### Masalah umum

| Masalah | Solusi |
|---|---|
| Port `4321` sudah dipakai | Astro otomatis pindah ke port berikutnya, atau jalankan `npm run dev -- --port 4322`. |
| Build gagal setelah update dependensi | Hapus `node_modules` dan `package-lock.json`, lalu `npm install` ulang. |
| Halaman 404 saat dev | Pastikan file route ada di `src/pages/` dan nama file benar (huruf besar/kecil berpengaruh di Linux). |
| Perubahan tidak muncul | Hard refresh (`Ctrl+Shift+R`) atau restart dev server. |
| Node.js terlalu lama | Gunakan Node.js 20+; cek dengan `node -v`. |

### Melaporkan masalah

- **Bug / usulan fitur** → buka [Issue](https://github.com/deepin-Indonesia/about-site/issues).
- **Diskusi cepat** → [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID).
- **Kontak** → [deepin@siberin.id](mailto:deepin@siberin.id).

## Lisensi

Dirilis di bawah [MIT License](LICENSE) © deepin Indonesia.

---

<div align="center">

Dibuat dengan ❤️ oleh komunitas [deepin Indonesia](https://deepin.id) · [Telegram](https://t.me/Linux_deepin_ID) · [GitHub](https://github.com/deepin-Indonesia)

</div>
