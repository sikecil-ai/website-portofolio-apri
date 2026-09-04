---
name: saas-end-to-end-workflow
description: Standar Operasional Prosedur (SOP) & Master Checklist End-to-End untuk pengujian jalur web, registrasi, konfigurasi 00 SaaS Portal Hub, Google Sheets database, UAT aplikasi, dokumentasi screenshot, hingga publikasi website portofolio @madebyaapri.
---

# SOP & Master Checklist End-to-End Ekosistem Multi-SaaS @madebyaapri

Gunakan skill ini sebagai checklist panduan wajib setiap kali merilis, menguji, atau memperbarui sistem di ekosistem @madebyaapri (KOMANDO, G7KAIH, Si Paling Rekap, Si Paling Kasir, dst.).

## 7 Fase Alur Kerja Mutlak:

1. **Fase 1: Jalur Web Portofolio (`madebyaapri.com`)**
   - Verifikasi kartu proyek di `/#proyek` (clean real screenshot mockup).
   - Verifikasi halaman dedikasi `/sistem/[slug]` (MacBook & Smartphone hero frame, dynamic switcher, lightbox zoom 1080p).
   - Verifikasi CTA link (`demoUrl`, `articleSlug`, direct WhatsApp).

2. **Fase 2: Portal Google Sites & Registrasi**
   - Cek link Google Sites pangkalan (`/view/1-komando`, `/view/g7kaih/mankoci`, dst.).
   - Pastikan alur registrasi pangkalan/sekolah baru tersedia dan terhubung ke spreadsheet/WhatsApp.

3. **Fase 3: Provisioning di 00 SaaS Portal Hub**
   - Master Spreadsheet ID: `1uSBa622_715FNjymJCuZvezapR917CkZCH5IA1SoB-8`.
   - Cek sheet config: `CONFIG_KOMANDO`, `CONFIG_G7KAIH`, `CONFIG_SIPALING_REKAP`.
   - Pastikan composite primary key `(appId, kodeSekolah)` unik.
   - Verifikasi query param resolver: `?pangkalan=`, `?sekolah=`, `?tenant=`.

4. **Fase 4: Database & Sheet Engine Tenant**
   - Periksa spreadsheet database pangkalan, hak akses Apps Script (*Anyone*), dan formula bebas dari `#REF!`.

5. **Fase 5: Pengujian Antarmuka Aplikasi (Dual-Device UAT)**
   - **Mobile (Siswa / Anggota):** Cepat buka, input jurnal/presensi 1 menit, live checkmark validasi hijau, submisi sukses tercatat di Google Sheets.
   - **Desktop (Admin / Guru / Pembina):** Grafik kurva analitik ter-render, filter per kelas/angkatan instan, tes tombol cetak/ekspor PDF 1-halaman A4 rapi.

6. **Fase 6: Dokumentasi Tangkapan Layar Lapangan**
   - Ambil 1x Desktop Dashboard (1366x768 PNG) dan 2-6x Mobile Views (1080x2400 JPG).
   - Simpan ke `public/images/screenshots/<appId>/` dengan penamaan standar.

7. **Fase 7: Publikasi Website & Auto-Deploy Vercel**
   - Update `src/data/projects.ts` (`heroDesktopImage`, `heroMobileImage`, `screenshots`).
   - Update `SEO.astro` (`itemListSchema`).
   - Run `npm run build` (0 error) -> Git commit & push `origin main` -> Verifikasi di HP & laptop live.
