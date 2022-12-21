const UploadModel = require("../models/upload.model");

function createUpload(req, res) {
	const imagePath = req.file?.filename;

	const imageUpload = new UploadModel({
		imagePath,
	});

	imageUpload.save();
	res.json({ imageUpload });
}

module.exports = {
	createUpload,
};
