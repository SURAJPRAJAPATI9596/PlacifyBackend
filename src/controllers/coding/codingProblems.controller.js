const asyncHandler = require("./../../utils/asyncHandler");
const codingProblemsService = require("./../../services/coding/codingProblems.service");
const codingProblemsController = async (req, res, next) => {
  const response = await codingProblemsService();
  res.status(200).json({
    success: true,
    data: response,
  });
};
module.exports = asyncHandler(codingProblemsController);
