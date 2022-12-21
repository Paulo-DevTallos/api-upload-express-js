const UploadModel = require("../models/upload.model");

async function createUpload(req, res) {
	res.send("essa descrição vem do controller de upload");
}

module.exports = {
	createUpload,
};
