# about-site — deepin Indonesia

Situs statis **Tentang deepin** untuk komunitas deepin Indonesia, dibangun dengan
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

- **Produksi:** <https://about.deepin.id>
- **Halaman:** `/` (landing Tentang deepin), `/product-planning/`
- **Analytics:** Google Analytics 4 (`G-2J4TLB9W7H`) via `Analytics.astro`
- **Deploy:** Cloudflare Pages, branch `main`

## Struktur

```
src/
├── components/        Header, Footer, Layout, Analytics
├── data/
│   ├── site.ts        Konfigurasi situs, navigasi
│   └── product-planning.ts   Konten product planning (roadmap & rencana fitur)
├── pages/
│   ├── index.astro            Landing "Tentang deepin"
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
- Open Graph + Twitter Card dengan gambar 1200×630.
- JSON-LD: `Organization`, `WebSite`, `BreadcrumbList`, `TechArticle`, `FAQPage`,
  dan `SoftwareApplication`.
- Sitemap otomatis (`@astrojs/sitemap`) + `public/robots.txt`.
- Struktur heading hierarkis, tabel semantik, `<time>`, serta ARIA label.

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

Semua konten roadmap berada di `src/data/product-planning.ts`:

- `RELEASE_SCHEDULE` — tabel jadwal rilis dan status versi.
- `NEXT_RELEASE` — versi yang sedang direncanakan (dipakai di hero & metadata).
- `PLAN_CATEGORIES` — kategori rencana fitur beserta itemnya.
- `FAQ_ITEMS` — pertanyaan umum yang juga menjadi schema `FAQPage`.

Perbarui juga `PLANNING_PAGE.updated` setiap kali konten berubah agar tanggal pada
schema dan tampilan tetap akurat.
