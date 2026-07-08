const Tracker = require("./../../models/tracker.schema");

const getAllTracker = async () => {
  try {
    const data = await Tracker.find();
    return data;
  } catch (err) {
    console.log("Error get Tracker", err);
  }
};

const addTracker = async (data) => {
  try {
    const newTracker = new Tracker(data);
    const savedTracker = await newTracker.save();
    console.log(savedTracker);
  } catch (err) {
    console.log("Error add Tracker", err);
  }
};
const deleteTracker = async (id) => {
  try {
    const deletedTracker = await Tracker.findByIdAndDelete(id);
    console.log(deletedTracker);
  } catch (err) {
    console.log("Error delete Tracker", err);
  }
};
const updateTracker = async (id, data) => {
  console.log(data);
};

module.exports = { getAllTracker, addTracker, deleteTracker, updateTracker };
