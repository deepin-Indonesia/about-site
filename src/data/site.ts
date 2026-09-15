import type { NavItem, SiteConfig } from '@/types';

export const SITE: SiteConfig = {
  name: 'deepin Indonesia',
  tagline: 'Komunitas Resmi Pengguna deepin Linux di Indonesia',
  description:
    'Tentang deepin — pelajari roadmap rilis, rencana fitur (product planning), aplikasi orisinal, dan lingkungan desktop deepin (DDE) dalam Bahasa Indonesia.',
  url: 'https://about.deepin.id',
  email: 'deepin@siberin.id',
  locale: 'id_ID',
  ga4: 'G-2J4TLB9W7H',
  social: {
    telegram: 'https://t.me/Linux_deepin_ID',
    github: 'https://github.com/deepin-Indonesia',
    youtube: 'https://www.youtube.com/playlist?list=PLaZr9JPhal-4',
  },
};

export const MAIN_NAV: NavItem[] = [
  { title: 'Home', url: 'https://deepin.id' },
  { title: 'Download', url: 'https://os.deepin.id' },
  {
    title: 'News',
    children: [
      { title: 'Semua Artikel', url: 'https://news.deepin.id/' },
      { title: 'Release Note', url: 'https://news.deepin.id/?tag=release-notes' },
      { title: 'Tips deepin', url: 'https://news.deepin.id/?tag=tips-deepin' },
      { title: 'Komunitas Update', url: 'https://news.deepin.id/?tag=komunitas-update' },
      { title: 'Event', url: 'https://news.deepin.id/?tag=event' },
    ],
  },
  { title: 'Gabung Komunitas', url: 'https://t.me/Linux_deepin_ID', external: true },
];

export const ABOUT_NAV: NavItem[] = [
  {
    title: 'Tentang deepin',
    children: [
      { title: 'Product Planning', url: 'https://about.deepin.id/product-planning/' },
      { title: 'Original Apps', url: 'https://about.deepin.id/original-apps/' },
      { title: 'Desktop Environment', url: 'https://about.deepin.id/desktop-environment/' },
      { title: 'deepin Indonesia', url: 'https://deepin.id', highlight: true },
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: 'Telegram', url: 'https://t.me/Linux_deepin_ID', icon: 'telegram' },
  { name: 'GitHub', url: 'https://github.com/deepin-Indonesia', icon: 'github' },
  { name: 'YouTube', url: 'https://www.youtube.com/playlist?list=PLaZr9JPhal-4', icon: 'youtube' },
];

/** Sitemap internal untuk halaman-halaman di dalam subdomain about. */
export const ABOUT_PAGES = [
  { title: 'Product Planning', url: '/product-planning/' },
  { title: 'Original Apps', url: '/original-apps/' },
  { title: 'Desktop Environment', url: '/desktop-environment/' },
];
