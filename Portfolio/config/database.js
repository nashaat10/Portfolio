const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(`Error connecting to database: ${err}`));
};

module.exports = connectDB;
