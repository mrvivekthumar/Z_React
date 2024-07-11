const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: String,
    marks: {
      type: Number,
      default: 0,
    },
  },
  {
    timetaps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
