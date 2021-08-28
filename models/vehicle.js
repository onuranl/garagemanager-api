const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    km: { type: Number, required: true },
    engineNo: { type: String, required: true },
    chassisNo: { type: String, required: true },
    color: { type: String, required: true },
    gearType: { type: String, required: true },
    fuelType: { type: String, required: true },
    caseType: { type: String, required: true },
    hp: { type: Number, required: true },
    customerID: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("vehicle", VehicleSchema);
