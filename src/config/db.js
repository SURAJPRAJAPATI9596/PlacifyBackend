const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/placify");
    console.log("DB connected");
  } catch (err) {
    console.log("DB error", err);
  }
};

module.exports = connectDB;
