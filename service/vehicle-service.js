const vehicle_repository = require("../repositories/vehicle-repository");

async function get(id) {
  return await vehicle_repository.get(id);
}

async function create(vehicle) {
  return await vehicle_repository.create(vehicle);
}

module.exports = { get, create };
