const express = require("express");
const app = express();
const port = 3089;

app.set("view engine", "hbs");

app.use(express.static("assets"));

// HOME
app.get("/", (req, res) => {
  res.render("index")
});

// BLOG
app.get("/", (req, res) => {
  res.render("blog")
});

// CONTACT ME
app.get("/", (req, res) => {
  res.render("contact")
});

// TESTIMONIALS
app.get("/", (req, res) => {
  res.render("testimonials")
});

// MYPROJECT
app.get("/", (req, res) => {
  res.render("myproject")
});

// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Halo! Ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog", (req, res) => {
  const { title,author, year } = req.query;
  res.send('Ini halaman blog ${title} dengan author ${author} dan tahun ${year}');
});

app.listen(port, () => {
  console.log(`My Personal Web app listening on port ${port}`);
});