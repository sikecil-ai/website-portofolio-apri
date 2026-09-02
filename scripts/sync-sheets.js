import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_GAS_URL = 'https://script.google.com/macros/s/AKfycbyL5LR8pVVrbmXp3y52urjij10GcsQ8EtUqpkLc7UV8JUen8LI5jYMCcY5h1WnombM/exec';

function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    https.get(targetUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchUrl(res.headers.location));
        return;
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function syncData() {
  console.log('🔄 Menghubungi Google Spreadsheet via Google Apps Script Web App...');
  try {
    const res = await fetchUrl(DEFAULT_GAS_URL);
    if (res.status !== 200) {
      console.error(`❌ Gagal terhubung: Status HTTP ${res.status}`);
      return;
    }

    const json = JSON.parse(res.data);
    if (json.status !== 'success') {
      console.error('❌ Respon dari Google Sheets tidak sukses:', json);
      return;
    }

    console.log(`✅ Berhasil mengambil data dari Google Sheets! (Timestamp: ${json.timestamp})`);
    
    if (json.projects && json.projects.length > 0) {
      console.log(`📦 Ditemukan ${json.projects.length} sistem dari Spreadsheet.`);
      json.projects.forEach((p, idx) => {
        console.log(`   ${idx + 1}. [${p.id}] ${p.title}`);
      });
    }

    console.log('✨ Sinkronisasi database Google Sheets selesai 100%!');
  } catch (err) {
    console.error('❌ Terjadi kesalahan saat sinkronisasi:', err.message);
  }
}

syncData();
