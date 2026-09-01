---
name: seo-article-writer
description: Standar alur pembuatan artikel studi kasus mendalam berbasis wawancara 10 pertanyaan, storytelling otentik lapangan, optimasi SEO E-E-A-T, rumus baku penutup interaktif, dan auto-publishing ke website madebyaapri.
---

# SOP Pembuatan Artikel SEO Interaktif (@madebyaapri)

Skill ini mengatur alur kerja kolaboratif antara Apri dan AI untuk menciptakan artikel studi kasus berkualitas tinggi, seru dibaca, mematuhi prinsip F.A.S.T, dan merajai halaman 1 Google.

---

## 🔄 4 Langkah Alur Kerja Standar:

### 1. 💡 Tahap 1: Pelemparan Ide Awal
* Apri melempar gagasan, pengalaman lapangan, atau topik proyek yang ingin diangkat (misal: pengalaman pelatih Paskibra, sistem kasir kedai, atau bot otomatis).

### 2. 🎙️ Tahap 2: Wawancara Mendalam (Minimal 10 Pertanyaan)
* AI dilarang langsung mengarang cerita kosong.
* AI **WAJIB mengajukan minimal 10 pertanyaan terarah** untuk menggali data faktual riil:
  1. *Latar Belakang & Waktu Kejadian.*
  2. *Titik Keresahan Terbesar (Pain Point) sebelum ada sistem.*
  3. *Kendala Teknis atau Drama di Lapangan.*
  4. *Reaksi atau Komentar Orang Lain (juri, pengurus, tim kasir, klien).*
  5. *Solusi Teknis yang Diterapkan Apri.*
  6. *Mengapa Pendekatan Tersebut Dipilih.*
  7. *Angka / Hasil Terukur (Waktu yang dihemat, efisiensi biaya).*
  8. *Fitur Favorit yang Paling Berkesan.*
  9. *Pelajaran Berharga / Filosofi yang Didapat.*
  10. *Pesan / Solusi untuk Orang Lain yang Mengalami Masalah Serupa.*

### 3. ✍️ Tahap 3: Peracikan Artikel Berstruktur Standar E-E-A-T & Rumus Penutup Baku
* Mengolah seluruh jawaban Apri menjadi artikel berstruktur profesional:
  - **Catchy & SEO Title:** Mengandung kata kunci Google Trends + emosi/angka.
  - **Hook Opening:** Kisah pembuka yang langsung menarik perhatian pembaca.
  - **The Real Struggle:** Drama dan masalah nyata yang dialami di lapangan.
  - **The Breakthrough Solution:** Bedah sistem dan arsitektur tanpa server yang dibangun.
  - **Measurable Impact:** Bukti angka riil (hemat waktu, nol biaya server).
  - **🎯 RUMUS BAKU PENUTUP ARTIKEL (WAJIB DI SETIAP ARTIKEL):**
    1. *Rangkuman Intisari & Linkback:* 1 paragraf kuat merangkum esensi tulisan.
    2. *Pertanyaan Interaktif ke Pembaca:* *"Nah, menurutmu gimana sebagai pembaca? Apakah kamu juga mengalami hal serupa...?"*
    3. *Ajakan Diskusi WhatsApp:* Mengarahkan pembaca untuk berbagi tanggapan atau ngobrol alur kerja langsung via WhatsApp.

### 4. 🚀 Tahap 4: Penayangan Otomatis (Publishing)
* Menyimpan artikel ke `src/data/articles.ts`.
* Menghasilkan halaman statis dedicated `/artikel/[slug]`.
* Build test & push ke GitHub agar tayang live di `https://madebyaapri.vercel.app/artikel/[slug]`.
* Otomatis terdaftar di `sitemap-index.xml` Google.
