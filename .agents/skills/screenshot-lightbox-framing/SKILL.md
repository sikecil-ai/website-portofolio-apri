---
name: screenshot-lightbox-framing
description: Use this skill whenever adding, updating, or reviewing screenshots and media lightbox modals in project showcases (/sistem/[slug]) or project data (src/data/projects.ts). Ensures adaptive framing for widescreen desktop, A4 documents, and mobile smartphones without visual shrinkage or regressions.
---

# SOP Screenshot & Adaptive Lightbox Framing (@madebyaapri)

Skill ini adalah panduan langkah demi langkah untuk menambahkan, mengonfigurasi, dan memverifikasi tangkapan layar (screenshot) sistem mahakarya agar tampil proporsional di seluruh resolusi perangkat.

---

## 🎯 Prosedur 1: Menyiapkan Aset Tangkapan Layar
1. **Resolusi Standar:**
   - **Tampilan Web / Dashboard / CMS:** Wajib resolusi landscape `1366x768` atau `1920x1080` (16:9).
   - **Dokumen A4 / Berita Acara:** Format landscape atau portrait berasio dokumen resmi A4 dengan teks tajam dan terbaca.
   - **Aplikasi Mobile / Smartphone:** Wajib rasio portrait `9:16` atau `9:19.5` (misal `1080x2400` atau `390x844`).
2. **Lokasi Penyimpanan:**
   Simpan file gambar di `public/images/screenshots/<project-slug>/`.
   Gunakan penamaan terurut yang deskriptif (contoh: `sipalingrekap-01-dashboard-admin.png`).
3. **Format File:** Gunakan format `.png` atau `.webp` dengan kompresi optimal.

---

## 🏷️ Prosedur 2: Menuliskan Entri Data di `src/data/projects.ts`
Setiap objek screenshot dalam array `screenshots` wajib memiliki struktur berikut:

```typescript
{
  title: 'Judul Modul Jelas & Tegas',
  description: 'Deskripsi fungsional singkat, dampak operasional, dan eliminasi kerja manual.',
  tag: 'Desktop CMS Admin', // WAJIB diawali/memuat 'Desktop', 'Dokumen A4', 'Tablet', atau 'Mobile'
  statsHighlight: 'Metrik Kunci / Hasil Nyata',
  image: '/images/screenshots/<slug>/<nama-file>.png',
}
```

### Aturan Baku Properti `tag`:
- Jika screenshot berupa tampilan web/laptop/desktop ➔ Gunakan prefix `Desktop ` (misal: `Desktop CMS Admin`, `Desktop Leaderboard SD`).
- Jika screenshot berupa formulir cetak/berita acara ➔ Gunakan prefix `Dokumen A4 ` (misal: `Dokumen A4 Berita Acara`).
- Jika screenshot berupa tablet ➔ Gunakan prefix `Tablet ` (misal: `Tablet Form Penjurian`).
- Jika screenshot berupa smartphone vertikal ➔ Gunakan prefix `Mobile ` (misal: `Mobile Input Presensi`).

---

## ⚙️ Prosedur 3: Memelihara Logika Lightbox di `src/pages/sistem/[slug].astro`
Komponen lightbox harus selalu memiliki mekanisme adaptif 2 lapis:

1. **Layer 1 (Kata Kunci Tag):**
   ```javascript
   const desktopKeywords = ['desktop', 'cms', 'admin', 'standing', 'leaderboard', 'a4', 'tablet', 'dokumen', 'berita acara', 'rekap', 'dashboard', 'setting'];
   let isDesktop = desktopKeywords.some(kw => (tag || '').toLowerCase().includes(kw));
   ```

2. **Layer 2 (Deteksi Rasio Asli Gambar):**
   ```javascript
   function applyFraming(isWide) {
     if (!lightboxFrameContainer || !lightboxNotch || !lightboxBrowserHeader) return;
     if (isWide) {
       lightboxFrameContainer.className = "relative max-h-[78vh] sm:max-h-[82vh] w-full max-w-[96vw] lg:max-w-5xl xl:max-w-6xl rounded-2xl border-2 border-slate-700 bg-slate-900 overflow-hidden shadow-2xl flex flex-col transition-all duration-300";
       lightboxNotch.classList.add('hidden');
       lightboxBrowserHeader.classList.remove('hidden');
     } else {
       lightboxFrameContainer.className = "relative max-h-[78vh] sm:max-h-[82vh] w-full max-w-[340px] rounded-[2.5rem] border-4 border-slate-700 bg-slate-900 overflow-hidden shadow-2xl flex flex-col transition-all duration-300";
       lightboxNotch.classList.remove('hidden');
       lightboxBrowserHeader.classList.add('hidden');
     }
   }

   // Cek gambar saat ini
   if (lightboxImg && lightboxImg.complete && lightboxImg.naturalWidth && lightboxImg.naturalHeight) {
     if (lightboxImg.naturalWidth >= lightboxImg.naturalHeight * 1.05) isDesktop = true;
     else if (lightboxImg.naturalHeight > lightboxImg.naturalWidth * 1.2) isDesktop = false;
   }
   applyFraming(isDesktop);

   // Cek saat gambar selesai loading
   if (lightboxImg) {
     lightboxImg.onload = function() {
       if (lightboxImg.naturalWidth >= lightboxImg.naturalHeight * 1.05) applyFraming(true);
       else if (lightboxImg.naturalHeight > lightboxImg.naturalWidth * 1.2) applyFraming(false);
     };
   }
   ```

---

## 🔍 Prosedur 4: Audit & Verifikasi Kualitas
Sebelum menyelesaikan tugas atau merilis:
1. Pastikan modal tidak menampilkan *phone notch* pada screenshot desktop.
2. Pastikan screenshot mobile tidak melebar secara horizontal hingga pecah/terdistorsi.
3. Jalankan `npm run build` untuk memvalidasi tidak ada syntax error pada Astro dan TypeScript.
4. Lakukan commit dengan pesan terstruktur (misal: `fix(lightbox): ...` atau `feat(projects): ...`).
