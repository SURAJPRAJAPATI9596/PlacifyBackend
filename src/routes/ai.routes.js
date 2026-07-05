const express = require("express");
const router = express.Router();
const chatControler = require("../controllers/ai/chat.controller");

router.route("/").post(chatControler);

module.exports = router;
