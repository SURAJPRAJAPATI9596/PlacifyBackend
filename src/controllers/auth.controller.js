const asyncHandler = require("./../utils/asyncHandler");
const registerService = require("./../services/aut/register.service");
const registerController = async (req, res, next) => {
  const fullName = req.body.fullName;
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;
  await registerService(fullName, userName, email, password);
  res.status(200).json({ success: true, status: 200 });
};
const loginController = async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
const statusController = (req, res) => {
  if (req.user) {
    return res.json({
      isLoggedIn: true,
      user: req.user,
    });
  }
  res.json({
    isLoggedIn: false,
  });
};

module.exports = {
  registerController: asyncHandler(registerController),
  loginController: asyncHandler(loginController),
  statusController: statusController,
};
