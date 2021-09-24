const express = require("express");
const hbs = require("hbs");
require('dotenv').config()

const app = express();
const port = process.env.PORT;

//Handelbars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Sebastian Pérez",
    titulo: "Curso de Node",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Sebastian Pérez",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Sebastian Pérez",
    titulo: "Curso de Node",
  });
});
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`);
});
