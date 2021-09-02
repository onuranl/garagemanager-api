const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  // vergi d.
  phone: Number,
  manager: String,
  // document
  companyID: {
    type: mongoose.Types.ObjectId,
    ref: "companies",
    required: true,
  },
});

module.exports = mongoose.model("supplier", SupplierSchema);
