const product_model = require("../models/product");
const productCategory_model = require("../models/productCategory");

async function get(id) {
  return await product_model.find({ storeID: id });
}

async function getAll(companyID) {
  return await product_model.find({ companyID: companyID });
}

async function create(product) {
  return await product_model.create(product);
}

async function remove(productID) {
  return await product_model.deleteOne({ _id: productID });
}

async function getCategory(id) {
  return await productCategory_model.find({ companyID: id });
}

async function createCategory(category) {
  return await productCategory_model.create(category);
}

module.exports = { get, getAll, create, remove, getCategory, createCategory };
