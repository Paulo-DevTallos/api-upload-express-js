require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const db = require("./db");
//router imports
const uploadRouter = require("./routers/upload.router");

const app = express();

//db connection
db.dbConnect();

//set api
app.use(
	"/uploads",
	express.static(path.resolve(__dirname, "../..", "uploads"))
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");

	next();
});
//routers
app.use("/api", uploadRouter);

module.exports = app;
