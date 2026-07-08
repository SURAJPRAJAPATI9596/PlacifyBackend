const express = require("express");
const router = express.Router();
const chatControler = require("../controllers/chat/chat.controller");
const atsController = require("../controllers/resume/ats.controller");
const upload = require("./../middlewares/upload.middleware");
const resumeControler = require("./../controllers/resume/resume.controller");

router.route("/").post(chatControler);
router.route("/ats").post(upload.single("resume"), atsController);
router.route("/resume").post(resumeControler);
module.exports = router;
