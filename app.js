const express = require("express");
const app = express();
const port = 8080;

// servir contenido estático
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
  res.send("Hello World from its route");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`);
});
