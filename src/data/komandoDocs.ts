export interface DocStep {
  number: number;
  title: string;
  description: string;
  detail?: string[];
  badge?: string;
  image?: string;
}

export interface DocModule {
  id: string;
  code: string;
  name: string;
  category: 'Core & Akses' | 'Operasional Pasukan' | 'Akademik & Disiplin' | 'Tata Kelola Markas';
  summary: string;
  keyFunctions: string[];
  desktopSupport: boolean;
  mobileSupport: boolean;
  targetUsers: string;
  screenshot?: string;
  screenshotCaption?: string;
  tips?: string;
}

export interface DocFaq {
  question: string;
  category: 'Akun & Login' | 'Koneksi & Kuota' | 'Dokumen & Drive' | 'Instalasi APK';
  answer: string;
  solutionSteps?: string[];
}

export interface KomandoDocsData {
  meta: {
    systemName: string;
    version: string;
    lastUpdated: string;
    totalModules: number;
    platform: string;
    author: string;
    waHelpUrl: string;
  };
  chapters: {
    id: string;
    title: string;
    badge: string;
    icon: string;
    summary: string;
  }[];
  registrationSteps: DocStep[];
  rolePermissions: {
    role: string;
    level: string;
    color: string;
    description: string;
    allowedAccess: string[];
  }[];
  modules: DocModule[];
  faqs: DocFaq[];
}

