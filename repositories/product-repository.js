const product_model = require("../models/product");
const productCategory_model = require("../models/productCategory");

async function get(id) {
  return await product_model.find({ storeID: id });
}

async function create(product) {
  return await product_model.create(product);
}

async function getCategory(id) {
  return await productCategory_model.find({ companyID: id });
}

async function createCategory(category) {
  return await productCategory_model.create(category);
}

module.exports = { get, create, getCategory, createCategory };
