const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/database");

dotenv.config({ path: "config.env" });

connectDB();

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
