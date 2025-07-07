-- Hapus database lama (jika ada)
DROP DATABASE IF EXISTS catatan_harian;

-- Buat database baru
CREATE DATABASE catatan_harian;
USE catatan_harian;

-- Buat tabel catatan
CREATE TABLE catatan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul TEXT,
  isi TEXT,
  tanggal_buat DATETIME DEFAULT CURRENT_TIMESTAMP
);