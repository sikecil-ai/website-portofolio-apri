import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Otomasi Alur Kerja & Cloud Engine',
    description: 'Membangun ekosistem otomasi operasional bisnis dan organisasi tanpa biaya sewa server.',
    icon: 'server',
    skills: [
      { name: 'Google Apps Script (GAS)', level: 'Expert', highlight: true, icon: 'gas' },
      { name: 'Google Workspace Ecosystem', level: 'Expert', highlight: true, icon: 'google' },
      { name: 'Webhook & REST APIs', level: 'Advanced', highlight: true, icon: 'api' },
      { name: 'SQL & Spreadsheet Formulas', level: 'Expert', highlight: true, icon: 'database' },
      { name: 'Serverless Automation', level: 'Advanced', icon: 'cloud' },
    ],
  },
  {
    category: 'Pemrograman & Web Development',
    description: 'Pengembangan web cepat, antarmuka modern, dan skrip otomasi tangguh.',
    icon: 'layout',
    skills: [
      { name: 'JavaScript / Node.js', level: 'Advanced', highlight: true, icon: 'javascript' },
      { name: 'Python Automation', level: 'Advanced', highlight: true, icon: 'python' },
      { name: 'HTML5 & Tailwind CSS', level: 'Expert', highlight: true, icon: 'tailwind' },
      { name: 'Astro Web Framework', level: 'Advanced', icon: 'astro' },
      { name: 'Git & Version Control', level: 'Proficient', icon: 'git' },
    ],
  },
  {
    category: 'AI Solutions & Integrasi LLM',
    description: 'Penerapan kecerdasan buatan untuk percepatan konten, analisis data, dan sales bot.',
    icon: 'sparkles',
    skills: [
      { name: 'Google Gemini API', level: 'Advanced', highlight: true, icon: 'gemini' },
      { name: 'OpenAI API', level: 'Advanced', icon: 'openai' },
      { name: 'Prompt Engineering', level: 'Expert', highlight: true, icon: 'prompt' },
      { name: 'Auto Content Scheduler', level: 'Expert', highlight: true, icon: 'bot' },
    ],
  },
  {
    category: 'Visual Analytics, Desain & CRM',
    description: 'Dashboard analitik interaktif, visual branding, dan manajemen relasi klien.',
    icon: 'cloud',
    skills: [
      { name: 'Looker Studio (BI & Analytics)', level: 'Expert', highlight: true, icon: 'looker' },
      { name: 'Canva Design & Branding', level: 'Advanced', icon: 'canva' },
      { name: 'CapCut Video Editing', level: 'Advanced', icon: 'capcut' },
      { name: 'B2B Client Relationship (CRM)', level: 'Expert', highlight: true, icon: 'crm' },
      { name: 'E-Commerce (Scalev)', level: 'Advanced', icon: 'store' },
    ],
  },
];
