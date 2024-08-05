const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minlength: 10,
    maxlength: 50,
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  image: {
    type: String,
  },
  skills: {
    type: [String],
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
