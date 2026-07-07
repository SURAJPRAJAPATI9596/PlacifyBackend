const resumeService = require("../services/ai/resume.service");
const asyncHandler = require("./../utils/asyncHandler");
const resumeControler = async (req, res, next) => {
  res.status(200).json({
    resume: await resumeService(req.body),
  });
};

module.exports = asyncHandler(resumeControler);
