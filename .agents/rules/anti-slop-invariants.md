# ATURAN BAKU ANTI-SLOP & NATURAL HUMAN INVARIANTS (@madebyaapri)

Diadopsi dari riset '7 Anti-Slop GitHub Repos' (Leonxlnx/taste-skill, miqdadbadjuber/anti-slop, conorbronsdon/avoid-ai-writing, dll.). Wajib berlaku untuk SEMUA kode, artikel, copywriting, judul, dan antarmuka (UI) yang diproduksi oleh AI di project ini.

---

## 1. Punctuation Invariants (Nol Tanda Hubung Robotik)
- **DILARANG menggunakan em-dash (—) dan en-dash (–)** di seluruh badan teks, judul, meta description, cuplikan, dan komponen antarmuka.
- **DILARANG menggunakan spaced hyphen (' - ')** sebagai pemisah klausa atau pengganti tanda baca.
- **GANTI seluruh tanda hubung tersebut dengan tanda baca alami bahasa Indonesia:**
  * Gunakan tanda koma (,) atau tanda titik (.) untuk memisahkan anak kalimat.
  * Gunakan kata sambung alami: 'yaitu', 'yakni', 'seperti', 'karena', 'sehingga'.
  * Untuk rentang angka/harga/tahun: gunakan kata 'hingga' atau 'sampai' (contoh: 'Rp 150.000 hingga Rp 250.000', '2 sampai 4 minggu', 'tahun 2025 sampai 2026').

---

## 2. Banned Clichés & Replacement Table (Anti-AI Writing)
Dilarang keras memproduksi frasa-frasa klise khas terjemahan AI berikut:
* ❌ *'Di era digital yang serba cepat / Di era modern ini / Di era AI...'* -> ✅ Langsung sebutkan situasi masalah riil di lapangan.
* ❌ *'Bukan sekadar X, melainkan Y'* -> ✅ Uraikan makna fungsionalnya tanpa formula biner kaku.
* ❌ *'Tak hanya itu / Tidak hanya itu'* -> ✅ Sambungkan paragraf secara mengalir alami.
* ❌ *'Senjata rahasia / Game changer'* -> ✅ Gunakan: 'solusi praktis', 'pilihan hemat dan andal'.
* ❌ *'Sebuah mahakarya / Menembus batas'* -> ✅ Gunakan: 'sistem teruji', 'aplikasi yang siap pakai'.
* ❌ *'Mari kita bedah / Simak selengkapnya'* -> ✅ Gunakan: 'Berikut panduan praktis...', 'Berikut langkahnya...'.
* ❌ *'Selamat datang di era...'* -> ✅ Hapus pembuka basa-basi ini, langsung ke fakta atau masalah nyata.

---

## 3. Anti-Bullet Addiction (Alur Narasi Alami)
- **DILARANG memecah setiap penjelasan menjadi daftar bullet points berderet** (`* **Label:** Penjelasan`). Ini adalah ciri utama tulisan robotik/AI slop.
- Batasi penggunaan bullet points **HANYA** untuk daftar opsi konkret (maksimal 3 sampai 4 butir) atau checklist teknis.
- Bagian cerita pengalaman, masalah bisnis, dan solusi **WAJIB** ditulis dalam bentuk paragraf mengalir (*storytelling*) dengan sudut pandang orang pertama (Kang Apri).

---

## 4. UI & Frontend Anti-Slop (Taste-Skill & Impeccable Standard)
- **DILARANG menggunakan efek purple/cyan neon glow berlebihan** yang membuat website terlihat seperti template SaaS generik.
- **Wajib mengutamakan bukti nyata:** foto asli orang, tangkapan layar antarmuka riil HP/laptop, dan tabel angka operasional lapangan di atas ilustrasi kartun atau vektor generik.
- **Ukuran touch target mobile minimal 44x44px** ramah jari jempol.
- **Zero horizontal scrollbar leakage** pada layar smartphone (lebar 360px hingga 414px).

---

## 5. Mandatory Delivery Gate (Pintu Verifikasi Sebelum Commit/Push)
Sebelum menyatakan tugas selesai atau melakukan git commit:
1. **Scan karakter:** Pastikan jumlah karakter '—' dan '–' adalah 0 di seluruh file yang dimodifikasi.
2. **Build test:** Jalankan `npm run build` dan wajib exit code 0 tanpa peringatan tipe data.
3. **Cek judul & H1:** Bebas dari istilah teknis developer (Jamstack, zero-cost micro-SaaS, multi-tenant, Google Apps Script engine).
4. **Cek CTA:** Selalu ditutup dengan ajakan konsultasi WhatsApp berbasis kalimat masalah nyata, bukan nama fitur teknis.
