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
  intro:
    'deepin Indonesia adalah komunitas resmi pengguna deepin Linux di Indonesia — wadah bagi siapa saja yang ingin mengenal, menggunakan, dan ikut mengembangkan deepin di Tanah Air.',
  introDetail:
    'Kami membantu pengguna baru maupun berpengalaman: menyediakan panduan berbahasa Indonesia, menerjemahkan istilah teknis, menyebarkan kabar rilis terbaru, serta menjadi tempat bertanya ketika menemui kendala instalasi atau penggunaan sehari-hari.',
  introSupport:
    'Komunitas ini berdiri dan tumbuh atas dukungan pengembang resmi deepin — Wuhan Deepin Technology Co., Ltd. (deepin main community) dan perusahaan induknya, UnionTech Software Technology Co., Ltd.',
} as const;

/**
 * Dukungan & pengakuan resmi dari pihak di balik deepin.
 * Komunitas deepin Indonesia tidak berdiri sendiri — keberadaannya didukung
 * dan diakui oleh pengembang resmi deepin.
 *
 * Catatan: deepin dan UOS dikembangkan oleh dua badan hukum yang berhubungan.
 * Wuhan Deepin Technology Co., Ltd. adalah pengembang deepin (open source),
 * sedangkan UnionTech Software Technology Co., Ltd. adalah perusahaan induknya
 * sekaligus pengembang UOS (Unity Operating System), versi komersial deepin.
 */
export const INDONESIA_SUPPORT = {
  label: 'Dukungan & ekosistem',
  description:
    'Komunitas deepin Indonesia berdiri atas dukungan pengembang resmi deepin. Dukungan tersebut diwujudkan melalui pengakuan resmi komunitas, penunjukan Official deepin Global Ambassador for Indonesia, serta akses koordinasi dan informasi langsung dengan tim deepin.',
  organizations: [
    {
      name: 'Wuhan Deepin Technology Co., Ltd.',
      alias: 'deepin main community',
      role: 'Pengembang resmi Sistem Operasi deepin',
      description:
        'Perusahaan di balik deepin sebagai distribusi Linux open source. Dari sinilah komunitas deepin Indonesia memperoleh pengakuan resmi, dukungan informasi rilis, dan jalur koordinasi dengan tim pengembang.',
      links: [{ label: 'deepin.org', url: 'https://www.deepin.org', icon: 'fas fa-globe' }],
      highlight: true,
    },
    {
      name: 'UnionTech Software Technology Co., Ltd.',
      alias: 'UnionTech',
      role: 'Perusahaan induk Deepin Technology · Pengembang UOS',
      description:
        'Perusahaan induk Wuhan Deepin Technology. Teknologi deepin juga dikembangkan UnionTech dalam bentuk komersial bernama UOS (Unity Operating System) untuk kebutuhan enterprise, pemerintahan, dan institusi — sehingga deepin dan UOS berbagi fondasi teknis yang sama, termasuk DDE dan aplikasi orisinalnya.',
      links: [{ label: 'uniontech.com', url: 'https://www.uniontech.com', icon: 'fas fa-globe' }],
      highlight: false,
    },
  ],
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
    badge: 'Official deepin Global Ambassador for Indonesia',
    badgeDetail: 'Certificate of Appointment — Wuhan Deepin Technology Co., Ltd.',
    photo: '/images/zaky-nr.jpg',
    bio: 'Memimpin komunitas deepin Indonesia sekaligus menjadi perwakilan resmi deepin untuk Indonesia — menjembatani pengguna, kontributor, dan deepin main community.',
    links: [
      { label: 'Website', url: 'https://zaky.siberin.id', icon: 'fas fa-link' },
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
      'deepin Indonesia adalah komunitas pengguna di Indonesia yang berdiri atas dukungan pengembang resmi deepin, yaitu Wuhan Deepin Technology Co., Ltd. (deepin main community) beserta perusahaan induknya, UnionTech Software Technology Co., Ltd. Dukungan itu diwujudkan melalui pengakuan resmi komunitas dan penunjukan Official deepin Global Ambassador for Indonesia, sehingga kami dapat menyalurkan informasi dan aspirasi pengguna Indonesia langsung ke tim deepin.',
  },
  {
    question: 'Apa hubungan deepin dengan UOS dan UnionTech?',
    answer:
      'deepin adalah distribusi Linux open source yang dikembangkan Wuhan Deepin Technology Co., Ltd. Perusahaan tersebut merupakan bagian dari UnionTech Software Technology Co., Ltd., yang mengembangkan UOS (Unity Operating System) sebagai versi komersial deepin untuk kebutuhan enterprise, pemerintahan, dan institusi. Karena berasal dari fondasi yang sama, deepin dan UOS berbagi banyak teknologi seperti DDE, Treeland, dan aplikasi orisinal deepin.',
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
