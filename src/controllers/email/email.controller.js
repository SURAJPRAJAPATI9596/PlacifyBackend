const sendEmail = require("../../services/emails/userEmail.service");
const asyncHandler = require("../../utils/asyncHandler");
const emailControler = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "your email we received",
  });
  const data = await sendEmail();
  console.log(data);
};

module.exports = asyncHandler(emailControler);
