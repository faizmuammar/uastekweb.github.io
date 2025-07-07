const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM catatan ORDER BY tanggal_buat DESC", (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

router.post("/", (req, res) => {
  const { judul, isi } = req.body;
  if (!judul || !isi) {
    return res.status(400).json({ message: "Judul dan isi tidak boleh kosong." });
  }
  db.query("INSERT INTO catatan (judul, isi) VALUES (?, ?)", [judul, isi], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, id: result.insertId });
  });
});

router.delete("/:id", (req, res) => {
  db.query("DELETE FROM catatan WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true });
  });
});

module.exports = router;
