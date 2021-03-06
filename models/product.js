const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    stockNo: String,
    barcodeNo: String,
    photo: String,
    kdv: Number,
    price: { type: String, required: true },
    kdv_is_included: { type: Boolean, required: true },
    discountedPrice: String,
    quantity: { type: Number, required: true },
    storeID: {
      type: mongoose.Types.ObjectId,
      ref: "store",
      required: true,
    },
    categoryID: {
      type: mongoose.Types.ObjectId,
      ref: "productCategory",
      required: true,
    },
    companyID: {
      type: mongoose.Types.ObjectId,
      ref: "companies",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
