import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Sistem Administrasi & Tabulasi Digital (KOMANDO)',
    company: 'Paskibra Kota Cimahi (17 Tahun Dedikasi)',
    period: '2009 - Sekarang',
    description: 'Mengembangkan sistem penilaian juri digital KOMANDO yang memangkas waktu rekapitulasi nilai puluhan pleton kejuaraan LKBB dari 2 jam menjadi 0 detik secara real-time, lengkap dengan cetak sertifikat otomatis.',
    highlights: [
      'Rekapitulasi skor juri real-time 0 detik tanpa rumus rusak di Google Sheets',
      'Papan klasemen juara umum & per-kategori otomatis terbentuk seketika',
      'Digitalisasi database induk anggota dan manajemen inventaris seragam',
    ],
    technologies: ['KOMANDO Tabulation', 'Google Apps Script', 'Digital SOP', 'Cloud Database'],
  },
  {
    id: '2',
    role: 'Living Automation Lab & Sistem Kasir Smartphone',
    company: 'Megumi Hotplate Cimahi',
    period: '2025 - Sekarang',
    description: 'Merancang arsitektur operasional dan kasir smartphone mandiri yang terhubung ke Google Sheets & Looker Studio. Menguji coba langsung efisiensi sistem pada transaksi nyata setiap hari.',
    highlights: [
      'Zero Server Cost Architecture (Rp 0/bulan biaya sewa cloud/POS)',
      'Otomatisasi kalkulasi margin laba kotor & kontrol stok bumbu harian',
      'Hemat 2+ jam waktu tutup buku harian bagi tim kasir',
    ],
    technologies: ['Google Sheets Engine', 'Looker Studio BI', 'Webhooks', 'Apps Script'],
  },
  {
    id: '3',
    role: 'Headless Storefront & Sistem Produksi Dokumen Terstruktur',
    company: 'Scalev E-Commerce & Teras Tulis Agency',
    period: '2024 - Sekarang',
    description: 'Membangun storefront headless e-commerce berkonversi tinggi dengan otomatisasi penerusan order ke WhatsApp dan pembuatan draft invoice terintegrasi Google Workspace.',
    highlights: [
      'Alur checkout 1-klik yang mengalirkan pemesanan dokumen langsung ke WhatsApp',
      'Otomasi manajemen antrian produksi untuk 150+ proyek penulisan profesional',
      'Sistem draft invoice & estimasi waktu pengerjaan otomatis via email',
    ],
    technologies: ['Scalev', 'Google Workspace API', 'Workflow Automation', 'Copywriting'],
  },
  {
    id: '4',
    role: 'Bot Otomasi Konten Media Sosial & Sales Scheduler',
    company: 'Eksperimen Otomasi Mandiri (@madebyaapri)',
    period: '2024 - Sekarang',
    description: 'Membangun bot cerdas berbasis Python dan Gemini AI API untuk memantau folder video lokal, menghasilkan copywriting penawaran persuasif, dan menjadwalkan publikasi otomatis.',
    highlights: [
      'Peningkatan efisiensi distribusi konten hingga 300% tanpa campur tangan manual',
      'Integrasi Gemini AI API untuk pembuatan caption & hashtag otomatis',
      'Distribusi penawaran copywriting multi-platform secara berkala',
    ],
    technologies: ['Python', 'Gemini AI API', 'Social REST API', 'Automation Bot'],
  },
];
