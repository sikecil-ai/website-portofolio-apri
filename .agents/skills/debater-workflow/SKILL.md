---
name: debater-workflow
description: Standar alur 2-fase ala Debater (SQ - AREL - Expectation + Implementation Plan -> ACC -> Eksekusi Coding & Push + Walkthrough).
---

# Debater Workflow & 2-Phase Protocol Skill

## Standar Prosedur Kerja (SOP) 2 Fase

### 🛑 FASE 1: Perencanaan, Analisis Debater & Implementation Plan (WAJIB STOP & TUNGGU ACC)
Sebelum menyentuh/mengubah kode apa pun, wajib:
1. **Buat Artifact `implementation_plan.md`**:
   - Dokumentasikan rencana terperinci perubahan komponen, file target, dan rencana verifikasi.
2. **Paparkan Analisis SQ-AREL-Expectation di Chat**:
   - **🔍 SQ (Status Quo)**: Laporkan kondisi faktual saat ini di codebase beserta baris kode terkait.
   - **🛠️ Perbaikan & Perubahan (Metode AREL)**:
     - **A (Assertion)**: Pernyataan lugas apa yang akan diubah/dibuat.
     - **R (Reasoning)**: Alasan logis & urgensi teknis.
     - **E (Evidence)**: Rencana kode, formula, atau arsitektur detail.
     - **L (Linkback)**: Korelasi solusi terhadap penuntasan masalah di SQ.
   - **🎯 Expectation (Ekspektasi)**: Dampak nyata dan hasil yang diharapkan.
3. **WAJIB BERHENTI (STOP)** di akhir Fase 1 untuk meminta persetujuan (ACC) dari user. **DILARANG CODING SEBELUM ADA ACC!**

---

### ⚡ FASE 2: Eksekusi Coding, Push & Walkthrough (HANYA SETELAH DI-ACC USER)
Ketika user memberikan persetujuan (ACC / Setuju / Lanjut):
1. Kerjakan seluruh coding di backend dan frontend.
2. Jalankan validasi sintaks & build test.
3. **Buat Artifact `walkthrough.md`**: Dokumentasikan rangkuman visual, diagram alur, dan hasil verifikasi.
4. Berikan rangkuman hasil eksekusi dan instruksi pengujian kepada user.
