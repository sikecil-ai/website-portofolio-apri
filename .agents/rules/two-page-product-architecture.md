# Standar Arsitektur 2-Halaman Produk (Two-Page Product Architecture)

Aturan ini wajib diacu saat merilis, memperbarui, atau mempublikasikan sistem mahakarya buatan Kang Apri (@madebyaapri). Setiap sistem tidak boleh hanya berdiri sebagai artikel saja atau sebagai halaman proyek saja, melainkan WAJIB memiliki **2 Halaman Terintegrasi**:

---

## 🏛️ 1. Halaman 1: Artikel Studi Kasus Storytelling (`/artikel/[slug]`)
* **Peran Funnel:** Middle-of-Funnel (Membangun Empati, Kredibilitas E-E-A-T, dan Kepercayaan Pembaca).
* **Standar Penulisan:** Wajib mematuhi `seo-article-writer` dan `human-copywriting-engine`.
* **Struktur Wajib:**
  1. *Latar Belakang & Pertemuan Manusiawi:* Kisah awal, hubungan silaturahmi dengan guru, pembina, atau owner UMKM.
  2. *Titik Nyeri Nyata (The Pain Point):* Gambaran penderitaan kerja manual sebelum ada sistem (kertas fotokopi, tumpukan berkas, nota hilang, antrean lambat).
  3. *Perjalanan Eksperimen & Vibecoding:* Perjalanan teknis bersama AI (Gemini Pro, Claude, Google Antigravity).
  4. *Inovasi & Nilai Luhur:* Hal baru yang pertama kali diciptakan (misal: dashboard admin pertama, sedekah alumni, atau hotfix live).
  5. *Banner Interaktif Callout di Tengah Artikel:* Kotak visual yang mengajak pembaca membuka **Halaman 2 (Etalase Aplikasi Play Store Style)**.
  6. *Rumus Penutup Baku Interaktif:*
     - Rangkuman esensi cerita 1 paragraf.
     - Pertanyaan interaktif ke pembaca.
     - Ajakan ngobrol langsung via WhatsApp.

---

## 📱 2. Halaman 2: Etalase Sistem & Dedicated Closing Page (`/sistem/[slug]`)
* **Peran Funnel:** Bottom-of-Funnel (Pembuktian Visual Dual-Device, Kejelasan Nilai, dan Dedicated Closing).
* **Standar Tampilan Benchmark:** Mengadopsi kombinasi **Google Play Store Detail** + **AgenSoal High-Converting Landing Page Standard** (`https://www.agensoal.com/`):
* **Komponen Wajib:**
  1. *Hero Section Dual-Device Mockup (Desktop + Mobile):*
     - Menampilkan preview frame **Desktop / Laptop** (untuk dashboard admin sekolah/owner) dan frame **Mobile Smartphone** (untuk input cepat siswa/anggota) secara berdampingan.
     - Membuktikan seketika bahwa aplikasi siap digunakan di segala perangkat tanpa perlu instalasi rumit.
  2. *Squircle App Icon + Lencana Verifikasi Resmi Instansi.*
  3. *Play Store Key Metrics Strip:* 5 metrik utama (⭐ Rating 5.0, 👥 Jumlah Pengguna/Siswa, ⚡ Kecepatan, 💰 Rp 0 Biaya Server, 🛡️ Integritas Sistem).
  4. *Tactile Action Buttons Bar (AgenSoal Style):*
     - Tombol aksi tegas dengan efek klik solid shadow (misal: `[ 🚀 Buka Portal Demo (Sites) ]` + `[ 📖 Baca Kisah di Balik Layar ]` + `[ 💬 Konsultasi WA Langsung ]`).
  5. *Interactive Viewport Switcher / Tabs:* Pengunjung dapat berganti melihat detail tampilan "Desktop Admin" vs "Mobile Pengguna".
  6. *Horizontal Screenshot & Modules Slider:* Kartu mockup modul fitur yang bisa digeser menyamping (*snap scroll*), terhubung ke modal lightbox adaptif yang WAJIB mematuhi standar `adaptive-screenshot-lightbox-standard.md` dan skill `screenshot-lightbox-framing`.
  7. *Feature-to-Benefit Pairing ("So What?" Test):* Setiap fitur dipasangkan dengan dampak nyata bagi operasional.
  8. *Spesifikasi Teknis & Keamanan Google Workspace Cloud (Zero Server Cost).*
  9. *FAQ Silent Objection Killer:* Menghancurkan keraguan tersembunyi instansi.
  10. *Dedicated Closing Conversion Card:* Area penutup tegas yang mengarahkan sekolah/organisasi untuk segera mengadopsi sistem atau berkonsultasi via WhatsApp.

---

## 🖼️ 3. Aturan Mutu Open Graph & Social Sharing (Anti-Blank Preview)
* **Wajib Menggunakan File Raster (PNG atau JPG):** Scraper media sosial (Threads, WhatsApp, Facebook, X/Twitter, LinkedIn) **TIDAK MENDUKUNG format SVG** untuk `og:image`.
* **Dimensi Standar:** Wajib 1200 x 630 px.
* **Format Path:** Disimpan di `public/images/og-[slug].png` dan dipetakan di `ogImageMap` dalam `src/pages/artikel/[slug].astro`.
* **Komposisi Visual:**
  - Badge instansi resmi & badge keunggulan (misal: *MAN Kota Cimahi*, *Zero Server Cost*).
  - Judul studi kasus tegas dan mudah terbaca di thumbnail feed.
  - Kartu mockup preview sistem + profil Kang Apri (@madebyaapri).

---

## 🔗 4. Rumus Baku Link Demo Google Sites
* **Formula Standar:**  
  `https://sites.google.com/view/[nama-aplikasi]/[slug-sekolah-atau-klien]`
* **Contoh Implementasi:**
  - G7KAIH Mankoci: `https://sites.google.com/view/g7kaih/mankoci`
  - KOMANDO Paskibra: `https://sites.google.com/view/1-komando`
  - Si Paling Rekap: `https://sites.google.com/view/sipalingrekap`
  - Si Paling Kasir: `https://sites.google.com/view/sipalingkasir`

---

## 🔄 5. Alur Tautan Silang (Two-Way Linking)
* Halaman 1 (Artikel) HARUS menautkan tombol visual ke Halaman 2 (`/sistem/...`).
* Halaman 2 (Sistem) HARUS menyediakan tombol *"📖 Baca Kisah di Balik Layar"* yang menautkan ke Halaman 1 (`/artikel/...`).
* Kedua halaman saling menguatkan sinyal SEO dan memandu calon klien dari sekadar membaca cerita santai hingga siap mengirim pesan WhatsApp.

