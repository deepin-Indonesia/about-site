# about-site — deepin Indonesia

Situs statis **deepin Indonesia** sekaligus pusat informasi **Tentang deepin**, dibangun dengan
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

- **Produksi:** <https://about.deepin.id>
- **Halaman:**
  - `/` — **deepin Indonesia**: profil komunitas, pengurus, lalu tautan ke tiga topik
    (Product Planning, Original Apps, Desktop Environment)
  - `/product-planning/` — roadmap versi & rencana fitur deepin
- **Analytics:** Google Analytics 4 (`G-2J4TLB9W7H`) via `Analytics.astro`
- **Deploy:** Cloudflare Pages, branch `main`

> `about.deepin.id` adalah halaman **deepin Indonesia**. Halaman ini menjelaskan komunitasnya
> terlebih dahulu, lalu menautkan tiga topik yang masing-masing punya halaman tersendiri:
> Product Planning, Original Apps, dan Desktop Environment.

## Struktur

```
1. Hero — identitas komunitas deepin Indonesia + logo.
├── components/        Header, Footer, Layout, Analytics
├── data/
4. **Tentang deepin** — tiga kartu topik (Product Planning, Original Apps, Desktop Environment)
   yang masing-masing menuju halaman tersendiri.
5. Pengurus komunitas (Zaky NR — Lead & deepin Global Ambassador for Indonesia).
6. FAQ (`FAQPage`) dan CTA.

Penjelasan rinci tiap topik **tidak** diulang di halaman ini karena sudah punya halaman sendiri.
Dua di antaranya (`/original-apps/`, `/desktop-environment/`) masih dalam pengerjaan.
│   ├── 404.astro              Halaman tidak ditemukan
│   └── product-planning/
│       └── index.astro        Roadmap versi + rencana fitur deepin
├── styles/global.css  Tema Tailwind (palet deepin)
└── types.ts           Tipe TypeScript bersama
```

## Perintah

| Perintah          | Kegunaan                                     |
| ----------------- | -------------------------------------------- |
| `npm install`     | Memasang dependensi                          |
| `npm run dev`     | Menjalankan server pengembangan di `:4321`   |
| `npm run build`   | Build produksi ke `dist/`                    |
| `npm run preview` | Menjalankan hasil build secara lokal         |

## Bahasa & Konvensi Penulisan

- Narasi dan antarmuka memakai **Bahasa Indonesia**.
- Istilah teknis (mis. *Immutable System*, *Linyaps*, *Wayland*, *snapshot*, *release notes*)
  tetap dalam **Bahasa Inggris** agar konsisten dengan dokumentasi resmi deepin.

## SEO

- Meta description, keywords, canonical, dan `hreflang` (`id-ID`, `x-default`) per halaman.
- Judul ≤ 62 karakter dan deskripsi ≤ 155 karakter agar tidak terpotong di hasil pencarian.
- Open Graph + Twitter Card dengan gambar 1200×630 (`/images/og-about.png`),
  `og:image:type`, dan dimensi yang sesuai gambar asli.
- JSON-LD: `Organization`, `WebSite`, `BreadcrumbList`, `AboutPage`, `ItemList`,
  `TechArticle`, `FAQPage`, dan `SoftwareApplication`.
- Sitemap otomatis (`@astrojs/sitemap`) dengan `lastmod` per halaman sesuai tanggal
  pembaruan konten (lihat `CONTENT_UPDATED` di `astro.config.mjs`), plus `public/robots.txt`.
- Halaman 404 memakai `noindex, follow` dan tidak dikirim `hreflang`.
- `public/site.webmanifest` untuk metadata PWA (nama, ikon, warna tema).
- Struktur heading hierarkis, tabel semantik, `<time>`, serta ARIA label.
- Ikon dekoratif diberi `aria-hidden`, tautan ikon-saja diberi `aria-label`,
  dan semua gambar punya `alt` + `width`/`height` (mencegah layout shift).
- Resource hints: `preconnect` ke cdnjs + GTM, `dns-prefetch` ke GA, serta
  `preload` gambar LCP (`preloadImage` pada `Layout`).
- `public/_redirects` memetakan URL lama (`/Indonesia`, `/tentang-deepin/*`) ke halaman utama.

> Saat mengubah konten, perbarui juga tanggal di `CONTENT_UPDATED`
> (`astro.config.mjs`), `INDONESIA_PAGE.updated`, dan `PLANNING_PAGE.updated`.

## Struktur Halaman Utama (`/`)

1. Hero — identitas komunitas + fakta singkat.
2. Pengantar "Apa itu deepin Indonesia?" + prinsip komunitas.
3. Kegiatan komunitas (edukasi, release notes, diskusi, event).
4. Ringkasan tiga topik: Product Planning, Original Apps, Desktop Environment.
5. `#product-planning` — ringkasan roadmap + sorotan versi berikutnya.
6. `#original-apps` — daftar aplikasi orisinal deepin.
7. `#desktop-environment` — DDE 7.0 & Treeland.
8. Timeline komunitas, FAQ (`FAQPage`), dan CTA.

