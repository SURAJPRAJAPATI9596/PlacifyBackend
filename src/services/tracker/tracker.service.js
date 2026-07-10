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
  const response = await Tracker.findByIdAndUpdate(id, {
    $set: {
      company: data.company,
      role: data.role,
      date: data.date,
      stage: data.stage,
      action: data.action,
    },
  });
  console.log(response);
};

module.exports = { getAllTracker, addTracker, deleteTracker, updateTracker };
