const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	//modelo para upload de arquivo
	imagePath: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const UploadModel = mongoose.model("uploads", schema);

module.exports = UploadModel;
