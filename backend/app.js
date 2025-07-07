const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const catatanRoutes = require("./routes/catatan"); // Baris 3 yang menyebabkan error

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/catatan", catatanRoutes);

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
