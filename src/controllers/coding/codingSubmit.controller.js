const asyncHandler = require("./../../utils/asyncHandler");
const codingSubmitService = require("./../../services/coding/codingSubmit.service");
const codingSubmitController = async () => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    success: true,
    solution: await codingSubmitService(data),
  });
};

module.exports = codingSubmitController;
