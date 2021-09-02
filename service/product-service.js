const product_repository = require("../repositories/product-repository");

async function get(id) {
  return await product_repository.get(id);
}

async function getAll(id) {
  return await product_repository.getAll(id);
}

async function create(product) {
  return await product_repository.create(product);
}

async function remove(productID) {
  return await product_repository.remove(productID);
}

async function getCategory(id) {
  return await product_repository.getCategory(id);
}

async function createCategory(category) {
  return await product_repository.createCategory(category);
}

module.exports = { get, getAll, create, remove, getCategory, createCategory };
