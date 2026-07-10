const asyncHandler = require("../../utils/asyncHandler");
const codingRunService = require("./../../services/coding/codingRun.service");
const codingRunController = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    success: true,
    solution: await codingRunService(data),
  });
};

module.exports = asyncHandler(codingRunController);
