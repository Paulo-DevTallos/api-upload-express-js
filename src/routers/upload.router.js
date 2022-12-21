const { createUpload } = require("../useCases/upload.controller");
const router = require("./index");

router.get("/upload", createUpload);

module.exports = router;
