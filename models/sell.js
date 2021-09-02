const mongoose = require("mongoose");

const product_model = require("../models/product");

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

const SellSchema = new mongoose.Schema(
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
    totalPrice: { type: Number, default: 31 },
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

SellSchema.pre("save", async function () {
  const result = this;
  if (result) {
    try {
      for (let i = 0; i < result.products.length; i++) {
        console.log(result.products[i].productID);

        let product = await product_model.findOne({
          _id: result.products[i].productID,
        });

        const lastQuantity = product.quantity - result.products[i].quantity;

        await product_model.findOneAndUpdate(
          {
            _id: result.products[i].productID,
          },
          {
            quantity: lastQuantity,
          }
        );
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model("sell", SellSchema);
