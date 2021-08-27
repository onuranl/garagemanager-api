const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    description: String,
    companyID: {
      type: mongoose.Types.ObjectId,
      ref: "companies",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("store", StoreSchema);
