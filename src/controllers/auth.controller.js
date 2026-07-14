const asyncHandler = require("./../utils/asyncHandler");

const autController = (req, res, next) => {
  console.log("req.body", req.body);
};

module.exports = autController;
