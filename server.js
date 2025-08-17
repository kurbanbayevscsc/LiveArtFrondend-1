// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware statik fayllar uchun (frontend fayllar)
app.use(express.static(path.join(__dirname)));

// Asosiy route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(✅ Server ${PORT} portda ishlayapti);
});
