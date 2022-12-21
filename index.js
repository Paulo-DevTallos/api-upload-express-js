const app = require("./src/app");

const port = 3004;

app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);
