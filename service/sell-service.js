const sell_repository = require("../repositories/sell-repository");

async function get(id) {
  return await sell_repository.get(id);
}

async function getByID(id) {
  return await sell_repository.getByID(id);
}

async function create(data) {
  return await sell_repository.create(data);
}

async function update(id, data) {
  return await sell_repository.update(id, data);
}

async function remove(id) {
  return await sell_repository.remove(id);
}

module.exports = { get, getByID, create, update, remove };
