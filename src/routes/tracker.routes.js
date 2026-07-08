const express = require("express");
const router = express.Router();
const {
  addTrackerController,
  getAllTrackerController,
  deleteTrackerController,
  updateTrackerController,
} = require("./../controllers/tracker/tracker.controller");

router.route("/").post(addTrackerController);
router.route("/").get(getAllTrackerController);
router.route("/:id").delete(deleteTrackerController);
router.route("/:id").put(updateTrackerController);
module.exports = router;
