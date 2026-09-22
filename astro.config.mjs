// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Tanggal pembaruan konten terakhir per halaman (YYYY-MM-DD).
 * Samakan dengan `INDONESIA_PAGE.updated` (src/data/deepin-indonesia.ts) dan
 * `PLANNING_PAGE.updated` (src/data/product-planning.ts) setiap kali konten berubah.
 */
const CONTENT_UPDATED = {
  '/': '2026-09-22',
  '/product-planning/': '2026-09-14',
};

export default defineConfig({
  site: 'https://about.deepin.id',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Semua halaman berbahasa Indonesia; hreflang dikirim dari <head>.
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id-ID' },
      },
      changefreq: 'weekly',
      priority: 0.8,
      // lastmod per halaman memakai tanggal konten, bukan tanggal build,
      // supaya sinyal kesegaran tetap akurat.
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const updated = CONTENT_UPDATED[pathname];
        if (updated) item.lastmod = new Date(`${updated}T00:00:00.000Z`).toISOString();
        return item;
      },
    }),
  ],
  build: {
    assets: 'assets',
  },
});