Anchor `#original-apps` dan `#desktop-environment` dipakai oleh dropdown "Tentang deepin" di
kelima subdomain sampai halaman khusus keduanya dibangun.

## Analitik (Google Analytics 4)

Measurement ID: `G-2J4TLB9W7H` (satu property untuk kelima subdomain).

Pelacakan terpusat di `src/components/Analytics.astro` dan dirender sekali dari
`src/components/Layout.astro` (`<Analytics />`), jadi **semua halaman otomatis
terlacak** — tidak perlu menambah script per halaman.

Setiap event membawa parameter `site` (dari `location.host`) supaya data tiap
subdomain bisa dipisah di GA4. `site` juga dikirim sebagai *user property* agar
`page_view` ikut terpisah.

| Event | Dipicu oleh |
| --- | --- |
| `page_view` | Otomatis setiap halaman |
| `page_context` | Referrer, viewport, ukuran layar, bahasa, `utm_*` |
| `page_404` | Halaman tidak ditemukan (+ path-nya) |
| `scroll_depth` | Scroll 25/50/75/90/100% |
| `engaged_reader` | 30/60/180/600 detik benar-benar aktif |
| `visibility_change` | Tab berpindah/aktif kembali |
| `nav_click` | Klik menu di header atau drawer mobile |
| `dropdown_toggle` | Buka/tutup dropdown header ("Tentang deepin") |
| `menu_toggle` | Buka/tutup hamburger mobile |
| `menu_section_toggle` | Buka/tutup seksi di drawer mobile |
| `cta_click` | Tombol `.btn-primary` / `.btn-outline` / `.btn-ghost` |
| `footer_click` | Klik tautan di footer |
| `internal_site_click` | Pindah ke subdomain `deepin.id` lain |
| `outbound_click` | Keluar dari ekosistem `deepin.id` |
| `anchor_click` | Lompat ke section (`#...`), mis. tombol hero |
| `faq_toggle` | Buka accordion FAQ (`<details>`) |
| `contact_click` | Klik `mailto:` atau `tel:` |
| `copy_text` | Menyalin teks |
| `scroll_top` | Tombol kembali ke atas |
| `form_submit` | Mengirim form |
| `media_interaction` | Mulai memutar video/embed |
| `data_track` | Nama bebas dari atribut `data-track` di elemen `<a>` |

### Event kustom

Tempel `data-track` pada elemen `<a>` untuk mengirim event dengan nama sendiri:

```html
<a href="https://os.deepin.id" data-track="download_cta">Unduh deepin</a>
```

Atau panggil dari script mana pun:

```js
window.deepinTrack('os_select', { arch: 'arm64' });
```

`window.__gaReady === true` menandakan pelacakan siap (berguna untuk pengujian).

## Menambah / Memperbarui Konten

### Halaman utama — `src/data/deepin-indonesia.ts`

- `INDONESIA_PAGE` — judul, tagline, pengantar, dan tanggal pembaruan.
- `INDONESIA_SUPPORT` — dukungan resmi dari deepin main community
  (Wuhan Deepin Technology Co., Ltd.).
- `INDONESIA_VALUES` — prinsip komunitas.
- `INDONESIA_ACTIVITIES` — kegiatan komunitas beserta tautannya.
- `EXPLORE_SECTIONS` — tiga kartu topik "Tentang deepin" (judul, deskripsi, ikon, URL, CTA).
- `COMMUNITY_LEADS` — pengurus komunitas (nama, jabatan, badge, foto, bio, kutipan
  Certificate of Appointment, tautan).
- `INDONESIA_FAQ` — pertanyaan umum yang juga menjadi schema `FAQPage`.

> **Catatan ikon:** nilai `icon` pada array `links` harus menyertakan gaya Font Awesome
> (`fas`/`fab`), mis. `fas fa-link` atau `fab fa-github`. Tanpa awalan gaya, ikon tidak
> akan tampil. Pada `INDONESIA_VALUES`/`INDONESIA_ACTIVITIES`/`EXPLORE_SECTIONS`, awalan
> `fas` ditambahkan otomatis oleh template.

### Halaman product planning — `src/data/product-planning.ts`

Semua konten roadmap berada di `src/data/product-planning.ts`:

- `RELEASE_SCHEDULE` — tabel jadwal rilis dan status versi.
- `NEXT_RELEASE` — versi yang sedang direncanakan (dipakai di hero & metadata).
- `PLAN_CATEGORIES` — kategori rencana fitur beserta itemnya.
- `FAQ_ITEMS` — pertanyaan umum yang juga menjadi schema `FAQPage`.

Perbarui juga `PLANNING_PAGE.updated` setiap kali konten berubah agar tanggal pada
schema dan tampilan tetap akurat.
