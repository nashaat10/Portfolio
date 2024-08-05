const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minlength: 10,
    maxlength: 50,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
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
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  experiences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Experience",
    },
  ],
});

// Populate user with projects and experiences
// userSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "projects",
//   }).populate({
//     path: "experiences",
//   }),
//     next();
// });

const User = mongoose.model("User", userSchema);
module.exports = User;
