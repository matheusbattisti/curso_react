const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/photo", require("./PhotoRoutes"));

module.exports = router;
