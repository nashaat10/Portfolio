const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/userRoutes");
const projectRouter = require("./routes/projectRoutes");
const experienceRouter = require("./routes/experienceRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());
app.use(express.static("./public/img/users"));

// routes

app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/experiences", experienceRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
