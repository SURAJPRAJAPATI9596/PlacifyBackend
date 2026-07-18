const mongoose = require("mongoose");
//atlas db config by suraj
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/placify");
    console.log("DB connected");
  } catch (err) {
    console.log("DB error", err);
  }
};

module.exports = connectDB;
