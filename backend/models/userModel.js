const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password!"],
  },
  days: {
    type: Number,
  },
  investments: {
    type: Array,
  },
  recentActivity: {
    type: Array,
  },
  info: {
    type: Array,
  },
  chartData: {
    type: Array,
  },
});

module.exports = mongoose.model("User", userSchema);
