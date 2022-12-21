require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();
//router imports
const uploadRouter = require("./routers/upload.router");

//db connection
db.dbConnect();
//set api
app.use(express.json());
//routers
app.use("/api", uploadRouter);

module.exports = app;
