const Experience = require("../models/experienceModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.create(req.body);
  if (!experience) {
    return next(new AppError("Experience not created", 400));
  }
  res.json({
    status: "success",
    data: {
      experience,
    },
  });
});

exports.getExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.findById(req.params.id);
  if (!experience) {
    return next(new AppError("No experience found with that ID", 404));
  }
  res.json({
    status: "success",
    data: {
      experience,
    },
  });
});

exports.getAllExperiences = catchAsync(async (req, res, next) => {
  const experiences = await Experience.find();
  if (!experiences) {
    return next(new AppError("No experiences found", 404));
  }
  res.json({
    status: "success",
    results: experiences.length,
    data: {
      experiences,
    },
  });
});

exports.deleteExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.findByIdAndDelete(req.params.id);
  if (!experience) {
    return next(new AppError("No experience found with that ID", 404));
  }
  res.json({
    status: "success",
    data: null,
  });
});

exports.updateExperience = catchAsync(async (req, res, next) => {
  const experience = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!experience) {
    return next(new AppError("No experience found with that ID", 404));
  }
  res.json({
    status: "success",
    data: {
      experience,
    },
  });
});
