const vehicle_model = require("../models/vehicle");

async function get(id) {
  return await vehicle_model.find({ customerID: id });
}

async function create(vehicle) {
  return await vehicle_model.create(vehicle);
}

module.exports = { get, create };
