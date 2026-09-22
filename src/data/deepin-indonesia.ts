import type { FaqItem, PlanItem } from '@/types';

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

/** Fakta singkat komunitas, ditampilkan di samping narasi pengantar. */
export const INDONESIA_FACTS = [
  { icon: 'fa-flag', label: 'Didirikan', value: '2025' },
  { icon: 'fa-comments', label: 'Basis komunitas', value: 'Telegram' },
  { icon: 'fa-language', label: 'Bahasa utama', value: 'Indonesia' },
  { icon: 'fa-layer-group', label: 'Fokus', value: 'deepin 25 & 26' },
] as const;

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
    anchor: '#product-planning',
    url: '/product-planning/',
    cta: 'Buka halaman lengkap',
    available: true,
  },
  {
    id: 'original-apps',
    title: 'Original Apps',
    technicalTitle: 'deepin Original Applications',
    description:
      'Aplikasi orisinal buatan deepin yang dirancang menyatu dengan sistem — dari File Manager hingga App Store.',
    icon: 'fa-shapes',
    anchor: '#original-apps',
    cta: 'Lihat daftar aplikasi',
    available: false,
  },
  {
    id: 'desktop-environment',
    title: 'Desktop Environment',
    technicalTitle: 'Deepin Desktop Environment (DDE)',
    description:
      'Lingkungan desktop deepin yang indah dan ringan, kini berjalan di atas Treeland — compositor Wayland milik deepin.',
    icon: 'fa-desktop',
    anchor: '#desktop-environment',
    cta: 'Kenali DDE & Treeland',
    available: false,
  },
] as const;

/** Aplikasi orisinal deepin yang paling sering dipakai. */
export const ORIGINAL_APPS: PlanItem[] = [
  {
    title: 'File Manager',
    description:
      'Manajemen berkas modern dengan tab, pencarian cepat, pemrosesan batch, dan pratinjau langsung.',
    tags: ['Berkas'],
  },
  {
    title: 'Terminal',
    description:
      'Emulator terminal yang mendukung split view, tema, quake mode, serta kustomisasi perintah favorit.',
    tags: ['Perintah'],
  },
  {
    title: 'App Store',
    description:
      'Toko aplikasi terintegrasi dengan kurasi, kategori jelas, dan pemasangan satu klik untuk paket Linyaps maupun APT.',
    tags: ['Linyaps', 'APT'],
  },
  {
    title: 'Text Editor',
    description:
      'Editor ringan dengan penomoran baris, pencarian lanjutan, dan tampilan Markdown yang nyaman.',
    tags: ['Markdown'],
  },
  {
    title: 'Document Viewer',
    description:
      'Pembaca PDF dan dokumen dengan anotasi, pencarian teks, serta mode nyaman untuk mata.',
    tags: ['PDF'],
  },
  {
    title: 'Image Viewer',
    description:
      'Penampil gambar cepat dengan rotasi, pemotongan sederhana, dan dukungan format yang luas.',
    tags: ['Gambar'],
  },
  {
    title: 'Music & Movie',
    description:
      'Pemutar musik dan video bawaan dengan pengelolaan playlist, subtitle, serta dukungan codec umum.',
    tags: ['Media'],
  },
  {
    title: 'Screenshot & Screen Recorder',
    description:
      'Menangkap layar, jendela, atau area tertentu, sekaligus merekam aktivitas layar dengan mudah.',
    tags: ['Utilitas'],
  },
  {
    title: 'System Monitor',
    description:
      'Memantau penggunaan CPU, memori, jaringan, dan proses yang berjalan secara real-time.',
    tags: ['Monitoring'],
  },
  {
    title: 'Voice Notes',
    description:
      'Mencatat suara dengan transkripsi menjadi teks, memudahkan rapat dan kuliah tanpa menulis manual.',
    tags: ['Produktivitas'],
  },
  {
    title: 'Boot Maker',
    description:
      'Membuat USB bootable deepin dari berkas ISO dalam beberapa langkah sederhana.',
    tags: ['Instalasi'],
  },
  {
    title: 'Deepin Installer',
    description:
      'Pemasang sistem grafis dengan alur jelas, dukungan full-disk encryption, dan partisi otomatis.',
    tags: ['Instalasi'],
  },
];

/** Sorotan Deepin Desktop Environment (DDE) dan Treeland. */
export const DDE_FEATURES: PlanItem[] = [
  {
    title: 'DDE 7.0 berbasis QML',
    description:
      'Seluruh antarmuka desktop ditulis ulang dengan QML sehingga animasi lebih halus dan tampilan lebih konsisten.',
    tags: ['QML', 'DDE 7.0'],
  },
  {
    title: 'Treeland (Wayland)',
    description:
      'Compositor Wayland mandiri milik deepin yang menghadirkan pengalaman desktop lebih mulus dan modern.',
    tags: ['Treeland', 'Wayland'],
  },
  {
    title: 'Dock & Launcher',
    description:
      'Panel aplikasi dengan mode efisien maupun mode fesyen, pencarian instan, dan pengelompokan jendela.',
    tags: ['Dock'],
  },
  {
    title: 'Control Center',
    description:
      'Pusat pengaturan yang menyatukan jaringan, tampilan, suara, notifikasi, dan pembaruan sistem.',
    tags: ['Settings'],
  },
  {
    title: 'Cross-Device Collaboration',
    description:
      'Menghubungkan deepin dengan perangkat lain untuk berbagi berkas, layar, dan papan klip.',
    tags: ['Kolaborasi'],
  },
  {
    title: 'Tema & Dark Mode',
    description:
      'Tema terang dan gelap yang konsisten di seluruh aplikasi, dengan aksen warna yang dapat diubah.',
    tags: ['Tema'],
  },
];

/** Tonggak penting komunitas deepin Indonesia. */
export const INDONESIA_TIMELINE = [
  {
    year: '2025',
    title: 'Komunitas deepin Indonesia didirikan',
    desc: 'Wadah resmi bagi pengguna deepin di Indonesia dibentuk, dengan kanal Telegram sebagai pusat diskusi harian.',
  },
  {
    year: '2025',
    title: 'Kanal berbahasa Indonesia aktif',
    desc: 'Panduan pemasangan, penyesuaian pasca-instalasi, dan tips harian mulai diterbitkan dalam Bahasa Indonesia.',
  },
  {
    year: '2026',
    title: 'Release notes terkurasi',
    desc: 'Setiap rilis deepin 25 dirangkum dalam artikel Bahasa Indonesia agar pengguna mudah mengikuti perubahan.',
  },
  {
    year: '2026',
    title: 'Situs tentang deepin diluncurkan',
    desc: 'Product planning, aplikasi orisinal, dan lingkungan desktop deepin tersedia dalam satu tempat di about.deepin.id.',
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
      'Halaman ini menjelaskan komunitas deepin Indonesia, lalu dilanjutkan dengan tiga topik utama: Product Planning (roadmap versi dan rencana fitur), Original Apps (aplikasi orisinal deepin), serta Desktop Environment (DDE dan Treeland).',
  },
];
