export interface DocStep {
  number: number;
  title: string;
  description: string;
  detail?: string[];
  badge?: string;
  image?: string;
}

export interface ModuleWorkflow {
  actor: string;
  formName: string;
  inputs: string[];
  actionButton: string;
}

export interface ModuleProcessing {
  backendEngine: string;
  storageTarget: string;
  automations: string[];
}

export interface ModuleOutput {
  title: string;
  deliverables: string[];
  proofMetric?: string;
}

export interface DocModule {
  id: string;
  code: string;
  name: string;
  category: 'Core & Akses' | 'Operasional Pasukan' | 'Akademik & Disiplin' | 'Tata Kelola Markas';
  summary: string;
  promise: string; // Janji & Ekspektasi Fitur
  workflow: ModuleWorkflow; // Input Data
  processing: ModuleProcessing; // Olah Data
  output: ModuleOutput; // Hasil Nyata
  desktopVsMobile: {
    mobileRole: string;
    desktopRole: string;
  };
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

export interface DeviceComparison {
  dimension: string;
  mobileApp: string;
  desktopCenter: string;
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
  androidInstallation: {
    apkSteps: DocStep[];
    pwaSteps: DocStep[];
  };
  desktopGuide: {
    accessUrlParam: string;
    description: string;
    highlights: string[];
    comparison: DeviceComparison[];
  };
  modules: DocModule[];
  faqs: DocFaq[];
}

export const komandoDocs: KomandoDocsData = {
  meta: {
    systemName: 'Sistem KOMANDO SaaS Paskibra',
    version: 'v2.6 Multi-Tenant Stable',
    lastUpdated: 'Oktober 2026',
    totalModules: 16,
    platform: 'Google Apps Script + Google Sheets Relasional + Capacitor Android APK + PWA',
    author: 'M. Apriyanto Wijaya (@madebyaapri)',
    waHelpUrl: 'https://wa.me/6282118313655?text=Halo%20Kang%20Apri%2C%20saya%20sedang%20membaca%20Dokumentasi%20Alur%20Fitur%20KOMANDO%20dan%20memerlukan%20bantuan%20terkait%3A%20',
  },

  chapters: [
    {
      id: 'arsitektur',
      title: 'Bab 1: Ikhtisar & Arsitektur Cloud',
      badge: 'Dasar Sistem',
      icon: '🏛️',
      summary: 'Fondasi arsitektur cloud multi-tenant, efisiensi biaya server Rp 0, dan SSOT Google Sheets.',
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
      id: 'platform-mode',
      title: 'Bab 4: Panduan Android (APK/PWA) & Mode Desktop',
      badge: 'Multi-Device',
      icon: '📱',
      summary: 'Langkah instalasi file Komando.apk di HP, mode PWA Chrome, dan akses Command Center Desktop (?mode=desktop).',
    },
    {
      id: 'modul-fitur',
      title: 'Bab 5: Panduan 16 Modul (Alur 4 Tahap)',
      badge: 'Alur Fitur Lengkap',
      icon: '⚡',
      summary: 'Bedah mendalam 16 modul: Janji Fitur → Input Data → Olah Sistem → Hasil Nyata Terverifikasi.',
    },
    {
      id: 'troubleshooting',
      title: 'Bab 6: Pusat Solusi Mandiri & FAQ',
      badge: 'Self-Service',
      icon: '🔧',
      summary: 'Troubleshooting kuota Google Sheets, izin Google Drive, reset kata sandi, dan panduan pasang APK.',
    },
    {
      id: 'eskalasi-bantuan',
      title: 'Bab 7: Eskalasi & Kontak Pengembang',
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

  androidInstallation: {
    apkSteps: [
      {
        number: 1,
        title: 'Unduh Berkas Komando.apk',
        badge: 'File APK Native',
        description: 'Dapatkan berkas Komando.apk resmi (ukuran ~4.6 MB) yang dibagikan oleh admin pangkalan atau link cloud resmi satuan.',
        detail: [
          'Nama Paket: com.komandopaskibra.app (Capacitor Engine).',
          'Kompatibilitas: Android 7.0 (Nougat) hingga Android 14+.',
          'Hemat Memori: Ringan karena asset web di-cache lokal dengan rendering WebView Chromium.',
        ],
      },
      {
        number: 2,
        title: 'Buka Berkas & Izinkan Sumber Tidak Dikenal',
        badge: 'Pengaturan Keamanan',
        description: 'Karena aplikasi didistribusikan langsung oleh pangkalan (di luar Play Store publik), Android memerlukan persetujuan instalasi mandiri.',
        detail: [
          'Buka File Manager / Notifikasi Unduhan di HP, lalu ketuk Komando.apk.',
          'Jika muncul peringatan "Demi keamanan, ponsel Anda tidak diizinkan memasang aplikasi tidak dikenal dari sumber ini", ketuk menu Setelan (Settings).',
          'Aktifkan opsi toggle "Izinkan dari sumber ini" (Allow from this source).',
          'Kembali ke halaman instalasi, lalu ketuk tombol "Instal" (Install).',
        ],
      },
      {
        number: 3,
        title: 'Peluncuran Pertama & Izin Perangkat',
        badge: 'Siap Pakai',
        description: 'Aplikasi akan terbuka dengan layar pembuka (Splash Screen) resmi berlatar biru langit dan logo KOMANDO.',
        detail: [
          'Aplikasi meminta izin Kamera (untuk pemindaian QR Barcode presensi dan unggah pas foto KTA).',
          'Ikon KOMANDO resmi akan langsung muncul di halaman beranda / daftar aplikasi HP siswa.',
          'Siswa dapat langsung login dengan memasukkan Kode Sekolah, Username, dan Password.',
        ],
      },
    ],
    pwaSteps: [
      {
        number: 1,
        title: 'Buka Web App di Google Chrome Android',
        badge: 'Alternatif PWA',
        description: 'Buka tautan web resmi pangkalan Anda (misal: script.google.com/.../exec) di browser Chrome smartphone.',
      },
      {
        number: 2,
        title: 'Ketuk Titik Tiga (Menu Chrome)',
        badge: 'Menu Browser',
        description: 'Di sudut kanan atas peramban Chrome, ketuk ikon titik tiga (⋮).',
      },
      {
        number: 3,
        title: 'Pilih "Tambahkan ke Layar Utama" (Install)',
        badge: 'Instal Tanpa Unduh',
        description: 'Pilih opsi "Tambahkan ke Layar Utama" (Add to Home screen) atau "Instal Aplikasi". Ikon KOMANDO akan otomatis terpasang di launcher HP tanpa memakan kuota unduhan APK.',
      },
    ],
  },

  desktopGuide: {
    accessUrlParam: '?mode=desktop',
    description: 'Command Center Desktop dirancang khusus untuk layar laptop, PC kantor pangkalan, dan monitor ruang pembina. Mengubah antarmuka ponsel menjadi konsol kerja multi-panel dengan efisiensi keyboard dan layar lebar.',
    highlights: [
      'Peta Sebaran Latihan & Markas Interaktif (SVG Visual Map).',
      'Tabel Spreadsheet Multi-Kolom dengan sorting & filter cepat.',
      'Audit Transaksi Keuangan & Rekapitulasi Kas 1-Klik.',
      'Cetak Massal Surat Keputusan, Lembar Presensi, dan KTA Angkatan.',
    ],
    comparison: [
      {
        dimension: 'Target Pengguna Utama',
        mobileApp: 'Pasukan, Capas, Pelatih di Lapangan Upacara',
        desktopCenter: 'Pembina, Sekretaris, Bendahara, Dewan Kehormatan',
      },
      {
        dimension: 'Perangkat Terbaik',
        mobileApp: 'Smartphone Android (APK/PWA) layar sentuh',
        desktopCenter: 'Laptop / PC Monitor Minimal 13 inci (1080p)',
      },
      {
        dimension: 'Aktivitas Unggulan',
        mobileApp: 'Presensi kilat, KTA barcode, baca e-learning, lapor tugas',
        desktopCenter: 'Input ratusan anggota, cetak SPJ, bikin nomor surat, audit kas',
      },
      {
        dimension: 'Cara Mengakses',
        mobileApp: 'Buka file APK terpasang atau buka link langsung di HP',
        desktopCenter: 'Buka link web app di laptop dengan menambahkan ?mode=desktop',
      },
    ],
  },

  modules: [
    {
      id: 'modul-01',
      code: '01_Auth',
      name: 'Autentikasi & Gerbang Keamanan Pangkalan',
      category: 'Core & Akses',
      summary: 'Pintu gerbang login terenkripsi berbasis kode unik pangkalan dan sandi berjenjang dengan session management ringan.',
      promise: 'Menjamin tidak ada orang luar yang bisa mengintip atau merusak data pangkalan, serta memisahkan akses siswa biasa dari wewenang sensitif pembina secara otomatis.',
      workflow: {
        actor: 'Seluruh Anggota, Pelatih, dan Pembina',
        formName: 'Form Gerbang Masuk Satuan (Login)',
        inputs: ['Kode Identitas Sekolah (contoh: mancimahi)', 'Username / NRA Anggota', 'Kata Sandi Akun'],
        actionButton: 'Tombol "Masuk Markas" (Verifikasi Kredensial)',
      },
      processing: {
        backendEngine: '01_Auth.gs (prosesLoginServer)',
        storageTarget: 'Tab USERS di Spreadsheet Pangkalan (Kolom H: Password ter-hash SHA-256)',
        automations: [
          'Memvalidasi kesesuaian Kode Sekolah untuk memilih tenant database pangkalan.',
          'Mencocokkan hash SHA-256 kata sandi agar teks asli tidak pernah terbaca di server.',
          'Menyimpan token sesi terenkripsi di sessionStorage peramban klien tanpa membebani API Google.',
        ],
      },
      output: {
        title: 'Sesi Aktif Terverifikasi Sesuai Peran',
        deliverables: [
          'Anggota Pasukan langsung diarahkan ke Beranda Mobile dengan KTA digital siap pakai.',
          'Pembina otomatis mendapatkan tombol akses Command Center Desktop dan menu pengesahan.',
        ],
        proofMetric: 'Kecepatan validasi login rata-rata < 0.8 detik.',
      },
      desktopVsMobile: {
        mobileRole: 'Layar login ringkas satu kolom di smartphone siswa.',
        desktopRole: 'Gerbang Command Center dengan pintasan reset sandi massal oleh super-admin.',
      },
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
      promise: 'Menyajikan seluruh rangkuman pangkalan (agenda latihan, peringatan piket markas, dan klasemen kehormatan) dalam 1 detik tanpa perlu membuka belasan menu.',
      workflow: {
        actor: 'Sistem Otomatis (Dibaca oleh seluruh pengguna)',
        formName: 'Dashboard Agregator Beranda',
        inputs: ['Trigger buka aplikasi (Otomatis membaca dataset sesi pengguna saat ini)'],
        actionButton: 'Otomatis dimuat saat mendarat di aplikasi',
      },
      processing: {
        backendEngine: '02_Data.gs (ambilDataSistem)',
        storageTarget: 'Agregasi lintas 6 tab: USERS, PRESENSI, JADWAL, PIKET, PENGUMUMAN, REKAP_NILAI',
        automations: [
          'Mengeksekusi 1 single query RPC terpadu untuk mereduksi 80% kuota Google Apps Script.',
          'Menghitung indeks performa terpadu untuk menyeleksi 3 besar peraih nilai tertinggi.',
          'Mendeteksi jadwal latihan yang aktif pada hari ini.',
        ],
      },
      output: {
        title: 'Klasemen Wall of Fame & Widget Kegiatan Aktif',
        deliverables: [
          'Podium Top 3 Juara Pasukan Terbaik (Grade A) terpampang di layar utama.',
          'Badge sesi latihan aktif jika pelatih sedang membuka absensi hari ini.',
          'Kartu piket markas yang memberitahu giliran divisi mana yang bertugas merawat markas.',
        ],
        proofMetric: 'Seluruh agregat data pangkalan termuat dalam payload < 100 KB.',
      },
      desktopVsMobile: {
        mobileRole: 'Kartu ringkas vertikal yang dapat di-swipe di smartphone.',
        desktopRole: 'Tampilan multi-kolom widescreen dengan widget status server real-time.',
      },
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
      promise: 'Menghilangkan kekacauan koordinasi antar-divisi kepengurusan; semua ruang kerja 8 divisi terhubung dalam 1 sentuhan tombol.',
      workflow: {
        actor: 'Pengurus Satuan (Presiden, Sekjen, dan 8 Kepala Divisi)',
        formName: 'Konsol Hub Markas Pasukan',
        inputs: ['Pilih divisi target (HRD, Disiplin, Diklat, Humas, Logistik, dsb)'],
        actionButton: 'Ketuk salah satu kartu divisi untuk membuka ruang kerja khusus',
      },
      processing: {
        backendEngine: 'Routing frontend 03_Markas_JS.html',
        storageTarget: 'Mapping izin peran pengguna (Role-Based Dynamic Routing)',
        automations: [
          'Menampilkan badge indikator jumlah tugas atau dokumen baru di setiap divisi.',
          'Menyembunyikan menu rahasia jika anggota biasa membuka halaman markas.',
        ],
      },
      output: {
        title: 'Akses Langsung ke Lembar Kerja Divisi Spesifik',
        deliverables: [
          'Divisi Disiplin langsung masuk ke Buku Hitam.',
          'Divisi Binlat langsung masuk ke Bank Soal CBT dan Silabus Diklat.',
          'Divisi Logistik langsung masuk ke Kartu Inventaris Perlengkapan.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Grid tombol sentuh 2x4 dengan ikon khas militer.',
        desktopRole: 'Sidebar navigasi pohon hierarki kepengurusan.',
      },
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
      promise: 'Memberikan penilaian objektif dan transparan atas perkembangan karakter setiap anggota; mengakhiri sistem penilaian subyektif "suka-tidak-suka".',
      workflow: {
        actor: 'Pasukan (Melihat) & Pelatih/Pembina (Memberi Nilai)',
        formName: 'Sidang Evaluasi Pasukan & Formulir Biodata',
        inputs: ['Skor Sikap (1-100)', 'Skor Teori PBB (CBT)', 'Skor Tes Fisik/Kesamaptaan', 'Unggah Pas Foto PDU'],
        actionButton: 'Tombol "Simpan Evaluasi" & "Tampilkan KTA Digital"',
      },
      processing: {
        backendEngine: '09_Akademik.gs & 04_Profil_JS.html',
        storageTarget: 'Tab REKAP_NILAI & USERS di Google Sheets',
        automations: [
          'Kalkulasi persentase kehadiran otomatis dari log tab ABSENSI.',
          'Pengurangan poin otomatis dari log tab PELANGGARAN.',
          'Pembuatan QR Code NRA unik untuk kartu identitas digital anggota.',
        ],
      },
      output: {
        title: 'KTA Digital Ber-Barcode & Grafik Radar Rapor 5 Dimensi',
        deliverables: [
          'KTA Digital resmi siap ditunjukkan di layar ponsel saat perlombaan luar kota.',
          'Diagram performa 5 Dimensi: Hadir 96%, Disiplin 100, Sikap 95, Teori 90, Fisik 92.',
          'Kartu Rapor Digital siap cetak format A4 bertanda tangan Pembina.',
        ],
        proofMetric: 'Evaluasi langsung ter-update seketika setelah pelatih menginput nilai ujian.',
      },
      desktopVsMobile: {
        mobileRole: 'KTA interaktif dengan tombol download gambar kartu ke galeri ponsel.',
        desktopRole: 'Modal tinjauan profil lengkap dengan riwayat presensi dan riwayat pelanggaran.',
      },
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
      promise: 'Mencegah duplikasi nomor anggota, mengamankan riwayat angkatan puluhan tahun agar tidak hilang saat pergantian kepengurusan.',
      workflow: {
        actor: 'Biro HRD & Sekretariat Pangkalan',
        formName: 'Formulir Pendaftaran & Mutasi Pasukan',
        inputs: ['Nama Lengkap Siswa', 'NIS / NISN Sekolah', 'Nomor Angkatan (misal: 17)', 'Kelas / Jurusan', 'Kontak Darurat Wali'],
        actionButton: 'Tombol "Daftarkan Anggota Baru" (Auto-Generate NRA)',
      },
      processing: {
        backendEngine: '05_HRD.gs (generateAutoNRA & tambahAnggotaBaru)',
        storageTarget: 'Tab USERS (Spreadsheet Master Pangkalan)',
        automations: [
          'Formula generateAutoNRA menghitung urutan terakhir pada angkatan terkait.',
          'Format penomoran standar diterbitkan otomatis (contoh: 17.2026.042).',
          'Akun login langsung dibuatkan dengan password awal terenkripsi aman.',
        ],
      },
      output: {
        title: 'Nomor Registrasi Anggota (NRA) Resmi & Buku Induk Digital',
        deliverables: [
          'Siswa terdaftar di buku induk pangkalan dan langsung memiliki akun login aktif.',
          'Filter angkatan kilat 1 detik (Angkatan 17, 16, 15) untuk memilah anggota aktif vs purna.',
        ],
        proofMetric: 'Zero Collision: NRA dijamin 100% unik dan tidak akan tertukar antar-siswa.',
      },
      desktopVsMobile: {
        mobileRole: 'Pencarian cepat anggota perorangan di lapangan.',
        desktopRole: 'Tabel master data masif dengan ekspor ke file Excel/CSV pangkalan.',
      },
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
      promise: 'Mengakhiri manipulasi tanda tangan kertas dan "titip absen"; data presensi mengunci otomatis saat sesi ditutup oleh pelatih.',
      workflow: {
        actor: 'Pelatih (Buka Sesi) & Siswa (Presensi Mandiri / Scan)',
        formName: 'Radar Presensi Sesi Latihan',
        inputs: ['Nama Sesi (misal: Latihan Rutin Vafor)', 'Tanggal Latihan', 'Status Kehadiran (Hadir / Izin / Sakit / Alfa)', 'Foto Bukti Selfie Lapangan (Opsional)'],
        actionButton: 'Tombol "Kirim Presensi Sekarang"',
      },
      processing: {
        backendEngine: '06_Absensi.gs (simpanPresensiMassalServer)',
        storageTarget: 'Tab ABSENSI di Google Sheets',
        automations: [
          'Memvalidasi batas waktu (cut-off time) sesi latihan agar absensi terlambat otomatis ditolak.',
          'Mencatat timestamp akurat hingga detik eksekusi.',
          'Merekalkulasi akumulasi persentase kehadiran individual anggota secara real-time.',
        ],
      },
      output: {
        title: 'Rekapitulasi Kehadiran Digital & Lembar Absensi Bersih',
        deliverables: [
          'Grafik persentase hadir anggota langsung berubah (misal: 96%).',
          'Pelatih dapat langsung melihat siapa saja pasukan yang belum hadir hari ini dalam 1 ketukan.',
        ],
        proofMetric: 'Log tersimpan permanen di cloud tanpa risiko kertas absen basah kehujanan.',
      },
      desktopVsMobile: {
        mobileRole: 'Presensi kilat via smartphone oleh pelatih atau mandiri oleh siswa.',
        desktopRole: 'Rekapitulasi semesteran dan lembar kehadiran siap cetak untuk laporan dinas.',
      },
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
      promise: 'Seluruh anggota dan pembina mengetahui jadwal kegiatan 1 tahun ke depan tanpa ada miskomunikasi jadwal bentrok.',
      workflow: {
        actor: 'Presiden Satuan & Sekjen Markas',
        formName: 'Form Entri Program Kerja & Agenda Lomba',
        inputs: ['Nama Kegiatan / Lomba', 'Tanggal Pelaksanaan', 'Lokasi Kegiatan', 'Target Capaian (contoh: Juara 1 Utama)', 'Anggaran Biaya Estimasi'],
        actionButton: 'Tombol "Rilis ke Kalender Satuan"',
      },
      processing: {
        backendEngine: '07_Operasi.gs',
        storageTarget: 'Tab JADWAL & PROKER',
        automations: [
          'Menyinkronkan timeline proker ke kalender kegiatan di Beranda seluruh anggota.',
          'Menghitung hitung mundur (countdown hari H) menuju perlombaan berikutnya.',
        ],
      },
      output: {
        title: 'Kalender Operasi Terpadu & Notifikasi Countdown H-Lomba',
        deliverables: [
          'Kartu kegiatan aktif dengan countdown hari H terpajang di Beranda aplikasi siswa.',
          'Laporan persentase ketercapaian program kerja tahunan untuk evaluasi pembina.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Melihat countdown hari H lomba dan lokasi kegiatan.',
        desktopRole: 'Bagan timeline tahunan dengan plotting jadwal antar-divisi.',
      },
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
      promise: 'Struktur organisasi dan pembagian tugas kabinet jelas terpampang; tidak ada lagi anggota yang bingung siapa penanggung jawab tiap unit.',
      workflow: {
        actor: 'Sekjen Satuan & Pembina',
        formName: 'Editor Hierarki Kabinet Pangkalan',
        inputs: ['Pilih Jabatan (Presiden, Sekjen, Bendahara, Danlat, dsb)', 'Pilih Nama Anggota Terpilih', 'Periode Bakti (misal: 2026 - 2027)', 'Tupoksi Jabatan'],
        actionButton: 'Tombol "Perbarui Susunan Kabinet"',
      },
      processing: {
        backendEngine: '08_Struktur.gs',
        storageTarget: 'Tab STRUKTUR di Google Sheets',
        automations: [
          'Menyusun relasi pohon hierarki organisasi secara visual.',
          'Mengambil foto profil terbaru pejabat dari pangkalan data USERS.',
        ],
      },
      output: {
        title: 'Bagan Struktur Kabinet Digital Interaktif',
        deliverables: [
          'Diagram pohon kepemimpinan transparan dengan foto dan kontak dinas pengurus.',
          'Pengarsipan susunan dewan kerja periode sebelumnya sebagai catatan sejarah pangkalan.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Kartu pengurus per divisi dengan tombol chat WhatsApp cepat.',
        desktopRole: 'Bagan pohon organisasi interaktif widescreen siap cetak poster.',
      },
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
      promise: 'Materi kurikulum PBB resmi (Perpang TNI No 58/2018) dan ujian teori dapat diakses langsung dari ponsel siswa tanpa perlu fotokopi modul tebal.',
      workflow: {
        actor: 'Pelatih / Binlat (Rilis Materi/Soal) & Siswa (Belajar/Ujian)',
        formName: 'Portal Kawah Candradimuka & Ujian CBT',
        inputs: ['Pilih Semester (1 - 6)', 'Pilih Bab Materi (PBB Dasar, Formasi, Penghormatan)', 'Pilih Jawaban Ujian Soal Pilihan Ganda (A/B/C/D)'],
        actionButton: 'Tombol "Kirim Lembar Jawaban Ujian"',
      },
      processing: {
        backendEngine: '09_Akademik.gs (evaluasiCbtOnlineServer)',
        storageTarget: 'Tab KURIKULUM & BANK_SOAL di Spreadsheet',
        automations: [
          'Membuka viewer dokumen resmi PDF langsung di dalam aplikasi via Google Drive Stream.',
          'Mengoreksi lembar jawaban siswa secara otomatis dalam 0.1 detik setelah tombol kirim ditekan.',
          'Menyalurkan skor hasil ujian langsung ke komponen Rapor 5 Dimensi.',
        ],
      },
      output: {
        title: 'Skor Ujian Instan & Akses E-Learning 24 Jam',
        deliverables: [
          'Siswa langsung melihat nilai ujian dan pembahasan materi tanpa menunggu berminggu-minggu.',
          'Akses buku Perpang TNI No 58/2018 dan video formasi YouTube resmi pangkalan di smartphone.',
        ],
        proofMetric: 'Efisiensi biaya cetak kertas ujian 100% (Paperless Exam).',
      },
      desktopVsMobile: {
        mobileRole: 'Membaca modul e-learning dan mengerjakan soal ujian via smartphone.',
        desktopRole: 'Editor bank soal massal dan analisis butir soal oleh pelatih.',
      },
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
      promise: 'Mengakhiri kecurigaan dan selisih uang kas; saldo keuangan pangkalan transparan hingga rupiah terakhir dan siap diaudit kapan saja oleh pembina.',
      workflow: {
        actor: 'Biro Keuangan / Bendahara Satuan',
        formName: 'Buku Kas Masuk / Kas Keluar',
        inputs: ['Jenis Transaksi (Kas Masuk / Kas Keluar)', 'Nominal Rupiah (Rp)', 'Kategori (Iuran Mingguan, Belanja Logistik, Subsidi Sekolah)', 'Keterangan Transaksi', 'Unggah Foto Struk/Kwitansi'],
        actionButton: 'Tombol "Simpan Transaksi Kas" (Mutex Lock Protected)',
      },
      processing: {
        backendEngine: '10_Keuangan.gs (simpanTransaksiKas & LockService)',
        storageTarget: 'Tab BUKU_KAS di Google Sheets & Bukti di Folder Google Drive KEUANGAN',
        automations: [
          'Memasang Google Apps Script LockService (Mutex) untuk mencegah race-condition jika bendahara input bersamaan.',
          'Menghitung saldo berjalan (running balance) secara otomatis.',
          'Menghubungkan link bukti kwitansi Google Drive langsung pada baris transaksi.',
        ],
      },
      output: {
        title: 'Saldo Kas Real-Time & Rekapitulasi Pembukuan Akurat',
        deliverables: [
          'Papan saldo kas ter-update real-time (contoh: Kas Aktif Rp 4.250.000).',
          'Laporan pembukuan bulanan siap diekspor ke PDF untuk lampiran LPJ Pembina dan Komite Sekolah.',
        ],
        proofMetric: 'Zero Selisih: Keseimbangan debit-kredit terkunci dengan sistem pembukuan berpasangan.',
      },
      desktopVsMobile: {
        mobileRole: 'Catat iuran mingguan anggota dan foto nota belanja dari HP saat di toko perlengkapan.',
        desktopRole: 'Audit komprehensif kas, filter transaksi bulanan, dan ekspor lembar LPJ formal.',
      },
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
      promise: 'Tidak ada lagi seragam hilang, pedang pora rusak tanpa tahu siapa pelakunya, atau baki bendera tercecer sehabis kegiatan.',
      workflow: {
        actor: 'Biro Logistik & Anggota Peminjam',
        formName: 'Katalog Barang & Formulir Mutasi Peminjaman',
        inputs: ['Kode Barang (misal: SGM-PDU-08)', 'Nama Barang', 'Nama Peminjam', 'Tanggal Pinjam & Janji Kembali', 'Kondisi Barang (Baik / Rusak / Perlu Servis)'],
        actionButton: 'Tombol "Catat Peminjaman" & "Konfirmasi Pengembalian"',
      },
      processing: {
        backendEngine: '11_Inventaris.gs',
        storageTarget: 'Tab INVENTARIS di Google Sheets',
        automations: [
          'Mengurangi kuota stok barang yang berstatus "Tersedia" di gudang secara otomatis.',
          'Mencatat riwayat orang terakhir yang bertanggung jawab memegang barang.',
        ],
      },
      output: {
        title: 'Status Stok Barang Gudang & Kartu Peminjaman Digital',
        deliverables: [
          'Daftar barang yang sedang dipinjam beserta nama penanggung jawabnya.',
          'Peringatan otomatis barang yang belum dikembalikan melewati batas tanggal.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Scan atau pilih barang saat penyerahan seragam di markas.',
        desktopRole: 'Audit sensus aset tahunan dan rekapitulasi nilai aset materi pangkalan.',
      },
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
      promise: 'Seluruh foto dokumentasi lomba beresolusi tinggi tersimpan rapi selamanya di cloud tanpa risiko hilang saat HP pengurus ganti.',
      workflow: {
        actor: 'Divisi Humas & Publikasi Satuan',
        formName: 'Form Entri Liputan & Jadwal Sosmed',
        inputs: ['Judul Kegiatan Liputan', 'Tanggal Acara', 'Tautan Folder Google Drive HD', 'Platform Rilis (Instagram / TikTok / Mading Sekolah)', 'Status Publikasi'],
        actionButton: 'Tombol "Simpan Arsip Liputan"',
      },
      processing: {
        backendEngine: '12_Humas.gs',
        storageTarget: 'Tab HUMAS_MEDIA di Google Sheets',
        automations: [
          'Mengindeks tautan Google Drive dokumentasi foto & video resmi.',
          'Menyusun kalender perencanaan konten media sosial mingguan.',
        ],
      },
      output: {
        title: 'Galeri Arsip Prestasi & Kalender Publikasi Resmi',
        deliverables: [
          'Arsip foto kejuaraan dapat diakses kembali sewaktu-waktu oleh calon sponsor atau pihak sekolah.',
          'Jadwal konten media sosial yang teratur untuk membangun citra pangkalan unggulan.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Unggah cepat foto dokumentasi dari galeri HP sesaat setelah upacara selesai.',
        desktopRole: 'Kurasi album media beresolusi tinggi dan jadwal publikasi bulanan.',
      },
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
      promise: 'Membina kedisiplinan secara objektif dengan poin terukur; tidak ada diskriminasi atau hukuman yang dijatuhkan secara emosional.',
      workflow: {
        actor: 'Komisi Disiplin, Pelatih, dan Pembina',
        formName: 'Buku Hitam Digital (Pencatatan Pelanggaran)',
        inputs: ['Nama Anggota Pelanggar', 'Jenis Pelanggaran (Keterlambatan, Seragam Tidak Rapi, dsb)', 'Poin Pelanggaran (misal: 5, 10, 25)', 'Catatan Kronologi', 'Nama Petugas Pencatat'],
        actionButton: 'Tombol "Catat Pelanggaran & Update Skor"',
      },
      processing: {
        backendEngine: '13_Pelanggaran.gs',
        storageTarget: 'Tab PELANGGARAN di Google Sheets (Enkripsi Akses Khusus)',
        automations: [
          'Mengakumulasikan total poin sanksi yang telah dikumpulkan anggota.',
          'Secara otomatis mengurangi nilai dimensi "Disiplin" pada rapor anggota.',
          'Memicu peringatan otomatis jika total poin mencapai ambang batas Surat Peringatan (SP).',
        ],
      },
      output: {
        title: 'Histori Pembinaan Karakter & Rekomendasi Sanksi Terukur',
        deliverables: [
          'Catatan evaluasi konseling personal yang hanya bisa dibaca Pembina dan Pelatih.',
          'Grafik indeks kedisiplinan pasukan pangkalan untuk rapat evaluasi bulanan.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Input cepat kasus pelanggaran tata tertib saat sidak apel pagi.',
        desktopRole: 'Tinjauan histori pembinaan menyeluruh dan pencetakan Surat Peringatan (SP).',
      },
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
      promise: 'Mencetak dokumen resmi standar instansi (A4) dalam hitungan detik tanpa perlu mendesain ulang layout kop surat di Microsoft Word.',
      workflow: {
        actor: 'Sekretariat Satuan & Pembina',
        formName: 'Generator Cetak PDF Mandiri',
        inputs: ['Pilih Jenis Dokumen (KTA, Sertifikat Diklat, Surat Dispensasi)', 'Pilih Data Sumber (Perorangan / Seluruh Angkatan)'],
        actionButton: 'Tombol "Generate Dokumen PDF"',
      },
      processing: {
        backendEngine: '14_DrivePDF.gs',
        storageTarget: 'Penyimpanan langsung ke Google Drive Pangkalan',
        automations: [
          'Menyuntikkan logo resmi pangkalan ke kop surat secara presisi.',
          'Mengonversi template HTML/CSS menjadi berkas PDF standar A4 resolusi tinggi.',
          'Menghasilkan link unduh langsung yang bisa dibuka dari smartphone.',
        ],
      },
      output: {
        title: 'Berkas PDF Siap Cetak & Terarsip di Google Drive',
        deliverables: [
          'Lembar KTA cetak A4 (isi 8 kartu per lembar) siap dipotong dan dilaminating.',
          'Sertifikat ber-barcode legalitas pangkalan yang dapat diunduh siswa.',
        ],
        proofMetric: 'Waktu render PDF otomatis < 3 detik per berkas.',
      },
      desktopVsMobile: {
        mobileRole: 'Unduh file PDF langsung ke penyimpanan HP.',
        desktopRole: 'Cetak massal langsung ke printer kantor sekolah.',
      },
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
      promise: 'Tidak ada lagi nomor surat kembar, nomor surat terlewat, atau surat dinas tercecer tanpa arsip.',
      workflow: {
        actor: 'Sekretaris Satuan & Pembina',
        formName: 'Formulir Penerbitan Nomor Surat Keluar',
        inputs: ['Kategori Surat (DISPENSASI / UNDANGAN / PERINGATAN / SK / BAST)', 'Perihal Surat', 'Tujuan Penerima (misal: Kepala Sekolah, Panitia LKBB)', 'Pejabat Penandatangan'],
        actionButton: 'Tombol "Terbitkan Nomor Surat Resmi"',
      },
      processing: {
        backendEngine: '15_Surat.gs (generateNomorSuratOtomatis & LockService)',
        storageTarget: 'Tab SURAT_KELUAR di Google Sheets',
        automations: [
          'Mengambil urutan nomor terakhir dan menyusun format baku (contoh: 042/PASKIBRA-MAN/X/2026).',
          'Mengunci nomor agar jika 2 pengurus membuat surat bersamaan, nomor tidak akan bertabrakan.',
          'Menyediakan kolom unggah scan bukti surat bertanda tangan basah ke Google Drive.',
        ],
      },
      output: {
        title: 'Nomor Surat Terverifikasi & Arsip Digital Surat Masuk/Keluar',
        deliverables: [
          'Nomor surat resmi langsung muncul di layar dan tercatat di buku agenda surat.',
          'Daftar surat dinas yang pernah dikeluarkan beserta link PDF arsipnya.',
        ],
        proofMetric: 'Akuntabilitas administrasi 100% rapi dan siap saat akreditasi sekolah.',
      },
      desktopVsMobile: {
        mobileRole: 'Minta nomor surat darurat langsung dari HP saat mendampingi kontingen di luar.',
        desktopRole: 'Buku agenda persuratan lengkap dengan cetak lembar disposisi pembina.',
      },
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
      promise: 'Rapat organisasi menghasilkan aksi nyata, bukan sekadar obrolan; setiap keputusan memiliki penanggung jawab dan tenggat waktu yang terpantau.',
      workflow: {
        actor: 'Sekjen Satuan & Presiden Satuan',
        formName: 'Notulensi Rapat & Penugasan Aksi (Action Items)',
        inputs: ['Agenda Rapat', 'Hasil Keputusan Bersama', 'Divisi Penanggung Jawab', 'Batas Waktu Penyelesaian (Deadline)', 'Status Tugas (Belum / Berjalan / Selesai)'],
        actionButton: 'Tombol "Rilis Tugas ke Pengurus"',
      },
      processing: {
        backendEngine: '16_TindakLanjut.gs',
        storageTarget: 'Tab TINDAK_LANJUT di Google Sheets',
        automations: [
          'Mengirimkan tugas ke dashboard divisi yang ditugaskan.',
          'Menandai status tugas yang telah melewati deadline dengan warna merah peringatan.',
        ],
      },
      output: {
        title: 'Papan Monitoring Eksekusi Rapat & Status Disposisi',
        deliverables: [
          'Daftar tugas terbagi jelas per kepala divisi pengurus.',
          'Laporan progres kinerja kepengurusan untuk rapat mingguan pembina.',
        ],
      },
      desktopVsMobile: {
        mobileRole: 'Centang status tugas "Selesai" dari HP setelah mengeksekusi di lapangan.',
        desktopRole: 'Papan Kanban monitoring seluruh tugas kabinet satuan.',
      },
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
        'Metode APK Native: Unduh berkas Komando.apk dari Google Drive pangkalan > buka berkas > izinkan pemasangan dari sumber ini > aplikasi siap digunakan dengan ikon resmi di launcher HP.',
        'Metode PWA (Tanpa Unduh): Buka tautan Web App di Google Chrome Android > tekan tombol titik tiga di kanan atas > pilih "Tambahkan ke Layar Utama" (Add to Home screen).',
      ],
    },
    {
      question: 'Apakah sekolah kami harus membayar biaya server atau sewa hosting bulanan?',
      category: 'Koneksi & Kuota',
      answer: 'Sama sekali TIDAK ADA biaya server bulanan (Rp 0 seumur hidup). Seluruh penyimpanan data, logika backend, dan hosting dieksekusi di infrastruktur Google Cloud gratis melalui Google Apps Script dan Google Drive pangkalan Anda sendiri.',
    },
  ],
};
