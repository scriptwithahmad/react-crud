const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema)