const mongoose = require("mongoose");
const CodingProblems = require("./../../models/coding/codingProblem.schema");

const codingProblemService = async (id) => {
  const data = await CodingProblems.findById(id);
  return data;
};

module.exports = codingProblemService;
