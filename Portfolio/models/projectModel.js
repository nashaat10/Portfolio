const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },

  skills: {
    type: [String],
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
