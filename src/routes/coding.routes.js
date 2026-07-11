const express = require("express");
const router = express.Router();
const codingProblemsController = require("./../controllers/coding/codingProblems.controller");
const codingProblemController = require("./../controllers/coding/codingProblem.controller");
const codingSolutionController = require("../controllers/coding/codingRun.controller");
const codingSubmitController = require("./../controllers/coding/codingSubmit.controller");
router.route("/").get(codingProblemsController);
router.route("/problems/:id").get(codingProblemController);
router.route("/problems/:id").post(codingSolutionController);
router.route("/problems/submission/:id").post(codingSubmitController);

module.exports = router;
