const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, unique: true },
    email: { type: String, unique: true, required: true },
    address: { type: String, required: true },
    province: { type: String, required: true },
    gender: String,
    garage: [GarageSchema],
    note: String,
    companyID: {
      type: mongoose.Types.ObjectId,
      ref: "companies",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", CustomerSchema);
