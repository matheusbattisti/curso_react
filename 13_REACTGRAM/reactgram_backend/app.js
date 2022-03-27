const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
require("./routes/Router.js");

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
