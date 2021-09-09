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

const OfferSchema = new mongoose.Schema(
  {
    customerID: {
      type: mongoose.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    invoiceNo: { type: String, required: true },
    date: { type: String, required: true },
    address: { type: String, required: true },
    products: [ProductsSchema],
    status: { type: Boolean, default: false },
    companyID: {
      type: mongoose.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    totalPrice: { type: Number, default: 0 },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("offer", OfferSchema);
