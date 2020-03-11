const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create StudyItem Schema
module.exports = Answer = mongoose.model(
  "asnwer",
  new Schema({
    difficulty: {
      type: String,
      enum: ["EASY", "MEDIUM", "HARD"],
      default: "EASY"
    },
    answer: {
      type: String
    }
  })
);
