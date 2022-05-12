const express = require('express');
const app = express();
const port = 3000;

// Uses
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

// // Set cache max-age
app.use((req, res, next) => {
  res.set('Cache-control', 'public, max-age=86400')
  next()
})

// Routes
const projectRoute = require('./routes/projects');
app.use('/', projectRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
