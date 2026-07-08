const asyncHandler = require("./../../utils/asyncHandler");
const Tracker = require("./../../models/tracker.schema");
const {
  getAllTracker,
  addTracker,
  deleteTracker,
  updateTracker,
} = require("./../../services/tracker/tracker.service");

const addTrackerController = async (req, res, next) => {
  addTracker(req.body);
  res
    .status(200)
    .json({ success: true, Message: "Your response is submited!" });
};
getAllTrackerController = async (req, res, next) => {
  const data = await getAllTracker();
  res.status(200).json({ data });
};
deleteTrackerController = async (req, res, next) => {
  const { id } = req.params;
  await deleteTracker(id);
  res
    .status(200)
    .json({ success: true, Message: "Your response is submited!" });
};
updateTrackerController = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  updateTracker(id, data);
};
module.exports = {
  addTrackerController,
  getAllTrackerController,
  deleteTrackerController,
  updateTrackerController,
};
