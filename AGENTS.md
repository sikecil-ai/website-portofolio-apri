# AGENTS.md - Website Portofolio Apri (madebyaapri)

Panduan kemudi AI Agentic Engineering untuk repositori Website Portofolio Apri.

---

## 1. Arsitektur & Tech Stack
- **Framework**: [Astro 5.x](https://astro.build/) (Static Site Generation / SSG).
- **Styling**: Tailwind CSS dengan custom dark/light theme tokens.
- **Icons**: Lucide Icons (`lucide-astro` / SVG kustom).
- **Hosting & CI/CD**: Vercel (`main` branch auto-deployment).
- **Data Source**:
  - Proyek SaaS: `src/data/projects.ts`
  - Artikel & Berita: `src/content/blog/` (Markdown / MDX)

---

## 2. Invariants & Batasan Sistem (Dilarang Dilanggar)
1. **SSG Integrity**: Semua halaman publik harus bisa di-build statis via `npm run build` tanpa error TypeScript.
2. **Mobile First & Responsive**:
   - Tidak boleh ada kebocoran horizontal scrollbar di perangkat mobile (`overflow-x-hidden`).
   - Touch targets untuk tombol navigasi dan aksi minimal `44px x 44px`.
3. **Anti-Slop Design**:
   - Dilarang menggunakan gradien ungu generik AI tanpa identitas brand.
   - Pertahankan palet warna netral elegan dengan aksen cyan/emerald/indigo yang tajam.
4. **Data Portofolio Nyata**:
   - Jangan pernah mengganti screenshot atau deskripsi proyek (Komando, G7KAIH, Si Paling Rekap) dengan data dummy/palsu.

---

## 3. Workflow Pengembangan
1. **Analisis Debater & SDD**: Sebelum coding perubahan besar, buat analisis SQ $\to$ AREL $\to$ Blast Radius Guard, dan tunggu persetujuan user.
2. **Verifikasi Build**: Selalu jalankan `npm run build` sebelum push ke Git.
3. **Push to Production**: Push ke branch `main` untuk memicu deploy otomatis ke `https://madebyaapri.vercel.app/`.
