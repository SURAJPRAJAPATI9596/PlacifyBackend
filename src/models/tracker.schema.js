const { default: mongoose } = require("mongoose");

const trakerSchema = new mongoose.Schema({
  // userId: {
  //   type: Schema.Types.objectId,
  //   ref: User,
  //   required: false,
  // },
  company: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  stage: {
    type: String,
    require: true,
  },
  action: {
    type: String,
    require: true,
  },
});
const Tracker = mongoose.model("Tracker", trakerSchema);

module.exports = Tracker;
