const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ ironman: "first print" });
});

app.listen(5000);
