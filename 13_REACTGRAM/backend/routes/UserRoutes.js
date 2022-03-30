const express = require("express");
const router = express.Router();

const {
  register,
  getCurrentUser,
  login,
} = require("../controllers/UserController");

const validate = require("../middlewares/handleValidations");
const {
  userValidation,
  loginValidation,
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

router.post("/", userValidation(), validate, register);
router.get("/profile", authGuard, getCurrentUser);
router.post("/login", loginValidation(), validate, login);

module.exports = router;
