const product_repository = require("../repositories/product-repository");

async function get(id) {
  return await product_repository.get(id);
}

async function create(product) {
  return await product_repository.create(product);
}

async function getCategory(id) {
  return await product_repository.getCategory(id);
}

async function createCategory(category) {
  return await product_repository.createCategory(category);
}

module.exports = { get, create, getCategory, createCategory };
