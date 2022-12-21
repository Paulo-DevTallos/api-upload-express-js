const UploadModel = require("../models/upload.model");

async function getImages(req, res) {
	const uploadList = await UploadModel.find();

	res.json({ message: "success", uploadList }).status(200);
}

function createUpload(req, res) {
	const imagePath = req.file?.filename;

	const imageUpload = new UploadModel({
		imagePath,
	});

	imageUpload.save();
	res.json({ imageUpload });
}

module.exports = {
	getImages,
	createUpload,
};
