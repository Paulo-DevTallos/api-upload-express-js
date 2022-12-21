const mongoose = require("mongoose");

function dbConnect() {
  mongoose.connect(process.env.DB_STRING_CONNECTION);

  const db = mongoose.connection;

  db.once("open", () => console.log("db connected"));
  db.on("error", console.error.bind(console, "connection error: "));
}

module.exports = {
  dbConnect,
};
