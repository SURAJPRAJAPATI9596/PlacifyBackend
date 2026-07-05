const aiReply = require("./../../services/ai/chat.service");
const asyncHandler = require("./../../utils/asyncHandler");
const chatControler = async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: await aiReply(req.body.message),
  });
};

module.exports = asyncHandler(chatControler);
