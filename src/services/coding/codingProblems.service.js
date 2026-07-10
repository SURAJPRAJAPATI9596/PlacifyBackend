const mongoose = require("mongoose");
const CodingProblems = require("./../../models/coding/codingProblem.schema");

const codingProblemsService = async () => {
  const data = await CodingProblems.find();
  return data;
};

module.exports = codingProblemsService;
