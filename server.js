const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("assets")); 

// Definisikan route untuk setiap halaman
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

app.get("/myproject", (req, res) => {
  res.render("Myproject");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
