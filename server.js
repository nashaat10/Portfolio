const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Portfolio/config/database");
const app = require("./app");

dotenv.config({ path: "config.env" });

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
