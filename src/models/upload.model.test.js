const UploadModel = require("./upload.model");

describe("Testes de model do banco de dados", () => {
	const uploadObject = { imagePath: "1671630876771-iphone-13-pro.jpg" };

	it("Deve conter formato para upload", () => {
		const uploadModel = new UploadModel(uploadObject);

		console.log(uploadModel);
		expect.objectContaining(uploadModel);
	});
});
