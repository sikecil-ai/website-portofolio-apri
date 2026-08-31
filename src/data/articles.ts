export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverEmoji: string;
  projectRelation: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Kisah di Balik KOMANDO: 17 Tahun Membina Paskibra Melahirkan Tabulasi Digital 0 Detik',
    slug: 'kisah-komando-tabulasi-paskibra-realtime',
    category: 'Studi Kasus Paskibra',
    readTime: '4 Menit Baca',
    date: '2025',
    coverEmoji: '🏆',
    projectRelation: 'Aplikasi KOMANDO Paskibra',
    excerpt: 'Bagaimana pengalaman belasan tahun di lapangan PBB dan kejuaraan Kejurcab menginspirasi lahirnya sistem tabulasi juri digital real-time tanpa rumus rusak.',
    tags: ['KOMANDO', 'Paskibra Cimahi', 'Google Apps Script', 'Real-time Tabulation', 'MAN & SMPN 3'],
    content: `Sebagai pembina dan instruktur Paskibra di MAN Kota Cimahi dan SMPN 3 Cimahi sejak 2009 (17 tahun pengabdian), saya melihat satu masalah kronis yang selalu berulang dalam setiap kejuaraan PBB / LKBB: **proses rekapitulasi nilai juri yang lambat, memakan waktu 2-3 jam, dan rawan kesalahan hitung manual di lembar kertas.**

Ketika puluhan pleton tampil dengan ratusan parameter penilaian (PBB Dasar, Derap Langkah, Formasi, dan Variasi), panitia di ruang sekretariat sering kelabakan menyalin angka dari kertas juri ke tabel kalkulasi. Kesalahan kecil dalam rumus bisa mengubah peringkat juara dan memicu komplain peserta.

Dari keresahan nyata di lapangan inilah, saya merancang dan membangun **KOMANDO**. Menggunakan Google Sheets API dan Google Apps Script, juri dapat menginput nilai langsung melalui formulir digital di smartphone/tablet. Detik itu juga, nilai tersinkronisasi ke engine kalkulasi terpusat.

**Hasilnya sangat memuaskan:**
- Jeda input terpangkas menjadi **0 detik (real-time)**.
- Klasemen juara umum dan per-kategori otomatis terbentuk seketika saat pleton terakhir selesai tampil.
- Tidak ada lagi pengumuman juara yang ngaret hingga larut malam.
- Sertifikat rekapitulasi nilai resmi panitia dapat langsung diekspor ke format PDF siap cetak.`,
  },
  {
    id: '2',
    title: 'Arsitektur Zero Server Cost: Bedah Sistem Megumi Hotplate Menghitung HPP & Laba Tanpa Sewa Server',
    slug: 'arsitektur-zero-server-cost-megumi-hotplate',
    category: 'Otomasi Bisnis & F&B',
    readTime: '5 Menit Baca',
    date: '2025',
    coverEmoji: '🥩',
    projectRelation: 'Megumi Hotplate Automated Ops',
    excerpt: 'Mengapa UMKM tidak perlu membebani keuangan dengan langganan POS atau cloud server mahal. Cara cerdas membangun sistem kasir dan keuangan mandiri.',
    tags: ['Megumi Hotplate', 'Zero Server Cost', 'Google Sheets Engine', 'Looker Studio', 'Otomasi Kasir'],
    content: `Saat menjalankan operasional bisnis kuliner **Megumi Hotplate Cimahi**, tantangan terbesar bukan hanya meracik cita rasa steak hotplate yang lezat, melainkan **mengendalikan kebocoran stok bahan baku dan mencatat arus kas harian secara presisi.**

Banyak pemilik usaha kuliner terjebak dalam dua pilihan ekstrem:
1. Memakai pembukuan manual di buku kasir yang rawan hilang dan butuh waktu 1-2 jam tiap malam untuk tutup buku.
2. Menyewa software POS cloud modern dengan biaya langganan ratusan ribu hingga jutaan rupiah per bulan.

Sebagai praktisi otomasi, saya memilih jalan ketiga: **Zero Server Cost Architecture**.

Saya membangun sistem operasional berbasis form web smartphone untuk tim kasir yang terhubung langsung ke **Google Sheets Database Engine**. Setiap kali ada pesanan hotplate masuk, sistem otomatis:
1. Mengurangi stok daging, saus, dan sayuran secara real-time.
2. Menghitung HPP (Harga Pokok Penjualan) bumbu harian berdasarkan fluktuasi harga belanja pasar.
3. Menghitung Laba Kotor dan Laba Bersih harian secara otomatis.
4. Mengirimkan notifikasi ringkasan omset ke WhatsApp owner via webhook tepat saat kedai tutup.

Seluruh visualisasi data disajikan interaktif melalui **Looker Studio Dashboard** yang bisa dipantau dari mana saja tanpa mengeluarkan biaya sewa server sepeser pun (**Rp 0/bulan**).`,
  },
  {
    id: '3',
    title: 'Otomasi Bot Python & Gemini AI: Menjadwalkan Konten Video & Penawaran ke Threads Otomatis',
    slug: 'otomasi-bot-python-ai-content-publisher',
    category: 'AI & Bot Automation',
    readTime: '4 Menit Baca',
    date: '2024',
    coverEmoji: '🤖',
    projectRelation: 'Auto Content Publisher Bot',
    excerpt: 'Membangun skrip Python cerdas yang mempublikasikan video YouTube Shorts dan merangkai penawaran copywriting ke Threads secara terjadwal.',
    tags: ['Python', 'Gemini AI API', 'Social Media Bot', 'Content Scheduler', 'Automation'],
    content: `Bagi seorang solopreneur dan kreator konten (@madebyaapri), konsistensi publikasi adalah kunci pertumbuhan. Namun, proses mengunggah video ke YouTube Shorts, merangkai teks penawaran di Threads, dan menyusun hashtag setiap hari sangat menguras energi dan waktu produktif.

Untuk mengatasi ini, saya mengembangkan skrip otomasi berbasis **Python** yang diintegrasikan dengan **Google Gemini AI API** dan REST API media sosial.

**Cara Kerja Alur Otomasi Bot Ini:**
1. **Folder Watcher:** Bot memantau folder lokal berisi video pendek hasil editing (CapCut).
2. **AI Captioning & Hashtag Generation:** Bot mengirim metadata ke Gemini API untuk menghasilkan copywriting penawaran persuasif dan kumpulan hashtag yang sedang tren.
3. **Scheduled Publishing:** Video diunggah otomatis ke YouTube Shorts pada jam tayang ramai pengunjung (*prime time*).
4. **Cross-Platform Threading:** Copywriting penawaran produk digital dan link WhatsApp didistribusikan secara otomatis ke platform Threads dan X secara berkala.

Hasilnya, efisiensi distribusi konten meningkat hingga 300% dan konversi klik ke penawaran produk melonjak signifikan tanpa perlu duduk di depan layar seharian.`,
  },
  {
    id: '4',
    title: 'Headless E-Commerce Scalev: Mengalirkan Order Jasa Dokumen Teras Tulis Otomatis ke WhatsApp',
    slug: 'headless-ecommerce-scalev-teras-tulis',
    category: 'E-Commerce & Digital Agency',
    readTime: '3 Menit Baca',
    date: '2024',
    coverEmoji: '🛒',
    projectRelation: 'Scalev Storefront & Teras Tulis',
    excerpt: 'Optimasi alur checkout 1-klik untuk layanan penulisan dokumen dan e-commerce berkonversi tinggi tanpa keranjang belanja yang membingungkan.',
    tags: ['Scalev', 'Teras Tulis', 'Lead Automation', 'Fast Checkout', 'Copywriting'],
    content: `Dalam bisnis layanan penulisan dan penerjemahan dokumen terstruktur (**Teras Tulis**), calon klien membutuhkan proses pemesanan yang cepat, transparan, dan tidak berbelit-belit. Menggunakan model toko online tradisional dengan keranjang belanja multi-step seringkali menurunkan angka konversi (*cart abandonment*).

Oleh karena itu, saya mengimplementasikan arsitektur toko online headless berbasis **Scalev**.

**Strategi Alur Konversi yang Diterapkan:**
- **1-Page Direct Checkout:** Formulir pemesanan langsung berada di satu halaman yang sama dengan deskripsi paket layanan.
- **Auto WhatsApp Lead Routing:** Setiap kali formulir diisi, detail kebutuhan klien (jumlah kata, deadline, dan jenis dokumen) langsung dirangkum rapi dan diteruskan ke WhatsApp tim penulisan.
- **Invoice Otomatis Google Workspace:** Draft faktur dan estimasi waktu pengerjaan otomatis dibuat dan dikirimkan ke email klien.

Dengan alur yang sangat mulus ini, Teras Tulis telah sukses menyelesaikan lebih dari 150+ proyek penulisan dokumen profesional dengan tingkat kepuasan pelanggan yang sangat tinggi.`,
  },
  {
    id: '5',
    title: 'Mengapa Google Apps Script Adalah Senjata Rahasia UMKM Indonesia di Era AI',
    slug: 'kenapa-google-apps-script-senjata-rahasia-umkm',
    category: 'Teknologi & Efisiensi',
    readTime: '4 Menit Baca',
    date: '2025',
    coverEmoji: '⚡',
    projectRelation: 'Google Workspace Ecosystem',
    excerpt: 'Bedah mendalam mengapa bahasa pemrograman berbasis JavaScript milik Google ini adalah solusi paling hemat dan fleksibel bagi bisnis lokal.',
    tags: ['Google Apps Script', 'Google Workspace', 'UMKM Indonesia', 'JavaScript', 'Cloud Automation'],
    content: `Banyak pemilik bisnis di Indonesia mengira bahwa membangun otomasi alur kerja harus selalu melibatkan software enterprise mahal seperti SAP atau menyewa server AWS/Google Cloud Platform.

Padahal, ada satu raksasa tidur yang sudah dimiliki hampir setiap orang: **Google Workspace (Google Sheets, Gmail, Google Forms, Google Drive)** yang ditenagai oleh **Google Apps Script (GAS)**.

**Keunggulan Utama Google Apps Script untuk Bisnis Lokal:**
1. **100% Gratis & Serverless:** Tidak ada tagihan bulanan untuk server. Google yang menangani keamanan, uptime 99.9%, dan database cloud.
2. **Kustomisasi Tanpa Batas:** Apa pun proses bisnis Anda (apakah kasir kedai, tabulasi lomba, absensi anggota, atau invoice otomatis), GAS bisa diprogram mengikuti alur kerja unik Anda.
3. **Koneksi Mudah ke API & AI:** GAS dapat dengan mudah disambungkan ke API WhatsApp (Fonnte/Wablas), Google Gemini AI, Midtrans Payment Gateway, dan Webhook pihak ketiga.

Inilah filosofi dasar di balik seluruh sistem yang saya bangun di **@madebyaapri**: Menghadirkan solusi teknologi mutakhir yang praktis, tangguh, dan ramah di kantong pelaku usaha Indonesia.`,
  },
  {
    id: '6',
    title: 'Transformasi Organisasi: Dari Tumpukan Kertas Manual Menjadi Database Anggota & Inventaris Terpadu',
    slug: 'transformasi-organisasi-dari-kertas-ke-cloud',
    category: 'Manajemen Organisasi',
    readTime: '3 Menit Baca',
    date: '2024',
    coverEmoji: '📋',
    projectRelation: 'SOP & Database Paskibra',
    excerpt: 'Panduan mendigitalkan rekam jejak kader, absensi latihan, dan inventaris seragam organisasi agar tidak hilang ditelan pergantian kepengurusan.',
    tags: ['Database Anggota', 'SOP Digital', 'Manajemen Inventaris', 'Paskibra Cimahi'],
    content: `Salah satu masalah klasik dalam organisasi sekolah dan kepemudaan adalah hilangnya data historis anggota dan rusaknya perlengkapan inventaris saat pergantian pengurus tahunan. Buku absensi fisik basah, catatan peminjaman seragam hilang, dan data alumni tercerai-berai.

Melalui pendekatan otomasi digital terpadu, saya membantu mentransformasikan sistem administrasi Paskibra:

**Sistem yang Diterapkan:**
- **Database Induk Anggota:** Mencatat rekam jejak prestasi, riwayat latihan, dan sertifikat setiap kader sejak hari pertama bergabung.
- **Inventaris Digital Barcode/Form:** Peminjaman atribut lomba, medali, dan bendera dicatat melalui form cepat dengan rekapitulasi status barang yang selalu ter-update.
- **Dashboard Kehadiran:** Evaluasi kedisiplinan anggota terpantau transparan dalam visualisasi grafik yang mudah dipahami pengurus dan pelatih.

Hasilnya, organisasi memiliki aset data yang rapi dan siap diwariskan ke generasi kepengurusan berikutnya tanpa ada informasi yang tercecer.`,
  },
  {
    id: '7',
    title: 'Panduan Looker Studio: Memantau Omset Kasir & Stok Harian Langsung dari Smartphone',
    slug: 'dashboard-looker-studio-monitoring-omset-hp',
    category: 'Business Intelligence & Data',
    readTime: '4 Menit Baca',
    date: '2025',
    coverEmoji: '📊',
    projectRelation: 'Looker Studio Dashboard',
    excerpt: 'Cara mengubah spreadsheet Google Sheets yang membosankan menjadi dashboard visual interaktif yang cantik dan mudah dibaca oleh pemilik bisnis.',
    tags: ['Looker Studio', 'Google Sheets', 'Business Intelligence', 'Dashboard Analytics', 'Omset Harian'],
    content: `Melihat ratusan baris angka di Google Sheets seringkali membuat pusing pemilik bisnis. Anda butuh informasi cepat: *Menu apa yang paling laku hari ini? Jam berapa kedai paling ramai? Berapa total omset dan sisa margin keuntungan bersih?*

Di sinilah peran **Looker Studio (sebelumnya Google Data Studio)**.

Dengan menghubungkan Google Sheets sebagai sumber data (data source) ke Looker Studio, kita bisa membangun dashboard Business Intelligence (BI) yang:
1. **Responsif di Layar HP:** Didesain dengan rasio vertikal sehingga nyaman dilihat saat Anda sedang di perjalanan.
2. **Filter Interaktif 1-Sentuhan:** Anda bisa memilih rentang tanggal, filter kategori menu, atau membandingkan performa penjualan antar-bulan dengan mudah.
3. **Indikator KPI Otomatis:** Kartu metrik berwarna hijau/merah yang langsung memberi tahu jika target penjualan tercapai atau stok bahan baku mendekati batas kritis.

Sistem visual ini memastikan Anda selalu memegang kendali penuh atas arah perkembangan bisnis Anda berbasis data nyata, bukan sekadar intuisi.`,
  },
];
