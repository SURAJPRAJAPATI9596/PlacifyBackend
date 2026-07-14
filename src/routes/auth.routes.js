const express = require("express");
const router = express().router;
const autController = require("./../controllers/auth.controller");
router.route("/").get(autController);
module.exports = router;
