const express = require("express");
const router = express.Router();
const chatControler = require("../controllers/ai/chat.controller");
const atsController = require("../controllers/ats.controller");
const upload = require("./../middlewares/upload.middleware");

router.route("/").post(chatControler);
router.route("/ats").post(upload.single("resume"), atsController);

module.exports = router;
