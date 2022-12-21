const { createUpload } = require("../useCases/upload.controller");
const router = require("./index");

router.get("/", createUpload);

module.exports = router;
