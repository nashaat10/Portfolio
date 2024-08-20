const Project = require("../models/projectModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/userModel");

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.body);
  const user = await User.findById(req.user._id);
  user.projects.push(newProject._id);
  await user.save();

  if (!newProject) {
    return next(new AppError("Project not created", 400));
  }
  res.status(201).json({
    status: "success",
    data: {
      project: newProject,
    },
  });
});

exports.getProject = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();

  if (!projects) {
    return next(new AppError("No projects found", 404));
  }

  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }

  res.json({
    status: "success",
    data: null,
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});
