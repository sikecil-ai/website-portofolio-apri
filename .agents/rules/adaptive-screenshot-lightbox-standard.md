# Standar Adaptif Screenshot Lightbox & Taksonomi Media (@madebyaapri)

Aturan ini adalah **SOP Mutlak Zero-Regression** untuk penanganan aset tangkapan layar (screenshots), modal lightbox viewer, dan penyusunan data proyek di website portofolio `@madebyaapri`.

---

## 🚨 Akar Masalah & Latar Belakang (Pelajaran Berharga):
Sebelum aturan ini dibuat, screenshot desktop/A4 beresolusi 1366x768 (seperti pada *Si Paling Rekap*) sempat mengecil dan terjepit di dalam wadah HP 340px dengan poni (*phone notch*). Hal ini terjadi karena:
1. Pengecekan framing hanya mengandalkan string literal tunggal `'desktop'` pada properti `tag`.
2. Data tag di `src/data/projects.ts` diberi nama murni fungsional (misal: `CMS Admin Eksekutif`, `Kalkulasi Penalti Otomatis`) tanpa menyertakan kata kunci orientasi/perangkat.
3. Tidak adanya validasi aspek rasio fisik gambar (`naturalWidth` vs `naturalHeight`).

---

## 🏷️ 1. Standar Baku Taksonomi Tag di `src/data/projects.ts`

Setiap entri screenshot dalam array `screenshots` di `src/data/projects.ts` **WAJIB** menyertakan prefix penanda perangkat/orientasi yang jelas pada properti `tag`:

### Format Tag yang Sah:
| Tipe Tampilan | Standar Penulisan Tag | Target Frame Lightbox | Contoh Real |
|---|---|---|---|
| **Web / Desktop Landscape** | Wajib ada kata `Desktop` | Browser Desktop Widescreen (`lg:max-w-5xl xl:max-w-6xl`) | `Desktop CMS Admin`, `Desktop Leaderboard SD`, `Desktop Setting Lomba` |
| **Dokumen Cetak / A4 Landscape** | Wajib ada kata `Dokumen A4` atau `A4` | Browser Desktop Widescreen (`lg:max-w-5xl xl:max-w-6xl`) | `Dokumen A4 Berita Acara`, `Dokumen A4 Lembar Sah Juri` |
| **Tablet / Horizontal Form** | Wajib ada kata `Tablet` atau `Landscape` | Browser Widescreen | `Tablet Form Penjurian Lapangan` |
| **Mobile Smartphone Vertikal** | Wajib ada kata `Mobile` atau `Smartphone` | Smartphone Frame Portrait (`max-w-[340px]` + notch) | `Mobile Input Presensi Siswa`, `Mobile Menu Kasir POS` |

> [!CAUTION]
> **DILARANG KERAS** membuat tag fungsional tanpa penanda perangkat (misalnya hanya menulis `Kalkulasi Otomatis` atau `Rekap Poin`). Selalu tulis secara spesifik: `Desktop Kalkulator Penalti` atau `Mobile Form Input Juri`.

---

## 🖥️ 2. Pertahanan Dua Lapis (Two-Layer Defense) di `src/pages/sistem/[slug].astro`

Skrip modal lightbox di `src/pages/sistem/[slug].astro` **TIDAK BOLEH HANYA MENGECEK 1 KATA KUNCI**. Skrip wajib mempertahankan sistem pengaman ganda:

### Lapis 1: Multi-Keyword Whitelist
Daftar kata kunci landscape harus mencakup variasi fungsional dan orientasi:
```javascript
const desktopKeywords = [
  'desktop', 'cms', 'admin', 'standing', 'leaderboard', 
  'a4', 'tablet', 'dokumen', 'berita acara', 'rekap', 
  'dashboard', 'setting'
];
const isWideByTag = desktopKeywords.some(kw => lowerTag.includes(kw));
```

### Lapis 2: Dynamic Aspect Ratio Detection (Failsafe Otomatis)
Meskipun pengembang lupa memberi tag `Desktop`, skrip **WAJIB** mendeteksi dimensi fisik asli gambar:
```javascript
// Cek cache / immediate load
if (lightboxImg && lightboxImg.complete && lightboxImg.naturalWidth && lightboxImg.naturalHeight) {
  if (lightboxImg.naturalWidth >= lightboxImg.naturalHeight * 1.05) {
    applyFraming(true); // Mode Desktop Widescreen
  } else if (lightboxImg.naturalHeight > lightboxImg.naturalWidth * 1.2) {
    applyFraming(false); // Mode Mobile Smartphone
  }
}

// Cek event saat gambar selesai dimuat (onload)
lightboxImg.onload = function() {
  if (lightboxImg.naturalWidth >= lightboxImg.naturalHeight * 1.05) {
    applyFraming(true);
  } else if (lightboxImg.naturalHeight > lightboxImg.naturalWidth * 1.2) {
    applyFraming(false);
  }
};
```

---

## 📐 3. Spesifikasi Kontainer Lightbox & Responsivitas

Wadah modal lightbox wajib memiliki ukuran lega yang proporsional di layar besar monitor PC/laptop klien:
* **Top & Bottom Bar:** `max-w-5xl lg:max-w-6xl xl:max-w-7xl`
* **Viewport Image Frame:** `max-w-[96vw] lg:max-w-5xl xl:max-w-6xl`
* **Scroll Container:** `max-h-[calc(78vh-36px)] sm:max-h-[calc(82vh-36px)]` dengan styling `scrollbar-thin`
* **Desktop Header vs Phone Notch:**
  - Mode Desktop: `#lightbox-browser-header` **MUNCUL** (titik merah-kuning-hijau + domain URL simulasi), `#lightbox-notch` **TERSEMBUNYI**.
  - Mode Mobile: `#lightbox-browser-header` **TERSEMBUNYI**, `#lightbox-notch` **MUNCUL**.

---

## ✍️ 4. Kaidah Penulisan & Anti-Robotic AI Copywriting

Saat mendeskripsikan tangkapan layar, studi kasus, atau konten sistem:
1. **Kurangi Tanda Hubung/Em-Dash Berlebihan:**
   Dilarang menggunakan spam strip panjang (`—`, `--`, `-`) yang menjadi ciri khas teks hasil generator AI mentah. Gunakan tanda koma, titik dua, atau struktur kalimat bahasa Indonesia yang mengalir luwes.
2. **Kepatuhan Data Faktual (Fact Integrity):**
   - Jangan pernah mencampuradukkan data kronologis dari narasumber (contoh kasus: penyelesaian bug terjadi saat pleton **SD** selesai tampil, BUKAN pleton SMP).
   - Pastikan nama-nama narasumber, juri, sekolah, dan angka rekapitulasi sesuai 100% dengan fakta lapangan yang diberikan Kang Apri.

---

## ✅ 5. Checklist Verifikasi Sebelum Push & Deploy
Sebelum menjalankan `git push origin main`, jalankan audit cepat:
- [ ] Buka proyek mobile (misal `/sistem/komando-manajemen-paskibra`): pastikan screenshot vertikal tampil rapi dalam bingkai HP dan notch aktif.
- [ ] Buka proyek desktop (misal `/sistem/si-paling-rekap-tabulasi-kejuaraan`): pastikan screenshot landscape tampil lebar dalam bingkai browser desktop tanpa terpotong.
- [ ] Pastikan tidak ada horizontal layout overflow pada layar resolusi `1366x768` maupun `1920x1080`.
- [ ] Jalankan `npm run build` dan pastikan 100% halaman ter-generate dengan exit code 0.
