const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: String,
  productID: {
    type: mongoose.Types.ObjectId,
    ref: "product",
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  kdv: Number,
  total: { type: Number, required: true },
});

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
    products: [ProductsSchema],
    photo: String,
    date: String,
    totalPrice: { type: Number, default: 0 },
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
