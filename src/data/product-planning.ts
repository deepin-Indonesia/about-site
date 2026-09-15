import type { FaqItem, PlanCategory, ReleaseScheduleItem } from '@/types';

/**
 * Konten halaman Product Planning deepin.
 *
 * Catatan penulisan:
 * - Narasi memakai Bahasa Indonesia.
 * - Istilah teknis (nama fitur, komponen, format paket) tetap Bahasa Inggris
 *   agar konsisten dengan dokumentasi resmi deepin dan mudah dipahami publik.
 */

export const PLANNING_PAGE = {
  title: 'Product Planning',
  headline: 'Product Planning deepin',
  tagline: 'Roadmap versi & rencana fitur deepin',
  updated: '2026-09-14',
  updatedLabel: '14 September 2026',
  intro:
    'Agar pengguna komunitas selalu mendapat informasi terbaru mengenai roadmap versi Sistem Operasi deepin (selanjutnya disebut "deepin"), tim deepin mengumumkan rencana sasaran (planned objectives) untuk versi pre-release berikutnya sebelum versi tersebut diluncurkan.',
  introDetail:
    'Detail perencanaan disampaikan dari sisi teknis (technical) dan fungsional (functional), sehingga siapa pun dapat memperoleh gambaran awal mengenai arah pengembangan deepin.',
} as const;

/** Halaman daftar release notes deepin di news.deepin.id. */
export const RELEASE_NOTES_URL = 'https://news.deepin.id/?tag=release-notes';

/** Tabel jadwal rilis (release schedule). */
export const RELEASE_SCHEDULE: ReleaseScheduleItem[] = [
  {
    version: 'deepin 25.3.0',
    slug: 'deepin-25-3-0',
    timeline: 'Oktober 2026',
    dateTime: '2026-10',
    status: 'planned',
    statusLabel: 'Akan dirilis',
  },
  {
    version: 'deepin 25.2.0',
    slug: 'deepin-25-2-0',
    timeline: 'Juli 2026',
    dateTime: '2026-07',
    status: 'released',
    statusLabel: 'Sudah dirilis',
    url: 'https://news.deepin.id/2026-07-08-deepin-25-2-release/',
  },
  {
    version: 'deepin 25.1.0',
    slug: 'deepin-25-1-0',
    timeline: 'April 2026',
    dateTime: '2026-04',
    status: 'released',
    statusLabel: 'Sudah dirilis',
    // Belum ada artikel khusus deepin 25.1.0; arahkan ke daftar release notes.
    url: RELEASE_NOTES_URL,
  },
];

/** Versi yang sedang direncanakan dan menjadi fokus halaman ini. */
export const NEXT_RELEASE = {
  version: 'deepin 25.3.0',
  slug: 'deepin-25-3-0',
  timeline: 'Oktober 2026',
  dateTime: '2026-10',
  statusLabel: 'Akan dirilis',
} as const;

