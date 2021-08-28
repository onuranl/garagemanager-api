const date_repository = require("../repositories/date-repository");

async function get(id) {
  return await date_repository.get(id);
}

async function create(date) {
  return await date_repository.create(date);
}

async function remove(id) {
  return await date_repository.remove(id);
}

module.exports = { get, create, remove };
