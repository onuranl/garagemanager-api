const mongoose = require("mongoose");

const JobTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  note: String,
});

module.exports = mongoose.model("jobType", JobTypeSchema);