export const komandoDocs: KomandoDocsData = {
  meta: {
    systemName: 'Sistem KOMANDO SaaS Paskibra',
    version: 'v2.6 Multi-Tenant Stable',
    lastUpdated: 'Oktober 2026',
    totalModules: 16,
    platform: 'Google Apps Script + Google Sheets Relasional + PWA / Android APK',
    author: 'M. Apriyanto Wijaya (@madebyaapri)',
    waHelpUrl: 'https://wa.me/6282118313655?text=Halo%20Kang%20Apri%2C%20saya%20sedang%20membaca%20Dokumentasi%20KOMANDO%20dan%20memerlukan%20bantuan%20terkait%3A%20',
  },

  chapters: [
    {
      id: 'arsitektur',
      title: 'Bab 1: Ikhtisar & Arsitektur Sistem',
      badge: 'Dasar Sistem',
      icon: '🏛️',
      summary: 'Fondasi arsitektur cloud multi-tenant, efisiensi biaya server Rp 0, dan dukungan lintas perangkat.',
    },
    {
      id: 'pendaftaran',
      title: 'Bab 2: Alur Pendaftaran & Registrasi Pangkalan',
      badge: 'Setup Awal',
      icon: '📝',
      summary: 'Tahapan mendaftarkan sekolah/madrasah baru, konfigurasi database, dan inisialisasi master tenant.',
    },
    {
      id: 'onboarding-roles',
      title: 'Bab 3: Onboarding & 4 Tingkat Hak Akses',
      badge: 'Keamanan Akun',
      icon: '🛡️',
      summary: 'Matriks izin akses berjenjang: Pembina, Pelatih, Pengurus Satuan (8 Divisi), dan Pasukan/Anggota.',
    },
    {
      id: 'modul-fitur',
      title: 'Bab 4: Eksplorasi 16 Modul Fitur KOMANDO',
      badge: 'Panduan Fitur',
      icon: '⚡',
      summary: 'Katalog fungsi teknis dan cara operasional modul 00 sampai 16 baik di Mobile App maupun Desktop.',
    },
    {
      id: 'troubleshooting',
      title: 'Bab 5: Pusat Solusi Mandiri & FAQ',
      badge: 'Self-Service',
      icon: '🔧',
      summary: 'Troubleshooting kuota Google Sheets, izin Google Drive, reset kata sandi, dan panduan pasang APK.',
    },
    {
      id: 'eskalasi-bantuan',
      title: 'Bab 6: Eskalasi & Kontak Pengembang',
      badge: 'Dukungan',
      icon: '💬',
      summary: 'Matriks pengambilan keputusan eskalasi masalah teknis dan saluran konsultasi langsung.',
    },
  ],

  registrationSteps: [
    {
      number: 1,
      title: 'Pengajuan & Verifikasi Identitas Pangkalan',
      badge: 'Langkah Awal',
      description: 'Menyiapkan data pokok satuan (nama sekolah/madrasah, nomor gugus depan/satuan, nama pembina resmi, dan kontak koordinator).',
      detail: [
        'Pastikan pangkalan memiliki satu akun Google khusus organisasi (misal: paskibra.mancimahi@gmail.com).',
        'Unggah logo transparan resmi (PNG) dengan resolusi minimal 500x500 piksel untuk disematkan di kop KTA digital dan sertifikat.',
        'Sistem akan menerbitkan Kode Registrasi Unik Pangkalan (misal: MAN-CMH-01).',
      ],
      image: '/images/screenshots/komando/komando-01-login.jpg',
    },
    {
      number: 2,
      title: 'Provisioning Database Google Sheets & Folder Drive',
      badge: 'Sisi Server',
      description: 'Penggandaan template Master SSOT Spreadsheet secara otomatis ke Google Drive pangkalan.',
      detail: [
        'Script membuat database relasional otomatis memuat 16 tab utama (USERS, PRESENSI, KURIKULUM, KEUANGAN, dll).',
        'Membuat struktur folder Google Drive terisolasi khusus dokumen bukti presensi, scan surat dinas, dan pas foto anggota.',
        'Mengonfigurasi variabel getTenantDb(kodeSekolah) agar data pangkalan 100% terisolasi dan aman.',
      ],
    },
    {
      number: 3,
      title: 'Inisialisasi Akun Induk Pembina & 1 Anggota Uji Coba',
      badge: 'Verifikasi Live',
      description: 'Aktivasi akun super-admin pertama kali dan simulasi registrasi anggota percontohan.',
      detail: [
        'Login ke portal dengan kredensial default pembina, kemudian segera lakukan ubah kata sandi di menu Pengaturan.',
        'Mendaftarkan 1 anggota uji coba di formulir registrasi untuk memverifikasi pencatatan database dan penerbitan Nomor Registrasi Anggota (NRA) otomatis.',
        'Sistem dinyatakan SIAP digunakan untuk penerimaan anggota baru (Capas) dan operasional rutin.',
      ],
      image: '/images/screenshots/komando/komando-08-database-anggota.jpg',
    },
  ],

  rolePermissions: [
    {
      role: 'Pembina Satuan',
      level: 'Level 1 - Super Administrator',
      color: 'amber',
      description: 'Otoritas tertinggi pangkalan di sekolah/madrasah. Memiliki kewenangan audit menyeluruh dan pengesahan dokumen formal.',
      allowedAccess: [
        'Melihat seluruh data finansial, kas masuk, dan pengeluaran belanja.',
        'Mengunduh lembar SPJ dan laporan pertanggungjawaban resmi PDF.',
        'Mengesahkan kenaikan tingkat, pelantikan angkatan, dan penandatanganan rapor digital.',
        'Mengatur hak akses dan reset sandi pengurus satuan.',
      ],
    },
    {
      role: 'Pelatih & Instruktur',
      level: 'Level 2 - Komando Teknis & Akademik',
      color: 'cyan',
      description: 'Penanggung jawab pembinaan fisik, formasi, materi Perpang TNI, serta evaluasi kedisiplinan dan nilai karakter anggota.',
      allowedAccess: [
        'Membuka dan menutup sesi latihan rutin serta memantau radar presensi.',
        'Menginput silabus semester 1 - 6 di portal Kawah Candradimuka.',
        'Membuat dan merilis bank soal CBT ujian materi kepaskibraan.',
        'Mengisi sidang evaluasi 5 Dimensi untuk penerbitan rapor performa individu.',
      ],
    },
    {
      role: 'Pengurus Satuan (8 Divisi)',
      level: 'Level 3 - Operator Markas Harian',
      color: 'indigo',
      description: 'Kabinet pengurus aktif (Presiden, Sekjen, Biro Keuangan, Binlat, Komisi Disiplin, Humas, Inventaris, dan Arsip).',
      allowedAccess: [
        'Mengelola pembukuan kas rutin dan pencatatan iuran anggota mingguan.',
        'Mencatat mutasi peminjaman seragam, senjata latihan, dan logistik markas.',
        'Menerbitkan nomor surat otomatis (SP, SK, SPm, BAST) dan mengunggah arsip disposisi.',
        'Mencatat kasus pelanggaran tata tertib ke Buku Hitam untuk tindak lanjut pembinaan.',
      ],
    },
    {
      role: 'Pasukan & Anggota Aktif',
      level: 'Level 4 - Pengguna Pasukan',
      color: 'emerald',
      description: 'Seluruh siswa anggota aktif dan calon paskibraka pangkalan sekolah.',
      allowedAccess: [
        'Melakukan presensi mandiri saat sesi latihan dibuka oleh pelatih.',
        'Mengakses KTA Digital resmi ber-barcode untuk keperluan absensi & identitas.',
        'Membaca materi e-learning Perpang TNI dan mengerjakan latihan soal online.',
        'Melihat rapor nilai 5 dimensi, peringkat Wall of Fame, dan jadwal piket markas.',
      ],
    },
  ],

  modules: [
    {
      id: 'modul-01',
      code: '01_Auth',
      name: 'Autentikasi & Gerbang Keamanan Pangkalan',
      category: 'Core & Akses',
      summary: 'Pintu gerbang login terenkripsi berbasis kode unik pangkalan dan sandi berjenjang dengan session management ringan.',
      keyFunctions: [
        'Validasi multi-tenant otomatis mencegah kebocoran data antar-pangkalan.',
        'Session token lokal disimpan aman di peramban tanpa membebani kuota API.',
        'Deteksi role instan untuk membedakan antarmuka Pembina vs Siswa Pasukan.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Semua Tingkat Pengguna',
      screenshot: '/images/screenshots/komando/komando-01-login.jpg',
      screenshotCaption: 'Antarmuka gerbang masuk terenkripsi khusus pangkalan sekolah dengan opsi login anggota dan portal pembina.',
      tips: 'Jika login gagal 3 kali berturut-turut, periksa kembali penulisan Kode Sekolah pada kolom identitas pangkalan.',
    },
    {
      id: 'modul-02',
      code: '02_Beranda',
      name: 'Beranda Aggregator & Wall of Fame',
      category: 'Core & Akses',
      summary: 'Dashboard Helicopter View yang merangkum metrik pangkalan dalam satu pandangan mata tanpa perlu berpindah-pindah menu.',
      keyFunctions: [
        'Klasemen Wall of Fame Top 3 nilai performa pasukan tertinggi.',
        'Widget pengumuman latihan terdekat dan status absensi aktif.',
        'Kalender piket rotasi markas mingguan per divisi.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Pembina, Pelatih, dan Seluruh Anggota',
      screenshot: '/images/screenshots/komando/komando-03-wall-of-fame.jpg',
      screenshotCaption: 'Wall of Fame menyajikan apresiasi real-time bagi 3 anggota dengan indeks integritas dan kehadiran terbaik.',
      tips: 'Metrik agregat dimuat dalam 1 kali request RPC terpadu untuk memangkas waktu muat hingga di bawah 1 detik.',
    },
    {
      id: 'modul-03',
      code: '03_Markas',
      name: 'Hub Operasional Markas & 8 Divisi',
      category: 'Tata Kelola Markas',
      summary: 'Pusat komando tata usaha markas yang mengonsolidasikan ruang kerja 8 divisi kepengurusan ke dalam 1 dasbor visual.',
      keyFunctions: [
        'Pintasan cepat modul HRD, Komisi Disiplin, dan Bank Soal.',
        'Monitoring kondisi logistik markas dan jadwal perawatan fasilitas.',
        'Akses cepat profil satuan dan dokumen legalitas gugus depan.',
      ],
      desktopSupport: false,
      mobileSupport: true,
      targetUsers: 'Pengurus Harian Satuan & Pelatih',
      screenshot: '/images/screenshots/komando/komando-06-markas-divisi.jpg',
      screenshotCaption: 'Papan kontrol modular 8 divisi pasukan di layar smartphone pengurus.',
    },
    {
      id: 'modul-04',
      code: '04_Profil',
      name: 'Profil Anggota & Rapor 5 Dimensi',
      category: 'Operasional Pasukan',
      summary: 'Kartu identitas digital lengkap dengan evaluasi menyeluruh 5 dimensi karakter (Hadir, Disiplin, Sikap, Teori, dan Fisik).',
      keyFunctions: [
        'Penerbitan KTA Digital interaktif dengan QR Code NRA.',
        'Grafik radar performa evaluasi 5 dimensi secara objektif.',
        'Histori catatan medis, kontak darurat wali murid, dan riwayat tugas pib.',
      ],
      desktopSupport: false,
      mobileSupport: true,
      targetUsers: 'Pasukan, Wali Murid, dan Pembina',
      screenshot: '/images/screenshots/komando/komando-09-rapor-profil-selina.jpg',
      screenshotCaption: 'Modal profil lengkap dengan indikator kehadiran 96%, nilai disiplin 100, dan capaian akademik.',
      tips: 'KTA digital dapat ditunjukkan langsung di layar ponsel saat registrasi perlombaan LKBB luar daerah.',
    },
    {
      id: 'modul-05',
      code: '05_HRD',
      name: 'HRD, Angkatan & Master Pasukan',
      category: 'Tata Kelola Markas',
      summary: 'Buku induk keanggotaan abadi yang mencatat siklus lengkap perjalanan anggota dari Capas hingga Purna Paskibra.',
      keyFunctions: [
        'Generator otomatis Nomor Registrasi Anggota (NRA) berstandar pangkalan.',
        'Filter 1 detik per angkatan (Angkatan 17, 16, 15, dsb).',
        'Penyimpanan foto profil pasukan tersinkronisasi ke Google Drive pangkalan.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Biro HRD, Pelatih, dan Pembina',
      screenshot: '/images/screenshots/komando/komando-08-database-anggota.jpg',
      screenshotCaption: 'Pangkalan data anggota aktif dan purna lengkap dengan pencarian cepat nama, kelas, dan angkatan.',
    },
    {
      id: 'modul-06',
      code: '06_Absensi',
      name: 'Presensi & Absensi Sesi Latihan',
      category: 'Operasional Pasukan',
      summary: 'Pencatatan kehadiran digital per sesi latihan rutin, gladi kotor, gladi bersih, maupun apel upacara bendera.',
      keyFunctions: [
        'Pelatih membuka sesi latihan dengan menentukan tanggal, jenis kegiatan, dan toleransi waktu.',
        'Pencatatan 4 status presensi: Hadir, Izin, Sakit, atau Alfa (Tanpa Keterangan).',
        'Kalkulasi otomatis persentase kehadiran individual untuk syarat kenaikan tingkat.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Pelatih, Binlat, dan Seluruh Anggota',
      tips: 'Data absensi langsung mengunci secara otomatis setelah sesi ditutup oleh pelatih untuk mencegah manipulasi data.',
    },
    {
      id: 'modul-07',
      code: '07_Operasi',
      name: 'Operasi, Program Kerja & Kalender',
      category: 'Tata Kelola Markas',
      summary: 'Manajemen kalender kegiatan pangkalan sepanjang tahun ajaran, meliputi target lomba, diklat, hingga upacara hari besar.',
      keyFunctions: [
        'Timeline program kerja triwulan dan tahunan dengan status capaian.',
        'Notifikasi pengumuman resmi dari pembina langsung di layar beranda anggota.',
        'Rencana gladi dan persiapan kontingen perlombaan.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Presiden Satuan & Pembina',
    },
    {
      id: 'modul-08',
      code: '08_Struktur',
      name: 'Struktur Kabinet & Bagan Organisasi',
      category: 'Tata Kelola Markas',
      summary: 'Visualisasi hierarki kepengurusan dewan kerja satuan secara transparan dan akuntabel.',
      keyFunctions: [
        'Bagan hierarki interaktif dari Pembina, Pelatih, Presiden, Sekjen, hingga Kepala Divisi.',
        'Pencantuman tupoksi (tugas pokok dan fungsi) setiap pejabat dewan kerja.',
        'Pengarsipan struktur kepengurusan lintas periode angkatan.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Semua Tingkat Pengguna',
      screenshot: '/images/screenshots/komando/komando-07-struktur-kabinet.jpg',
      screenshotCaption: 'Pohon struktur kabinet digital yang menampilkan foto dan jabatan dewan kehormatan serta pelaksana.',
    },
    {
      id: 'modul-09',
      code: '09_Akademik',
      name: 'Kawah Candradimuka & E-Learning Perpang TNI',
      category: 'Akademik & Disiplin',
      summary: 'LMS kepaskibraan terlengkap yang menyajikan silabus berjenjang semester 1 s/d 6, viewer materi resmi, dan ujian CBT.',
      keyFunctions: [
        'Viewer dokumen resmi Perpang TNI No 58/2018 tentang Peraturan Baris Berbaris.',
        'Penyematan video tutorial gerakan PBB dasar, variasi, dan formasi dari YouTube resmi satuan.',
        'Computer Based Test (CBT) dengan koreksi nilai otomatis untuk ujian kenaikan tingkat.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Pelatih, Binlat, dan Seluruh Anggota',
      screenshot: '/images/screenshots/komando/komando-04-kawah-candradimuka.jpg',
      screenshotCaption: 'Pusat silabus berjenjang semester 1 hingga 6 serta bank referensi dokumen abadi pangkalan.',
      tips: 'Materi dapat dibaca langsung di smartphone tanpa perlu mengunduh file PDF besar yang memenuhi memori siswa.',
    },
    {
      id: 'modul-10',
      code: '10_Keuangan',
      name: 'Keuangan, Kas Pangkalan & Iuran',
      category: 'Tata Kelola Markas',
      summary: 'Buku kas digital dengan pencatatan ganda arus masuk/keluar, pelacakan iuran kas mingguan, dan saldo real-time.',
      keyFunctions: [
        'Pencatatan kas masuk (iuran anggota, subsidi sekolah, sponsorship) dan kas keluar (konsumsi, seragam, transportasi lomba).',
        'Laporan rekapitulasi mutasi kas per periode untuk transparansi rapat komite/pembina.',
        'Lampiran bukti nota digital tersimpan rapi di Google Drive.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Biro Keuangan & Pembina',
    },
    {
      id: 'modul-11',
      code: '11_Inventaris',
      name: 'Inventaris & Logistik Perlengkapan',
      category: 'Tata Kelola Markas',
      summary: 'Pangkalan data aset barang pangkalan untuk menjamin tidak ada seragam atau alat latihan yang hilang tanpa jejak.',
      keyFunctions: [
        'Katalog barang: Seragam PDU/PDH, sepatu lars, pedang pora, senjata replika, baki bendera.',
        'Status kelayakan barang (Baik, Perlu Servis, Rusak Berat).',
        'Formulir mutasi peminjaman barang oleh anggota atau pihak luar sekolah.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Biro Logistik & Pengurus Satuan',
    },
    {
      id: 'modul-12',
      code: '12_Humas',
      name: 'Humas, Publikasi & Liputan Satuan',
      category: 'Tata Kelola Markas',
      summary: 'Pusat arsip dokumentasi kegiatan, kalender konten media sosial, dan materi rilis publikasi prestasi pangkalan.',
      keyFunctions: [
        'Arsip tautan Google Drive dokumentasi foto & video beresolusi tinggi.',
        'Jadwal rilis konten Instagram / TikTok satuan untuk mempromosikan kegiatan ekstrakurikuler.',
        'Statistik pencapaian kejuaraan untuk bahan presentasi MPLS sekolah.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Divisi Humas & Media Publikasi',
    },
    {
      id: 'modul-13',
      code: '13_Pelanggaran',
      name: 'Buku Hitam & Komisi Disiplin',
      category: 'Akademik & Disiplin',
      summary: 'Sistem pencatatan pelanggaran tata tertib dan poin pembinaan karakter anggota secara rahasia dan objektif.',
      keyFunctions: [
        'Katalog jenis pelanggaran (Keterlambatan, Ketidakrapian seragam, Pelanggaran etika).',
        'Perhitungan akumulasi poin sanksi dan status rekomendasi surat peringatan (SP).',
        'Log konseling dan tindak lanjut perbaikan karakter oleh Pelatih dan Pembina.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Komisi Disiplin, Pelatih, dan Pembina',
      tips: 'Hanya Pembina dan Pelatih yang dapat melihat rekapitulasi Buku Hitam secara utuh demi menjaga privasi siswa.',
    },
    {
      id: 'modul-14',
      code: '14_DrivePDF',
      name: 'Generator Dokumen & Arsip PDF Cloud',
      category: 'Core & Akses',
      summary: 'Mesin pembuat dokumen otomatis yang menyusun berkas surat keputusan, sertifikat, dan kartu anggota dalam format PDF siap cetak.',
      keyFunctions: [
        'Render otomatis layout dokumen resmi dengan kop surat pangkalan.',
        'Penyimpanan berkas hasil cetak ke folder Google Drive organisasi secara tertata.',
        'Bebas biaya add-on pihak ketiga karena dijalankan secara native oleh Google Apps Script.',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Sekretariat Satuan & Pembina',
    },
    {
      id: 'modul-15',
      code: '15_Surat',
      name: 'Persuratan Otomatis & Penomoran Resmi',
      category: 'Tata Kelola Markas',
      summary: 'Tata kelola administrasi surat masuk dan keluar dengan formula penomoran surat otomatis yang konsisten.',
      keyFunctions: [
        'Generator nomor surat otomatis (contoh: 014/PASKIBRA-MAN/X/2026).',
        'Pencatatan asal surat masuk, perihal, dan tanggal disposisi dari kepala sekolah.',
        'Pengarsipan digital surat keluar (Surat Dispensasi Siswa, Undangan Pelatih Luar, Permohonan Izin Tempat).',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Sekretaris Satuan & Pembina',
    },
    {
      id: 'modul-16',
      code: '16_TindakLanjut',
      name: 'Tindak Lanjut & Notulensi Rapat',
      category: 'Tata Kelola Markas',
      summary: 'Monitoring eksekusi putusan rapat markas agar semua kesepakatan dewan kerja diselesaikan tepat waktu.',
      keyFunctions: [
        'Pencatatan agenda rapat, daftar hadir pengurus, dan hasil notulensi.',
        'Penugasan tugas (action item) spesifik per divisi lengkap dengan batas waktu (deadline).',
        'Pelacakan status pengerjaan (Belum Dimulai, Sedang Berjalan, Tuntas).',
      ],
      desktopSupport: true,
      mobileSupport: true,
      targetUsers: 'Presiden, Sekjen, dan Seluruh Kepala Divisi',
    },
  ],

  faqs: [
    {
      question: 'Kenapa aplikasi kadang lambat memuat data (Loading berputar lebih dari 3 detik)?',
      category: 'Koneksi & Kuota',
      answer: 'Sistem KOMANDO beroperasi di atas Google Apps Script yang terhubung langsung ke Google Sheets pangkalan Anda. Jika koneksi lambat, biasanya disebabkan oleh kuota jeda eksekusi Google atau sinyal smartphone pengguna.',
      solutionSteps: [
        'Lakukan refresh halaman aplikasi satu kali di peramban Chrome.',
        'Pastikan Google Spreadsheet master pangkalan tidak sedang dibuka atau di-edit massal secara manual oleh banyak orang bersamaan.',
        'Periksa apakah kuota internet sekolah/pribadi dalam kondisi stabil.',
      ],
    },
    {
      question: 'Mengapa foto anggota atau lampiran dokumen PDF tidak bisa terbuka / Muncul pesan "Akses Ditolak"?',
      category: 'Dokumen & Drive',
      answer: 'Hal ini terjadi apabila hak akses izin berbagi (Sharing Permission) pada folder Google Drive pangkalan belum diatur ke mode publik/terbuka untuk dibaca oleh script.',
      solutionSteps: [
        'Buka Google Drive pangkalan dengan akun Google induk pangkalan.',
        'Klik kanan pada folder utama KOMANDO_STORAGE > pilih menu "Bagikan" (Share).',
        'Ubah Akses Umum menjadi "Siapa saja yang memiliki link" dengan status "Pelihat" (Viewer).',
        'Simpan pengaturan dan muat ulang aplikasi.',
      ],
    },
    {
      question: 'Bagaimana alur jika ada anggota atau pengurus yang lupa kata sandi akunnya?',
      category: 'Akun & Login',
      answer: 'Anggota tidak perlu panik. Sandi anggota disimpan terenkripsi di tab USERS pada spreadsheet pangkalan dan dapat di-reset kapan saja oleh Pembina atau Admin Markas.',
      solutionSteps: [
        'Hubungi Sekretaris Markas atau Pembina Satuan.',
        'Admin membuka menu HRD & Master Pasukan > cari nama anggota yang bersangkutan.',
        'Tekan tombol "Reset Kata Sandi" ke nilai default (misal: "paskibra123").',
        'Anggota login menggunakan sandi baru tersebut dan diwajibkan menggantinya di menu Profil.',
      ],
    },
    {
      question: 'Bagaimana cara memasang aplikasi KOMANDO di HP Android agar tampil seperti aplikasi Play Store?',
      category: 'Instalasi APK',
      answer: 'KOMANDO mendukung dua format pemasangan: Aplikasi Web Progresif (PWA) instan dan berkas APK mandiri (Komando.apk) yang dibuat khusus untuk pangkalan.',
      solutionSteps: [
        'Metode PWA (Rekomendasi Tanpa Unduh): Buka tautan Web App di Google Chrome Android > tekan tombol titik tiga di kanan atas > pilih "Tambahkan ke Layar Utama" (Add to Home screen).',
        'Metode APK: Unduh berkas Komando.apk dari Google Drive pangkalan > buka berkas > izinkan pemasangan dari sumber ini > aplikasi siap digunakan dengan ikon resmi di launcher HP.',
      ],
    },
    {
      question: 'Apakah sekolah kami harus membayar biaya server atau sewa hosting bulanan?',
      category: 'Koneksi & Kuota',
      answer: 'Sama sekali TIDAK ADA biaya server bulanan (Rp 0 seumur hidup). Seluruh penyimpanan data, logika backend, dan hosting dieksekusi di infrastruktur Google Cloud gratis melalui Google Apps Script dan Google Drive pangkalan Anda sendiri.',
    },
  ],
};
