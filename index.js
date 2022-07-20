const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {  
  console.log(`${new Date().toISOString()} - ${req.ip} - ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});


app.use((req, res) => {
  res.status(404).render("404", {cssFile: "404.css"});
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});