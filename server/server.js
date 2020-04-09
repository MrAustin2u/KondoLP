const express = require("express");
const app = express();
const path = require("path");
const PORT = 3434;

app.use("/assets", express.static(path.join(__dirname, "../assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.use("/kondo", (req, res) => {
  res.redirect("https://github.com/oslabs-beta/kondo");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${ PORT }`);
});
