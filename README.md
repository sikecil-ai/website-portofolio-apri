# 🚀 Modern Minimalist Portfolio Website - Astro & Tailwind CSS

Website portofolio pribadi modern, berkecepatan ultra tinggi, dan dioptimalkan penuh untuk Google SEO. Dibangun khusus untuk **M Apriyanto Wijaya** menggunakan framework **Astro v5**, **Tailwind CSS v3**, dan **TypeScript**.

---

## ✨ Fitur Utama

- 🎨 **Desain Minimalis & Modern**: Desain glassmorphism elegan, ambient gradient glow, dan micro-animations.
- 🌓 **Dukungan Dark Mode & Light Mode**: Switch tema dengan animasi halus dan tanpa *flash of unstyled content* (FOUC) menggunakan `localStorage`.
- 📱 **100% Responsif**: Tampilan sempurna di Desktop, Tablet, dan Smartphone.
- 📂 **Fitur Galeri Kartu Proyek Interaktif**:
  - Filter kategori aplikasi real-time (*Semua*, *Fullstack*, *Web App*, *AI & Data*, *Mobile App*, *Open Source*).
  - Kolom pencarian instan berdasarkan judul atau teknologi.
  - Kartu proyek dengan efek hover 3D & tech badges.
  - **Modal Detail Proyek Interaktif** dengan spesifikasi fitur, ringkasan performa/stats, demo langsung, dan tautan GitHub repository.
- 🔍 **Google SEO Teroptimasi Penuh (100/100 Lighthouse Ready)**:
  - Meta tags dinamis (`<title>`, `<meta description>`, `robots`).
  - Open Graph & Twitter Cards lengkap untuk preview sosial media.
  - Skema Terstruktur **JSON-LD Schema.org** (`Person`, `WebSite`, dan `ItemList` Software Application).
  - Peta situs otomatis (`sitemap-index.xml`) via `@astrojs/sitemap`.
  - File `robots.txt` ramah bot pencari.
- ✉️ **Fitur Kontak Interaktif**:
  - Salin alamat email satu-klik dengan notifikasi toast.
  - Form pesan direct mailto.
  - Tautan pesan instan terintegrasi WhatsApp.

---

## 📁 Struktur Direktori Proyek

```text
├── public/
│   ├── favicon.svg                # Favicon monogram brand
│   ├── robots.txt                 # Konfigurasi crawler Google SEO
│   └── images/
│       ├── avatar.svg             # Ilustrasi avatar developer
│       └── projects/              # Screenshot / ilustrasi kartu proyek
│           ├── project-analytics.svg
│           ├── project-ai-docs.svg
│           ├── project-ecommerce.svg
│           ├── project-fitness.svg
│           ├── project-auraui.svg
│           └── project-tasks.svg
├── src/
│   ├── components/                # Komponen UI modular
│   │   ├── SEO.astro              # Meta tags & JSON-LD Google SEO
│   │   ├── Header.astro           # Sticky navbar & mobile drawer
│   │   ├── ThemeToggle.astro      # Tombol ganti tema (Dark/Light)
│   │   ├── Hero.astro             # Bagian perkenalan & statistik
│   │   ├── ProjectCard.astro      # Kartu item proyek
│   │   ├── ProjectGallery.astro   # Galeri proyek + Filter + Modal
│   │   ├── Skills.astro           # Daftar keahlian & stack teknologi
│   │   ├── Experience.astro       # Timeline karir & pengalaman
│   │   ├── Contact.astro          # Form kontak & WhatsApp direct
│   │   └── Footer.astro           # Footer navigasi & hak cipta
│   ├── data/                      # File data terpusat (Mudah diubah)
│   │   ├── siteConfig.ts          # Profil diri, sosmed, URL, & kata kunci SEO
│   │   ├── projects.ts            # Data proyek galeri kartu
│   │   ├── skills.ts              # Data pengelompokan keahlian
│   │   └── experiences.ts         # Data riwayat pekerjaan & pendidikan
│   ├── layouts/
│   │   └── Layout.astro           # Layout dasar HTML & script tema
│   ├── pages/
│   │   ├── index.astro            # Halaman utama portofolio
│   │   └── 404.astro              # Halaman 404 custom
│   ├── styles/
│   │   └── global.css             # Tailwind directives & style custom
│   └── types/
│       └── index.ts               # Type definition TypeScript
├── astro.config.mjs               # Konfigurasi integrasi Astro
├── tailwind.config.mjs            # Konfigurasi warna, font, & animasi Tailwind
├── tsconfig.json                  # Konfigurasi path aliases TypeScript
└── package.json                   # Dependencies dan npm scripts
```

---

## 🛠️ Panduan Menjalankan Proyek

### 1. Menjalankan Mode Development
Untuk melihat website secara langsung di browser lokal Anda:

```bash
npm run dev
```

Buka URL: **[http://localhost:4321](http://localhost:4321)**

### 2. Membangun untuk Production (Build)
```bash
npm run build
```
File hasil static generation siap di-deploy akan berada di folder `dist/`.

### 3. Preview Hasil Build Lokal
```bash
npm run preview
```

---

## 📝 Kustomisasi Data Pribadi & Proyek

Semua data tersimpan rapi di folder `src/data/` sehingga Anda tidak perlu mengedit file template HTML langsung:

1. **Informasi Pribadi & Kontak**: Edit file `src/data/siteConfig.ts`
2. **Menambah / Mengubah Proyek Galeri**: Edit file `src/data/projects.ts`
3. **Keahlian & Stack**: Edit file `src/data/skills.ts`
4. **Pengalaman Karir**: Edit file `src/data/experiences.ts`

---

## 🌐 Panduan Deployment

Website ini merupakan **Static Site (SSG)** yang sangat cepat dan dapat di-host secara gratis di berbagai platform:

- **Vercel**: Hubungkan repository GitHub Anda ke Vercel, framework preset otomatis terdeteksi sebagai `Astro`.
- **Netlify**: Hubungkan repository GitHub, build command: `npm run build`, publish directory: `dist`.
- **Cloudflare Pages**: Hubungkan repository, framework preset: `Astro`.
