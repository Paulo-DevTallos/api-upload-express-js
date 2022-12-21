const router = require("./index");

router.get("/", (req, res) => {
	res.send("testando rota get");
});

module.exports = router;
