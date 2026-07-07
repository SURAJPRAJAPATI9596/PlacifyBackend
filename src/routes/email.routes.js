const express = require("express");
const router = express.Router();
const emailControler = require("./../controllers/email/email.controller");

router.route("/").post(emailControler);

module.exports = router;
