const router = require("./index");
const { getImages, createUpload } = require("../useCases/upload.controller");
const upload = require("../middlewares/upload_middleware");

router.get("/upload", getImages);
router.post("/upload", upload.single("image"), createUpload);

module.exports = router;
