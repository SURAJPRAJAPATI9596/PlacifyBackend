const { default: mongoose } = require("mongoose");

const problemProgressSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.objectId,
    ref: User,
  },

  problemId: {
    type: objectedId,
  },
  status: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: false,
  },
  attempts: {
    type: Number,
    required: false,
  },

  runtime: {
    type: Number,
    required: false,
  },

  memory: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("ProblemProgress", problemProgressSchema);
