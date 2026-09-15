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

## Menambah / Memperbarui Konten

Semua konten roadmap berada di `src/data/product-planning.ts`:

- `RELEASE_SCHEDULE` — tabel jadwal rilis dan status versi.
- `NEXT_RELEASE` — versi yang sedang direncanakan (dipakai di hero & metadata).
- `PLAN_CATEGORIES` — kategori rencana fitur beserta itemnya.
- `FAQ_ITEMS` — pertanyaan umum yang juga menjadi schema `FAQPage`.

Perbarui juga `PLANNING_PAGE.updated` setiap kali konten berubah agar tanggal pada
schema dan tampilan tetap akurat.
