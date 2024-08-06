const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./Portfolio/routes/userRoutes");
const projectRouter = require("./Portfolio/routes/projectRoutes");
const experienceRouter = require("./Portfolio/routes/experienceRoutes");
const AppError = require("./Portfolio/utils/appError");
const globalErrorHandler = require("./Portfolio/controllers/errorController");

app.use(morgan("dev"));

app.use(express.json());

// routes

app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/experiences", experienceRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
