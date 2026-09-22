import type { FaqItem } from '@/types';

/**
 * Konten halaman utama `about.deepin.id` — "deepin Indonesia".
 *
 * Catatan penulisan:
 * - Narasi memakai Bahasa Indonesia.
 * - Istilah teknis (nama aplikasi, komponen, format paket) tetap Bahasa Inggris
 *   agar konsisten dengan dokumentasi resmi deepin.
 */

export const INDONESIA_PAGE = {
  title: 'deepin Indonesia',
  tagline: 'Komunitas resmi pengguna deepin Linux di Indonesia',
  updated: '2026-09-22',
  updatedLabel: '22 September 2026',
  intro:
    'deepin Indonesia adalah komunitas resmi pengguna deepin Linux di Indonesia — wadah bagi siapa saja yang ingin mengenal, menggunakan, dan ikut mengembangkan deepin di Tanah Air.',
  introDetail:
    'Kami membantu pengguna baru maupun berpengalaman: menyediakan panduan berbahasa Indonesia, menerjemahkan istilah teknis, menyebarkan kabar rilis terbaru, serta menjadi tempat bertanya ketika menemui kendala instalasi atau penggunaan sehari-hari.',
} as const;

/** Nilai / prinsip komunitas. */
export const INDONESIA_VALUES = [
  {
    icon: 'fa-handshake-angle',
    title: 'Ramah Pemula',
    desc: 'Tidak ada pertanyaan yang terlalu dasar. Semua anggota bebas bertanya, dan setiap pertanyaan dijawab tanpa menghakimi.',
  },
  {
    icon: 'fa-comments',
    title: 'Bahasa Indonesia',
    desc: 'Panduan, istilah, dan diskusi disampaikan dalam Bahasa Indonesia agar mudah dipahami siapa pun.',
  },
  {
    icon: 'fa-code-branch',
    title: 'Open Source',
    desc: 'Kami mendorong kontribusi nyata: terjemahan, dokumentasi, pelaporan bug, hingga pengembangan aplikasi.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Bebas Vendor',
    desc: 'Komunitas ini berdiri mandiri, tidak terikat kepentingan komersial, dan terbuka untuk seluruh distro turunan Linux.',
  },
] as const;

/** Aktivitas utama komunitas. */
export const INDONESIA_ACTIVITIES = [
  {
    icon: 'fa-book-open',
    title: 'Edukasi & Tutorial',
    desc: 'Panduan pemasangan, penyelesaian masalah, dan tips penggunaan deepin dalam Bahasa Indonesia.',
    link: { text: 'Baca tutorial', url: 'https://news.deepin.id/?tag=tips-deepin' },
  },
  {
    icon: 'fa-bullhorn',
    title: 'Kabar Rilis & Release Notes',
    desc: 'Ringkasan setiap versi deepin yang dirilis, lengkap dengan fitur baru dan catatan peningkatan penting.',
    link: { text: 'Lihat release notes', url: 'https://news.deepin.id/?tag=release-notes' },
  },
  {
    icon: 'fa-people-group',
    title: 'Diskusi & Bantuan',
    desc: 'Ruang tanya-jawab terbuka seputar instalasi, perangkat keras, hingga aplikasi di deepin.',
    link: { text: 'Gabung Telegram', url: 'https://t.me/Linux_deepin_ID' },
  },
  {
    icon: 'fa-microphone-lines',
    title: 'Event & Sharing Session',
    desc: 'Meetup daring maupun luring, berbagi pengalaman, dan memperkenalkan deepin ke pengguna baru.',
    link: { text: 'Lihat agenda', url: 'https://news.deepin.id/?tag=event' },
  },
] as const;

