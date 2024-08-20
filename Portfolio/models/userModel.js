const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
    lowercase: true,
    validate: [validator.isEmail, "please write a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: true,
    select: false,
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
    select: false,
  },
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    //required: [true, "Please provide a description"],
  },
  photo: {
    type: String,
    // required: [true, "Please provide an photo"],
  },
  skills: {
    type: [String],
  },

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  projects: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Project",
    },
  ],
  experiences: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Experience",
    },
  ],
});

// Document Middleware: runs before .save() and .create()
userSchema.pre("save", async function (next) {
  // only run this function if password was actually modified
  if (!this.isModified("password")) return next();
  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // delete passwordConfirm field from the database
  this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
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
