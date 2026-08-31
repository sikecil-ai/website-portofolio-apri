import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Owner & Operasional',
    company: 'Megumi Hotplate',
    location: 'Kota Cimahi, Jawa Barat',
    period: '2025 - Sekarang',
    type: 'Full-time',
    description: 'Mengelola operasional harian kedai, rantai pasok (supply chain), strategi pemasaran, dan membangun sistem pencatatan keuangan otomatis berbasis Google Apps Script.',
    highlights: [
      'Membangun sistem kasir smartphone & rekapitulasi laba kotor harian otomatis tanpa sewa server.',
      'Menyinkronkan stok bahan baku dan peringatan restock secara real-time via webhook.',
      'Mengembangkan dashboard Looker Studio untuk pemantauan performa finansial harian.',
    ],
    technologies: ['Google Apps Script', 'Google Sheets Engine', 'Looker Studio', 'Webhooks', 'Business Operations'],
  },
  {
    id: 'exp-2',
    role: 'Pelatih & Instruktur Organisasi',
    company: 'Paskibra MAN Kota Cimahi & SMPN 3 Cimahi',
    location: 'Kota Cimahi, Jawa Barat',
    period: '2009 - Sekarang (17 Tahun Pengabdian)',
    type: 'Contract',
    description: 'Membina kedisiplinan dan kepemimpinan generasi muda, merancang SOP dan program kerja organisasi, serta mendigitalkan sistem penilaian dan rekapitulasi lomba (Kejurcab).',
    highlights: [
      'Merancang dan mengimplementasikan aplikasi KOMANDO untuk tabulasi rekapitulasi skor juri real-time.',
      'Mengurangi waktu rekapitulasi nilai lomba dari hitungan jam menjadi hitungan detik tanpa jeda manual.',
      'Membina ratusan anggota paskibra dalam kepemimpinan, kedisiplinan, dan tata kelola organisasi.',
    ],
    technologies: ['Aplikasi KOMANDO', 'Google Apps Script', 'HTML/Tailwind', 'SOP Desain', 'Leadership Mentoring'],
  },
  {
    id: 'exp-3',
    role: 'Customer Relationship Manager (CRM)',
    company: 'PT Smartek Sistem Indonesia',
    location: 'Indonesia',
    period: 'Profesional',
    type: 'Full-time',
    description: 'Menangani komunikasi bisnis ke bisnis (B2B), manajemen relasi klien, dan koordinasi penyelarasan solusi perangkat lunak dengan kebutuhan bisnis klien.',
    highlights: [
      'Menjembatani kebutuhan teknis solusi software dengan ekspektasi operasional klien korporat.',
      'Menyusun strategi retensi klien dan peningkatan kepuasan penggunaan sistem.',
      'Mengoptimalkan alur komunikasi penanganan keluhan dan permintaan fitur baru.',
    ],
    technologies: ['B2B Relationship', 'CRM Management', 'Software Solution Mapping', 'Client Retention'],
  },
  {
    id: 'exp-4',
    role: 'Founder & Pengelola',
    company: 'Scalev & Teras Tulis',
    location: 'Kota Cimahi / Remote',
    period: 'Wirausaha Digital',
    type: 'Freelance',
    description: 'Mengembangkan alur penjualan e-commerce dan mengelola layanan jasa penulisan serta penerjemahan dokumen terstruktur.',
    highlights: [
      'Mengonfigurasi toko online headless Scalev dengan konversi checkout tinggi.',
      'Menyelesaikan lebih dari 150+ dokumen proyek penulisan dan terjemahan terstruktur.',
      'Mengotomatisasi pengiriman draft, invoice, dan komunikasi order klien.',
    ],
    technologies: ['Scalev Commerce', 'Google Workspace API', 'Content Architecture', 'Copywriting & Translation'],
  },
];
