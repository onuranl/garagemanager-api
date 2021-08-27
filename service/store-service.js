const store_repository = require("../repositories/store-repository");

async function get(id) {
  return await store_repository.get(id);
}

async function getByStoreID(id) {
  return await store_repository.getByStoreID(id);
}

async function create(store) {
  return await store_repository.create(store);
}

async function update(id, data) {
  return await store_repository.update(id, data);
}

async function remove(id) {
  return await store_repository.remove(id);
}

module.exports = { get, getByStoreID, create, update, remove };
