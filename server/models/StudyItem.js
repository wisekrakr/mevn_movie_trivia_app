const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create StudyItem Schema
module.exports = StudyItem = mongoose.model(
  "item",
  new Schema({
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })
);
