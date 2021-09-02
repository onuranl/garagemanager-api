const supplier_repository = require("../repositories/supplier-repository");

async function get(id) {
  return await supplier_repository.get(id);
}

async function create(supplier) {
  return await supplier_repository.create(supplier);
}

module.exports = { get, create };
