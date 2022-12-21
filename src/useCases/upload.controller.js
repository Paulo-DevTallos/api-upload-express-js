const UploadModel = require("../models/upload.model");

async function createUpload(req, res) {
	const imagePath = req.file?.filename;

	const imageUpload = await new UploadModel({
		imagePath,
	});

	imageUpload.save();
	res.json({ imageUpload });
}

module.exports = {
	createUpload,
};
