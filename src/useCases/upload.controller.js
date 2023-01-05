const UploadModel = require("../models/upload.model");
const { HttpStatusCode, SuccessStatus } = require("../../constants/config");

async function getImages(req, res) {
	const uploadList = await UploadModel.find();

	res.json({ message: "success", uploadList }).status(200);
}

async function createUpload(req, res) {
	const imagePath = req.file?.filename;

	const imageUpload = new UploadModel({
		imagePath,
	});

	imageUpload.save();
	res.status(HttpStatusCode.CREATED).json({
		imageUpload,
		response_message: SuccessStatus.CREATED_RESOURCE.message,
	});
}

module.exports = {
	getImages,
	createUpload,
};
