const store_repository = require("../repositories/store-repository");
const product_model = require("../models/product");

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
  let remove = await store_repository.remove(id);
  if (remove) {
    try {
      await product_model.deleteMany({ storeID: id });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("Depo bulunamadı !");
  }
  return remove;
}

module.exports = { get, getByStoreID, create, update, remove };
