# SOP 20 Parameter Audit Mutu Pre-Launch Website Vibe-Coded (@madebyaapri)

Standar Operasional Prosedur (SOP) ini diadopsi dari benchmark kurasi `@harys.space` & standar rekayasa tingkat tinggi. Setiap halaman atau aplikasi web wajib lolos 20 poin pemeriksaan sebelum dinyatakan siap rilis (*launch*).

---

## 📋 Checklist 20 Parameter Pra-Peluncuran:

### 🎨 A. Identitas Brand & Visual (Anti-AI Cliché)
1. **[ ] Custom Favicon & Touch Icon:** Favicon unik berformat PNG 192x192 & Apple Touch Icon 180x180 terpasang (bukan icon globe bumi bulat default atau logo Astro/Vercel).
2. **[ ] Open Graph Social Share Card:** Meta tag `og:image` 1200x630 px berformat PNG tajam, sudah diuji di Threads, WhatsApp, Facebook, dan X/Twitter.
3. **[ ] Bebas dari Visual AI Murahan:** Tidak ada ilustrasi kartun generik, tidak ada icon bintang `✨` berlebihan, dan tidak ada saturasi neon ungu menyilaukan mata.
4. **[ ] Card & UI Aesthetics:** Border halus, rounded corner lembut (Google Pixel Material Design harmonis), dan background solid kontras tinggi (>90% opasitas).
5. **[ ] Dark Mode & Light Mode:** Transisi warna mulus, kontras teks tetap tajam dan nyaman dibaca di kedua mode.

### 📱 B. Pengalaman Pengguna (UX & Responsiveness)
6. **[ ] Zero Horizontal Overflow:** Tidak ada elemen yang bocor atau menyebabkan scroll horizontal di layar smartphone (360px–420px).
7. **[ ] Mobile-Friendly Tap Targets:** Semua tombol dan link interaktif memiliki ukuran klik minimal 44x44 px agar nyaman disentuh jari.
8. **[ ] Keyboard & Focus Ring Accessibility:** Navigasi Tab memiliki outline fokus yang terlihat jelas (`focus-visible:ring-2`).
9. **[ ] Micro-Interactions & Hover Feedback:** Tombol aksi utama memberikan feedback visual instan saat disentuh/diarahkan kursor.
10. **[ ] Custom 404 Error Page:** Halaman 404 yang ramah, profesional, dan menyediakan tombol kembali ke beranda.

### ⚡ C. Performa Teknis & Arsitektur
11. **[ ] Clean Console (Zero Runtime Errors):** Console browser bersih 100% dari warning atau JavaScript uncaught errors.
12. **[ ] Zero Server Cost / Fast SSG:** Halaman dikompilasi statis (Astro Static Site Generation) dengan waktu load < 1 detik.
13. **[ ] Asset Optimization:** Gambar terkompresi dengan format WebP/PNG teroptimasi, tidak membebani kuota pengguna.
14. **[ ] Real-time Analytics (Zero-Bloat):** Pelacak statistik nyata (GoatCounter) terpasang tanpa memperlambat rendering web.
15. **[ ] Security & Key Safety:** Tidak ada credential rahasia (API key/Token) yang bocor di frontend code.

### 🎯 D. Copywriting, SEO, & Konversi (CRO)
16. **[ ] Zero Dummy Content:** Tidak ada "Lorem Ipsum", nama fiktif, atau klaim kosong yang tidak terbukti.
17. **[ ] Natural Human Voice:** Bahasa bercerita personal orang pertama (*"Aku"* / *"Halo, aku Apri"*), santai ala teman sebaya, bebas dari kata kaku robotik AI.
18. **[ ] SEO Meta & Semantic HTML:** Struktur heading semantik (`<h1>`, `<h2>`, `<h3>`), meta description unik, sitemap.xml, dan canonical URL.
19. **[ ] Local SEO Context:** Penegasan domisili lokal (*Cibeber, Kota Cimahi, Bandung Raya, Jawa Barat*) terpasang jelas untuk mendominasi pencarian lokal.
20. **[ ] Direct WhatsApp Lead Route:** Tombol CTA WhatsApp terarah ke nomor aktif dengan pre-filled template pesan spesifik per konteks halaman.

---

> **Aturan Tetap:**  
> Jika 1 dari 20 parameter di atas belum terpenuhi, perbaiki terlebih dahulu sebelum melakukan push produksi publik!
