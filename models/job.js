const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
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
    photo: String,
    date: String,
    description: { type: String, required: true },
    jobTypeID: {
      type: mongoose.Types.ObjectId,
      ref: "jobType",
      required: true,
    },
    companyID: {
      type: mongoose.Types.ObjectId,
      ref: "companyID",
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("job", JobSchema);
