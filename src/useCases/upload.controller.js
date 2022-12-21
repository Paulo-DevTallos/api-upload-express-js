const UploadModel = require("../models/upload.model");
const multer = require("multer");
const path = require("path");

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, "..", "uploads"));
		},
	}),
});

async function createUpload(req, res) {
	res.send("essa descrição vem do controller de upload");
}

module.exports = {
	createUpload,
};
