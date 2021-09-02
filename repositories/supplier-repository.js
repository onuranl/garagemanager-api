const supplier_model = require("../models/supplier");

async function get(id) {
  return await supplier_model.find({ companyID: id });
}

async function create(supplier) {
  return await supplier_model.create(supplier);
}

module.exports = { get, create };
