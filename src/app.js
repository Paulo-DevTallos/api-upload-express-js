require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();

//db connection
db.dbConnect();
//set api
app.use(express.json());

//

module.exports = app;
