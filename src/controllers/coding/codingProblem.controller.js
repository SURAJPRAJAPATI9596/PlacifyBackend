const asyncHandler = require("./../../utils/asyncHandler");
const codingProblemService = require("./../../services/coding/codingProblem.service");
const codingProblemController = async (req, res, next) => {
  const { id } = req.params;

  const response = await codingProblemService(id);
  res.status(200).json({
    success: true,
    data: response,
  });
};
module.exports = asyncHandler(codingProblemController);
