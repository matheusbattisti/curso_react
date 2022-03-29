const express = require("express");
const router = express.Router();

const { register } = require("../controllers/UserController");

const validate = require("../middlewares/handleValidations");
const userValidation = require("../middlewares/userValidations");

router.post("/", userValidation(), validate, register);

module.exports = router;
