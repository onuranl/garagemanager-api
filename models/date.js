const mongoose = require("mongoose");

const DateSchema = new mongoose.Schema(
  {
    customerID: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    vehicleID: {
      type: mongoose.Types.ObjectId,
      ref: "vehicle",
      required: true,
    },
    jobTypeID: {
      type: mongoose.Types.ObjectId,
      ref: "jobType",
      required: true,
    },
    companyID: {
      type: mongoose.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    date: { type: String, required: true },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("date", DateSchema);
