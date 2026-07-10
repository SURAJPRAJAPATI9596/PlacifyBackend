const { default: mongoose } = require("mongoose");

const codingProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  topic: {
    type: [String],
    required: true,
  },
  companies: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  constraints: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    required: true,
  },
  hints: {
    type: String,
    required: false,
  },
  testCases: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("CodingProblem", codingProblemSchema);
