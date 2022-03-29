require("dotenv").config();

const express = require("express");
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connection
require("./config/db.js");

// test route
app.get("/", (req, res) => {
  res.send("API Working!");
});

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
