import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Founder & Head of Innovation (Living Automation Lab)',
    company: 'Megumi Hotplate Cimahi',
    period: '2025 - Sekarang',
    description: 'Mengelola bisnis kuliner mandiri sekaligus menjadikannya sebagai Living Innovation Lab—tempat merancang, menguji, dan menyempurnakan sistem kasir smartphone, kalkulasi HPP otomatis, dan dashboard Looker Studio pada transaksi nyata setiap hari.',
    highlights: [
      'Implementasi Zero Server Cost Architecture pada operasional bisnis kuliner harian',
      'Otomatisasi kalkulasi margin laba kotor & kontrol stok bumbu tanpa kebocoran',
      'Studi kasus nyata pembuktian efisiensi waktu 2+ jam per hari bagi tim kasir',
    ],
    technologies: ['Google Sheets Engine', 'Google Apps Script', 'Looker Studio', 'Webhooks'],
  },
  {
    id: '2',
    role: 'Instruktur Utama & Arsitek Sistem Tabulasi (17 Tahun Pengabdian)',
    company: 'Paskibra MAN Kota Cimahi & SMPN 3 Cimahi',
    period: '2009 - Sekarang',
    description: 'Mendedikasikan 17 tahun dalam pembinaan karakter, kedisiplinan, dan kepemimpinan generasi muda. Merancang aplikasi tabulasi kejuaraan digital (KOMANDO) yang memangkas waktu rekapitulasi penilaian juri dari jam menjadi detik.',
    highlights: [
      'Membina ratusan alumni dan mengantarkan puluhan pleton menjuarai LKBB tingkat kota & provinsi',
      'Mengembangkan sistem penilaian juri digital KOMANDO dengan input delay 0 detik (real-time)',
      'Digitalisasi database induk anggota, rekam jejak prestasi, dan SOP inventaris seragam',
    ],
    technologies: ['KOMANDO System', 'Google Apps Script', 'Leadership Mentoring', 'SOP Digital'],
  },
  {
    id: '3',
    role: 'Customer Relationship Manager (CRM) & Operations',
    company: 'PT Smartek Sistem Indonesia',
    period: 'Pengalaman Profesional',
    description: 'Mengelola relasi kemitraan strategis, alur retensi klien korporat, serta penyusunan alur kerja automasi komunikasi dan pelaporan kepuasan pelanggan.',
    highlights: [
      'Penyusunan standar operasional prosedur penanganan prospek dan keluhan klien',
      'Otomatisasi alur kerja komunikasi follow-up berbasis database CRM terpusat',
      'Kolaborasi lintas divisi dalam integrasi solusi teknologi untuk klien B2B',
    ],
    technologies: ['CRM Architecture', 'Workflow Automation', 'Client Retention', 'Operational SOP'],
  },
  {
    id: '4',
    role: 'Founder & E-Commerce Architect',
    company: 'Scalev E-Commerce & Teras Tulis Agency',
    period: 'Pengalaman Wirausaha',
    description: 'Membangun storefront headless commerce berbasis Scalev untuk toko online cepat serta memimpin platform agensi penulisan dan penerjemahan dokumen terstruktur.',
    highlights: [
      'Optimasi alur checkout 1-klik yang mengalirkan pemesanan dokumen langsung ke WhatsApp',
      'Penyelesaian 150+ proyek penulisan dokumen profesional dengan otomatisasi invoice',
      'Integrasi Google Workspace untuk manajemen database antrian produksi secara real-time',
    ],
    technologies: ['Scalev', 'Google Workspace API', 'Headless Commerce', 'Copywriting Engine'],
  },
];