/** Kategori rencana fitur deepin 25.3.0. */
export const PLAN_CATEGORIES: PlanCategory[] = [
  {
    id: 'feature-updates',
    title: 'Pembaruan Fitur',
    technicalTitle: 'Feature Updates',
    description:
      'Peningkatan kapabilitas aplikasi inti deepin, mulai dari asisten AI hingga aplikasi harian.',
    icon: 'fa-wand-magic-sparkles',
    items: [
      {
        title: 'UOS AI (AI Assistant)',
        description:
          'Local knowledge base dan kemampuan memory akan di-upgrade, dengan dukungan integrasi informasi dari email dan calendar. Hadir pula Skills Hub baru, on-device voice input, serta kemampuan interaksi browser — memungkinkan UOS AI menjelajah, mengklik, dan menyelesaikan tugas di browser berdasarkan instruksi pengguna.',
        tags: ['UOS AI', 'Skills Hub', 'On-device AI', 'Memory'],
      },
      {
        title: 'System Manager',
        description:
          'Kapabilitas baru meliputi system diagnostics, one-click repair, storage cleanup, performance optimization, dan troubleshooting tools — membuat perawatan sistem jadi jauh lebih mudah.',
        tags: ['System Manager', 'Diagnostics', 'Maintenance'],
      },
      {
        title: 'Pengalaman Dokumen & Aplikasi',
        description:
          'Document Viewer akan mendukung viewing-state restoration, batch printing, dan eye-care modes. Text Editor menghadirkan pengalaman pencarian yang lebih baik serta dukungan Markdown viewing, sementara App Store kini menambahkan dark theme.',
        tags: ['Document Viewer', 'Text Editor', 'Markdown', 'App Store'],
      },
    ],
  },
  {
    id: 'system-ecosystem',
    title: 'Sistem & Ekosistem',
    technicalTitle: 'System and Ecosystem',
    description:
      'Penyempurnaan fondasi sistem: instalasi, pemulihan, container, GPU, hingga desktop environment.',
    icon: 'fa-microchip',
    items: [
      {
        title: 'Instalasi & Pemulihan',
        description:
          'Full-disk installation akan mendukung penyimpanan data pengguna (retaining user data), disertai visual dan interaksi yang lebih baik. Immutable System terus dioptimalkan pada penggunaan storage untuk upgrade, snapshot storage, dan kemampuan system rollback.',
        tags: ['Installer', 'Immutable System', 'Snapshot', 'Rollback'],
      },
      {
        title: 'Dukungan Container & GPU',
        description:
          'Kompatibilitas GPU rendering untuk aplikasi Linyaps di platform GPU dalam negeri akan ditingkatkan. NVIDIA Container Toolkit juga akan disertakan untuk mengaktifkan akselerasi NVIDIA GPU bagi aplikasi yang berjalan di container.',
        tags: ['Linyaps', 'NVIDIA', 'GPU Acceleration', 'Container'],
      },
      {
        title: 'Optimasi Sistem',
        description:
          'Font dan aplikasi bawaan (preinstalled) akan dirampingkan untuk mengurangi jejak sistem (system footprint) dan menghadirkan pengalaman yang lebih ringan secara keseluruhan.',
        tags: ['System Footprint', 'Performance'],
      },
      {
        title: 'Treeland Desktop Environment',
        description:
          'Dukungan protokol Wayland dan graphics stack terus ditingkatkan, dengan kompatibilitas aplikasi X11 yang lebih baik, remote desktop, screen capture dan recording, multi-user support, serta window animations — membuat desktop environment lebih stabil, responsif, dan mudah dikembangkan.',
        tags: ['Treeland', 'Wayland', 'X11', 'Remote Desktop'],
      },
    ],
  },
  {
    id: 'usability-improvements',
    title: 'Peningkatan Kegunaan',
    technicalTitle: 'Usability Improvements',
    description:
      'Perbaikan detail sehari-hari yang terasa langsung: konektivitas, akun, hingga konsumsi daya.',
    icon: 'fa-hand-pointer',
    items: [
      {
        title: 'Control Center & Konektivitas',
        description:
          'Mempercepat loading speed halaman utama Control Center dan menyempurnakan pengelolaan koneksi Wi-Fi serta Bluetooth langsung dari taskbar.',
        tags: ['Control Center', 'Wi-Fi', 'Bluetooth', 'Taskbar'],
      },
      {
        title: 'Pemulihan Akun',
        description:
          'Mendukung reset password melalui security questions untuk memperbaiki proses account recovery.',
        tags: ['Security Questions', 'Account Recovery'],
      },
      {
        title: 'Penyempurnaan Praktis',
        description:
          'Menambahkan smart noise reduction, tampilan detik (seconds display) pada jam di taskbar, status baterai perangkat Bluetooth, dan berbagai perbaikan praktis lainnya.',
        tags: ['Noise Reduction', 'Taskbar Clock', 'Bluetooth'],
      },
      {
        title: 'Power Management',
        description:
          'Menambahkan idle device power saving untuk menekan konsumsi daya perangkat yang tidak aktif saat menggunakan baterai, sehingga masa pakai baterai semakin panjang.',
        tags: ['Power Management', 'Battery Life'],
      },
    ],
  },
];

/** Sorotan singkat untuk ringkasan di bagian atas halaman. */
export const PLAN_HIGHLIGHTS = [
  { icon: 'fa-robot', label: 'UOS AI + Skills Hub' },
  { icon: 'fa-screwdriver-wrench', label: 'System Manager' },
  { icon: 'fa-database', label: 'Immutable System' },
  { icon: 'fa-cube', label: 'Linyaps & NVIDIA Container' },
  { icon: 'fa-desktop', label: 'Treeland / Wayland' },
  { icon: 'fa-battery-full', label: 'Power Management' },
] as const;

/** Catatan penting / disclaimer resmi. */
export const PLAN_DISCLAIMER =
  'Rencana fitur inti yang diuraikan di atas dapat berbeda dari konten versi final. Untuk detail fitur, silakan merujuk ke release notes deepin yang akan diperbarui setelah versi resmi dirilis. Fitur baru dan item optimasi spesifik mengikuti release notes final.';

/** FAQ untuk rich result (FAQPage) sekaligus membantu pembaca. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Apa itu Product Planning deepin?',
    answer:
      'Product Planning adalah pengumuman resmi tim deepin mengenai rencana sasaran (planned objectives) untuk versi pre-release berikutnya. Rencana ini disampaikan dari sisi teknis dan fungsional agar pengguna komunitas mendapat gambaran awal arah pengembangan deepin.',
  },
  {
    question: 'Kapan deepin 25.3.0 dirilis?',
    answer:
      'deepin 25.3.0 dijadwalkan pada Oktober 2026. Jadwal dapat berubah sewaktu-waktu; pantau release notes resmi deepin untuk kepastian tanggal rilis.',
  },
  {
    question: 'Versi deepin apa yang sudah dirilis pada 2026?',
    answer:
      'deepin 25.1.0 telah dirilis pada April 2026 dan deepin 25.2.0 pada Juli 2026. Versi berikutnya yang direncanakan adalah deepin 25.3.0 pada Oktober 2026.',
  },
  {
    question: 'Apakah rencana fitur deepin 25.3.0 pasti masuk ke versi final?',
    answer:
      'Tidak selalu. Rencana fitur inti yang diumumkan dapat berbeda dari konten versi final. Detail fitur mengikuti release notes deepin yang diperbarui saat versi resmi dirilis, sehingga fitur dan item optimasi spesifik dapat berubah.',
  },
  {
    question: 'Di mana saya bisa membaca release notes deepin dalam Bahasa Indonesia?',
    answer:
      'Release notes deepin tersedia di halaman berita komunitas deepin Indonesia pada kategori release-notes, dan akan diperbarui begitu versi resmi dirilis.',
  },
];
