require("dotenv").config();
const express = require("express");
const app = express();

//set api
app.use(express.json());

app.get("/", (req, res) => {
  res.send("testando");
});

module.exports = app;
