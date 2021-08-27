const mongoose = require("mongoose");

const ProductCategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  companyID: {
    type: mongoose.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

module.exports = mongoose.model("productCategory", ProductCategorySchema);