/** Tiga area "Tentang deepin" yang dijelaskan setelah pengantar. */
export const EXPLORE_SECTIONS = [
  {
    id: 'product-planning',
    title: 'Product Planning',
    technicalTitle: 'Roadmap & Version Plan',
    description:
      'Rencana resmi tim deepin untuk versi berikutnya: jadwal rilis, sasaran fitur, dan area optimasi yang sedang dikerjakan.',
    icon: 'fa-route',
    url: '/product-planning/',
    cta: 'Buka halaman lengkap',
  },
  {
    id: 'original-apps',
    title: 'Original Apps',
    technicalTitle: 'deepin Original Applications',
    description:
      'Aplikasi orisinal buatan deepin yang dirancang menyatu dengan sistem — dari File Manager hingga App Store.',
    icon: 'fa-shapes',
    url: '/original-apps/',
    cta: 'Lihat daftar aplikasi',
  },
  {
    id: 'desktop-environment',
    title: 'Desktop Environment',
    technicalTitle: 'Deepin Desktop Environment (DDE)',
    description:
      'Lingkungan desktop deepin yang indah dan ringan, kini berjalan di atas Treeland — compositor Wayland milik deepin.',
    icon: 'fa-desktop',
    url: '/desktop-environment/',
    cta: 'Kenali DDE & Treeland',
  },
] as const;

/** Pengurus komunitas deepin Indonesia. */
export const COMMUNITY_LEADS = [
  {
    name: 'Zaky NR',
    role: 'Lead, deepin Indonesia Community',
    badge: 'deepin Global Ambassador',
    badgeDetail: 'Official deepin Global Ambassador for Indonesia',
    photo: '/images/zaky-nr.jpg',
    bio: 'Memimpin komunitas deepin Indonesia sekaligus menjadi perwakilan resmi deepin untuk Indonesia di forum global — menjembatani pengguna, kontributor, dan tim deepin pusat.',
    links: [
      { label: 'zaky.siberin.id', url: 'https://zaky.siberin.id', icon: 'fa-globe' },
      { label: 'GitHub', url: 'https://github.com/JackTekno', icon: 'fab fa-github' },
    ],
  },
] as const;

/** FAQ untuk rich result (FAQPage) sekaligus membantu pembaca. */
export const INDONESIA_FAQ: FaqItem[] = [
  {
    question: 'Apa itu deepin Indonesia?',
    answer:
      'deepin Indonesia adalah komunitas resmi pengguna deepin Linux di Indonesia. Komunitas ini menjadi wadah bagi pengguna, pengembang, dan penggiat deepin untuk berdiskusi, bertanya, serta berbagi panduan berbahasa Indonesia.',
  },
  {
    question: 'Apakah deepin Indonesia bagian dari deepin Technology?',
    answer:
      'Tidak. deepin Indonesia adalah komunitas independen yang dibentuk oleh pengguna di Indonesia. Kami mengikuti perkembangan resmi deepin dan merangkum informasinya, tetapi bukan bagian dari perusahaan pengembang deepin.',
  },
  {
    question: 'Bagaimana cara bergabung dengan komunitas deepin Indonesia?',
    answer:
      'Cukup bergabung ke grup Telegram resmi di https://t.me/Linux_deepin_ID. Di sana Anda dapat bertanya, berbagi pengalaman, dan mengikuti kabar terbaru seputar deepin.',
  },
  {
    question: 'Apakah ada panduan deepin dalam Bahasa Indonesia?',
    answer:
      'Ada. Artikel tutorial, tips, dan release notes deepin tersedia dalam Bahasa Indonesia di news.deepin.id, sementara rencana pengembangan dan penjelasan produk tersedia di about.deepin.id.',
  },
  {
    question: 'Topik apa saja yang dibahas di halaman ini?',
    answer:
      'Halaman ini menjelaskan komunitas deepin Indonesia beserta pengurus dan kegiatannya. Setelah itu disediakan tautan ke tiga topik utama: Product Planning (roadmap versi dan rencana fitur), Original Apps (aplikasi orisinal deepin), serta Desktop Environment (DDE dan Treeland) yang masing-masing memiliki halaman tersendiri.',
  },
];
