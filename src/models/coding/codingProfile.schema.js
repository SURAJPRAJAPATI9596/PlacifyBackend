const { default: mongoose } = require("mongoose");

const codingProfileSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.objectId,
    ref: User,
  },

  preferredLanguage: {
    type: String,
    required: false,
  },

  totlaSolved: {
    type: Number,
    required: true,
  },
  eassySolved: {
    type: Number,
    required: true,
  },
  mediumSolved: {
    type: Number,
    required: true,
  },
  hardSolved: {
    type: Number,
    required: true,
  },
  totalSubmissions: {
    type: Number,
    required: false,
  },
  acceptedSubmissions: {
    type: Number,
    required: false,
  },
  currentStreak: {
    type: Number,
    required: false,
  },
  longestStreak: {
    type: Number,
    required: false,
  },

  lastSolvedDate: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("CodingProfile", codingProfileSchema);
