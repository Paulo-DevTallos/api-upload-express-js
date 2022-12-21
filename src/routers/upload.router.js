const router = require("./index");
const { createUpload } = require("../useCases/upload.controller");
const multer = require("multer");
const path = require("path");

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, "../..", "uploads"));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

router.post("/upload", upload.single("image"), createUpload);

module.exports = router;
