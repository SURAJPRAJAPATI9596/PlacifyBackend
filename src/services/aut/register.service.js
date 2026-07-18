const User = require("./../../models/user.schema");
const bcrypt = require("bcrypt");
const registerService = async (fullName, userName, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    fullname: fullName,
    email: email,
    password: hashedPassword,
    username: userName,
  });
  const response = await newUser.save();
  console.log(response);
};
module.exports = registerService;
