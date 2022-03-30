const express = require("express");
const router = express.Router();

// Controller
const { insertPhoto, deletePhoto } = require("../controllers/PhotoController");

// Middlewares
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidations");
const { photoInsertValidation } = require("../middlewares/photoValidations");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);
router.delete("/:id", authGuard, deletePhoto);

module.exports = router;
