const mongoose = require("mongoose");
//atlas db config
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log("DB connected");
  } catch (err) {
    console.log("DB error", err);
  }
};

module.exports = connectDB;
