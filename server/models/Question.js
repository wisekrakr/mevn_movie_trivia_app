const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create StudyItem Schema
module.exports = Question = mongoose.model(
  "question",
  new Schema({
    category: {
      type: String
    },
    difficulty: {
      type: String,
      default: "EASY"
    },
    answers: {
      correct_answer: {
        type: Schema.Types.ObjectId,
        ref: "answers"
      },
      incorrect_answer: [
        {
          type: Schema.Types.ObjectId,
          ref: "answers"
        }
      ]
    }
  })
);
