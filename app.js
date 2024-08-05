const express = require("express");
const morgan = require("morgan");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`running in ${process.env.NODE_ENV} mode`);
}

app.use(express.json());

module.exports = app;
