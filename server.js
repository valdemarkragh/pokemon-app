const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/pokemon-app"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(dirname + "/dist//index.html"));
});

app.listen(process.env.PORT || 8000);
