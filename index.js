const express = require("express");

const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("I can node now");
});

app.listen(port, () => {
  console.log("listening", port);
});
