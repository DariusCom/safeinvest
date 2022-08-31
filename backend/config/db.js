const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Create the connection with the mongoose database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    // In case of error, print the error
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
