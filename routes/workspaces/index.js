const express = require("express");

const router = express.Router();

// routes
router.use("/", require("./users"));

module.exports = router;
