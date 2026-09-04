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

## 📱 2. Halaman 2: Etalase Aplikasi Google Play Store Style (`/sistem/[slug]`)
* **Peran Funnel:** Bottom-of-Funnel (Pembuktian Visual, Kejelasan Nilai, dan Konversi Pesan Masuk).
* **Standar Tampilan:** Mengadopsi arsitektur 8-seksi Sebastian Morino (`morino-landing-page-protocol.md`) dengan tata letak visual ala **Google Play Store / App Store**.
* **Komponen Wajib:**
  1. *Squircle App Icon + Lencana Verifikasi Resmi Instansi.*
  2. *Play Store Metrics Strip:* 5 metrik utama (⭐ Rating 5.0, 👥 Jumlah Pengguna/Siswa, ⚡ Kecepatan, 💰 Rp 0 Biaya Server, 🛡️ Integritas Sistem).
  3. *Action Buttons Bar:* Tombol Buka Web App / Demo + Tombol Baca Cerita di Balik Layar (menaut balik ke Halaman 1) + Tombol Konsultasi WA.
  4. *Horizontal Screenshot & Modules Slider:* Kartu mockup modul yang bisa digeser menyamping (*snap scroll*).
  5. *Tentang Aplikasi Ini:* Masalah nyata vs Solusi sistem.
  6. *Feature-to-Benefit Pairing ("So What?" Test):* Setiap fitur dipasangkan dengan dampak nyata bagi operasional.
  7. *Spesifikasi Teknis & Keamanan Google Cloud.*
  8. *FAQ Silent Objection Killer:* Menghancurkan keraguan tersembunyi.
  9. *Directive Closing WhatsApp Card:* Tombol ajakan bertindak tegas dan percaya diri.

---

## 🔄 3. Alur Tautan Silang (Two-Way Linking)
* Halaman 1 (Artikel) HARUS menautkan tombol visual ke Halaman 2 (`/sistem/...`).
* Halaman 2 (Sistem) HARUS menyediakan tombol *"📖 Baca Kisah di Balik Layar"* yang menautkan ke Halaman 1 (`/artikel/...`).
* Kedua halaman saling menguatkan sinyal SEO dan memandu calon klien dari sekadar membaca cerita santai hingga siap mengirim pesan WhatsApp.
