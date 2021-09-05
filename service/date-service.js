const date_repository = require("../repositories/date-repository");

async function get(id) {
  return await date_repository.get(id);
}

async function getActive(id) {
  return await date_repository.getActive(id);
}

async function create(date) {
  return await date_repository.create(date);
}

async function remove(id) {
  return await date_repository.remove(id);
}

async function complete(id) {
  return await date_repository.complete(id);
}

module.exports = { get, getActive, create, remove, complete };
