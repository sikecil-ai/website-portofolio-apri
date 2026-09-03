import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Otomasi Google Workspace & Sheets Engine',
    description: 'Arsitektur database & logika otomasi bisnis tanpa biaya sewa server bulanan seumur hidup.',
    icon: 'server',
    skills: [
      { name: 'Google Apps Script (GAS)', level: 'Senjata Utama', highlight: true, icon: 'gas' },
      { name: 'Google Sheets Modular Engine', level: 'Senjata Utama', highlight: true, icon: 'sheets' },
      { name: 'Formulir Digital Smartphone', level: 'Teruji di Lapangan', highlight: true, icon: 'mobile' },
      { name: 'Koneksi Web App GAS (doGet & doPost API)', level: 'Produksi Aktif', highlight: true, icon: 'webhook' },
    ],
  },
  {
    category: 'Kecerdasan Buatan (Google Gemini AI)',
    description: 'Integrasi AI yang berpijak pada data nyata untuk copywriting penawaran dan pemrosesan data otomatis.',
    icon: 'sparkles',
    skills: [
      { name: 'Google Gemini AI API Engine', level: 'Senjata Utama', highlight: true, icon: 'gemini' },
      { name: 'Structured Prompt Engineering', level: 'Teruji di Lapangan', highlight: true, icon: 'prompt' },
      { name: 'Natural Human Storytelling', level: 'Produksi Aktif', highlight: true, icon: 'story' },
      { name: 'Grounding on Real Data', level: 'Teruji di Lapangan', highlight: true, icon: 'data' },
    ],
  },
  {
    category: 'Visual Analytics (Looker Studio BI)',
    description: 'Dashboard visual interaktif untuk memantau omset, performa kasir, dan stok langsung di smartphone.',
    icon: 'cloud',
    skills: [
      { name: 'Looker Studio Smartphone Dashboard', level: 'Senjata Utama', highlight: true, icon: 'looker' },
      { name: 'Kalkulasi Otomatis HPP & Laba', level: 'Teruji di Lapangan', highlight: true, icon: 'finance' },
      { name: 'Visualisasi Penilaian Real-Time', level: 'Produksi Aktif', highlight: true, icon: 'chart' },
      { name: 'Monitoring Stok & Bahan Baku', level: 'Teruji di Lapangan', highlight: true, icon: 'inventory' },
    ],
  },
  {
    category: 'Modern Web & Fast Frontend',
    description: 'Antarmuka web modern yang ringan, cepat dimuat (< 1 detik), dan ramah sentuhan layar sentuh.',
    icon: 'layout',
    skills: [
      { name: 'Astro Static Engine (SSG)', level: 'Senjata Utama', highlight: true, icon: 'astro' },
      { name: 'Tailwind CSS Modern Styling', level: 'Senjata Utama', highlight: true, icon: 'tailwind' },
      { name: 'JavaScript ES6+ & HTML5', level: 'Teruji di Lapangan', highlight: true, icon: 'js' },
      { name: 'Git Version Control & Vercel', level: 'Produksi Aktif', highlight: true, icon: 'git' },
    ],
  },
];
