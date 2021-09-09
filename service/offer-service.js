const offer_repository = require("../repositories/offer-repository");

async function get(id) {
  return await offer_repository.get(id);
}

async function getByID(id) {
  return await offer_repository.getByID(id);
}

async function create(data) {
  return await offer_repository.create(data);
}

async function update(id, data) {
  return await offer_repository.update(id, data);
}

async function remove(id) {
  return await offer_repository.remove(id);
}

async function complete(id) {
  return await offer_repository.complete(id);
}

module.exports = { get, getByID, create, update, remove, complete };
