const express = require("express");
const router = express.Router();
const codingProblemsController = require("./../controllers/coding/codingProblems.controller");
const codingProblemController = require("./../controllers/coding/codingProblem.controller");
const codingSolutionController = require("../controllers/coding/codingRun.controller");
router.route("/").get(codingProblemsController);
router.route("/problems/:id").get(codingProblemController);
router.route("/problems/:id").post(codingSolutionController);

module.exports = router;
