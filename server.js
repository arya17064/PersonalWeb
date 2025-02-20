const express = require('express');
const app = express()
const port = 3089

app.get('/', (req, res) => {
  res.send("Hello express! This is homepage")
});
// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id
  res.send('Halo! ini halaman tentang ${id}');
});

app.get("/blog", (req, res) => {
    res.send("blog page!")
});

app.listen(port, () => {
  console.log(`My Personal Web app listening on port ${port}`)
})