const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  customerID: {
    type: mongoose.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  vehicleID: {
    type: mongoose.Types.ObjectId,
    ref: "customer.garage",
    required: true,
  },
  photo: String,
  date: String,
  description: { type: String, required: true },
  jobTypeID: {
    type: mongoose.Types.ObjectId,
    ref: "jobType",
    required: true,
  },
});

module.exports = mongoose.model("job", JobSchema);
