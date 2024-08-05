const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./Portfolio/routes/userRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`running in ${process.env.NODE_ENV} mode`);
}

app.use(express.json());

// routes

app.use("/api/v1/users", userRouter);

module.exports = app;
