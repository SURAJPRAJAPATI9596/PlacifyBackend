const asyncHandler = require("../../utils/asyncHandler");
const atsService = require("../../services/ai/ats.service");
const atsControler = async (req, res, next) => {
  const path = req.file.path;
  const jobDes = req.body.jobDes;
  res.status(200).json({
    atsResult: await atsService(path, jobDes),
  });
};

module.exports = asyncHandler(atsControler);
