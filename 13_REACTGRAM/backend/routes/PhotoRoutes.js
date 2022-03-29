const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("test photo");
});

module.exports = router;
