---
name: website-cro-audit-standard
description: Standar Operasional Prosedur (SOP) Mutu Desain Web, SEO Presisi, dan Optimasi Konversi (CRO) Berbasis Benchmark Audit Claude untuk ekosistem @madebyaapri.
---

# SOP Mutu Web & Audit CRO Standar Claude Benchmark (@madebyaapri)

Skill ini berfungsi sebagai **Checklist Wajib (Quality Assurance Gates)** yang harus dijalankan sebelum halaman baru, fitur, atau artikel di website `madebyaapri` dinyatakan selesai.

---

## 🚦 10 Quality Assurance Gates Wajib:

### Gate 1: Positioning & ICP Gate
* **Aturan:** Headline & Subheadline dilarang bernada "jasa murah / gratisan".
* **Kriteria Lolos:** Wajib secara eksplisit berbicara ke pemilik bisnis / organisasi yang **sudah memiliki alur kerja / spreadsheet** dan ingin tampilan antarmuka modern yang rapi, cepat, dan otomatis.

### Gate 2: Verified Social Proof Gate
* **Aturan:** Dilarang menggunakan testimoni anonim (misal: "Tim Kasir" atau "Panitia Lomba").
* **Kriteria Lolos:** Setiap testimoni wajib memuat:
  1. Nama Lengkap Orang Nyata.
  2. Jabatan / Peran Resmi.
  3. Nama Bisnis / Instansi (contoh: *Riki Septian — Head of Operations, Megumi Hotplate Cimahi*).

### Gate 3: Price & Investment Transparency Gate
* **Aturan:** Dilarang menyembunyikan harga total yang menimbulkan friksi bagi calon klien berbudget.
* **Kriteria Lolos:** Wajib memuat indikasi harga atau skema investasi yang jelas (contoh: *1-Hour Diagnostic Free, Custom Workflow mulai Rp 1,75jt, KOMANDO mulai Rp 1,5jt*).

### Gate 4: Multi-Page Static Routing Gate
* **Aturan:** Dilarang mengubur studi kasus atau produk layanan dalam satu single-page anchor.
* **Kriteria Lolos:** Setiap sistem utama (`/sistem/[slug]`) dan setiap artikel (`/artikel/[slug]`) wajib memiliki halaman statis dengan URL independen yang terdaftar di `sitemap-index.xml`.

### Gate 5: Google SERP Precision Gate
* **Aturan:** Dilarang membuat tag title atau description yang melebihi batas tampilan Google.
* **Kriteria Lolos:**
  * **Meta Title:** Wajib $\le 60$ karakter (Target ideal: 50–58 karakter).
  * **Meta Description:** Wajib $\le 155$ karakter (Target ideal: 140–152 karakter).

### Gate 6: Semantic Heading Hierarchy Gate
* **Aturan:** Dilarang memiliki lebih dari 1 tag H1 atau menggunakan emoji berlebihan pada heading H2.
* **Kriteria Lolos:**
  * Tepat 1 buah tag `<h1>` per halaman.
  * Tag `<h2>` bersih, profesional, dan mencerminkan topik seksi.
  * Tag `<h3>` digunakan untuk sub-kartu atau judul modul.

### Gate 7: Rich Structured Data (JSON-LD) Gate
* **Aturan:** Dilarang merilis halaman tanpa skema data terstruktur untuk mesin pencari.
* **Kriteria Lolos:** Memuat skema JSON-LD yang valid (`Person`, `WebSite`, `FAQPage`, `ItemList`, `Blog`, `BreadcrumbList`).

### Gate 8: Local Authority SEO Gate
* **Aturan:** Wajib mengunci dominasi pencarian lokal.
* **Kriteria Lolos:** Memuat tag meta `geo.region: ID-JB`, `geo.placename: Kota Cimahi`, dan koordinat GPS `ICBM: -6.872288, 107.542046`.

### Gate 9: Human Editorial Typography Gate
* **Aturan:** Dilarang menampilkan simbol markdown mentah (`**`, `###`, `---`) di layar publik.
* **Kriteria Lolos:** Teks wajib di-compile dengan `marked` menjadi elemen HTML semantik dengan gaya editorial majalah berkelas.

### Gate 10: Direct WhatsApp Closing Gate
* **Aturan:** Dilarang membelokkan calon klien ke platform biolink pihak ketiga (Lynk.id).
* **Kriteria Lolos:** Seluruh tombol Call-to-Action (CTA) wajib langsung membuka WhatsApp `+62 821-1831-3655` dengan pesan kontekstual terisi otomatis (*prefilled text*).
