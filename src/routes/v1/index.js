const express = require("express");
const router = express.Router();
const test = require("./test");

router.get("/test", test.test);

module.exports = router;
