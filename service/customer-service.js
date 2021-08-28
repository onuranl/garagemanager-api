const customer_repository = require("../repositories/customer-repository");

async function getCustomer(id) {
  return await customer_repository.getCustomer(id);
}

async function create(customer) {
  return await customer_repository.createCustomer(customer);
}

// async function getVehicle(id) {
//   return await customer_repository.getVehicle(id);
// }

// async function addVehicle(id, data) {
//   return await customer_repository.addVehicle(id, data);
// }

module.exports = { getCustomer, create };
