const chatService = require("../../services/ai/chat.service");
const asyncHandler = require("../../utils/asyncHandler");
const chatControler = async (req, res) => {
  res.status(200).json({
    message: await chatService(req.body.message),
  });
};

module.exports = asyncHandler(chatControler);
