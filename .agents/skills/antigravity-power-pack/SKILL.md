---
name: antigravity-power-pack
description: Paket akselerasi Google Antigravity terintegrasi (Multi-Agent Scope Lock, Superpowers Pre-Execution Harness, Atomic Git Automation, dan Playwright E2E Testing Kit) yang diadaptasi dari repositori terbaik komunitas.
---

# Antigravity Power Pack Skill

Koleksi standar arsitektur dan kapabilitas eksekusi tingkat lanjut untuk Google Antigravity, menyatukan 4 pilar unggulan dari repositori pilihan komunitas:
1. **Multi-Agent Protocol & File Scope Lock** (adaptasi dari `oh-my-antigravity`)
2. **Superpowers Pre-Execution Harness** (adaptasi dari `gemini-superpowers-antigravity`)
3. **Atomic Git & Stack-Aware Automation** (adaptasi dari `antigravity-workflows`)
4. **Playwright Resilient E2E & POM Testing Standard** (adaptasi dari `antigravity-testing-kit`)

---

## 🏛️ Pilar 1: Multi-Agent Context Engineering & File Scope Lock

### 1. Pemisahan Giliran (Turn Isolation)
- **Design / Brainstorming Turn**: Tahap penelaahan arsitektur, pengecekan dependensi, dan perumusan rencana. Pada giliran ini, modifikasi file produksi dilarang keras.
- **Execution Turn**: Tahap pengkodean yang hanya dijalankan setelah persetujuan rencana (*approval / ACC*).

### 2. Delegasi Subagent Read-Only
- Untuk penelusuran codebase yang membutuhkan pembacaan banyak file atau pencarian regex besar yang berpotensi mengotori context window utama, delegasikan tugas ke subagent `research` (sandbox read-only).
- Simpan context percakapan utama tetap padat dan berfokus pada pengambilan keputusan tingkat tinggi.

### 3. File Scope Locking (Blast Radius Guard)
- Sebelum menulis atau mengedit file, definisikan batas file yang diizinkan untuk diubah:
  - `[NEW]`: Hanya file yang secara eksplisit baru dibuat.
  - `[MODIFY]`: Hanya file yang berada di dalam scope target.
  - `[LOCKED]`: Semua file inti sistem yang tidak boleh disentuh (misal: core tokens, invariants SSG, data dummy pengganti).
- Perubahan pada file di luar scope yang terkunci otomatis dicegah.

---

## ⚡ Pilar 2: Superpowers Pre-Execution Harness & TDD

### 1. Alur Kerja Terstruktur
Setiap tugas kompleks harus melalui siklus 4 tahap:
$$\text{Brainstorm} \longrightarrow \text{Plan} \longrightarrow \text{Execute} \longrightarrow \text{Review}$$

### 2. Test-Driven Verification (TDD Mindset)
- Sebelum menulis kode logika, rumuskan:
  - Apa kondisi masukan (*input state*)?
  - Apa keluaran yang diharapkan (*expected assertion*)?
  - Bagaimana cara memverifikasinya secara otomatis (build script, unit test, atau Playwright assertion)?
- Setiap perbaikan bug harus diawali dengan mereproduksi kegagalan terlebih dahulu sebelum menuliskan patch solusi.

---

## 🔄 Pilar 3: Atomic Git Automation & Stack Auto-Detect

### 1. Deteksi Stack Tanpa Asumsi
- Selalu periksa konfigurasi lokal (`astro.config.mjs`, `package.json`, `tsconfig.json`) sebelum mengeksekusi perintah shell.
- Pastikan perintah CLI sesuai dengan lingkungan operasi (Windows PowerShell vs POSIX).

### 2. Standar Conventional Commits Terisolasi
Setiap commit git harus bersifat *atomic* (satu fokus perubahan utuh):
- `feat(scope)`: Penambahan fitur baru yang terlihat oleh pengguna.
- `fix(scope)`: Perbaikan bug atau penanganan edge-case.
- `refactor(scope)`: Restrukturisasi kode tanpa mengubah fungsionalitas publik.
- `style(scope)`: Penyesuaian layout, CSS, atau token visual.
- `test(scope)`: Penambahan atau perbaikan script pengujian / E2E.
- `docs(scope)`: Pembaruan dokumentasi atau panduan kerja.

---

## 🎭 Pilar 4: Playwright Resilient E2E & POM Testing Standard

### 1. Pola Page Object Model (POM) untuk SaaS
Setiap pengujian UI aplikasi web (misal: form login, modal lightbox, dashboard tabel) harus memisahkan selector dari logika pengujian:
```typescript
// Blueprint Page Object
export class ProjectShowcasePage {
  constructor(private page: any) {}

  // Resilient Locators: Utamakan role, label aksesibel, atau test-id
  get mainHeroHeading() {
    return this.page.getByRole('heading', { level: 1 });
  }

  get ctaButton() {
    return this.page.getByRole('button', { name: /kirim pesan/i });
  }

  get lightboxModal() {
    return this.page.locator('[data-testid="lightbox-modal"]');
  }

  async openModal() {
    await this.ctaButton.click();
    await this.lightboxModal.waitFor({ state: 'visible' });
  }
}
```

### 2. Anti-Fragile Selector Rules
- **DILARANG**: Memakai chain XPath panjang atau selektor CSS turunan rentan (`div > div:nth-child(3) > span`).
- **DIWAJIBKAN**:
  1. `getByRole(role, { name })`
  2. `getByLabel(labelText)`
  3. `getByPlaceholder(placeholderText)`
  4. Atribut data eksplisit: `[data-testid="..."]`

### 3. Auto-Retry & Error Diagnostics
- Manfaatkan auto-waiting Playwright untuk mencegah *race condition* dan pengujian fluktuatif (*flaky tests*).
- Jika terjadi kegagalan elemen, ambil snapshot DOM dan network error log untuk diagnosa cepat tanpa menebak-nebak.
