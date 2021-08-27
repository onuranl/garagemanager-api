const store_model = require("../models/store");

async function get(id) {
  return await store_model.find({ companyID: id });
}

async function getByStoreID(id) {
  return await store_model.find({ _id: id });
}

async function create(store) {
  return await store_model.create(store);
}

async function update(storeID, data) {
  return await store_model.findOneAndUpdate({ _id: storeID }, data);
}

async function remove(storeID) {
  return await store_model.deleteOne({ _id: storeID });
}

module.exports = { get, getByStoreID, create, update, remove };
