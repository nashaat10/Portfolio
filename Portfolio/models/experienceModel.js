const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minlength: 10,
    maxlength: 50,
  },
  company: {
    type: String,
    required: [true, "Please provide a company"],
  },
  location: {
    type: String,
    required: [true, "Please provide a location"],
  },
  from: {
    type: Date,
    required: [true, "Please provide a start date"],
  },
  to: {
    type: Date,
    required: [true, "Please provide an end date"],
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
