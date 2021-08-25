const customer_model = require("../models/customer");

async function getCustomer(id) {
  return await customer_model.find({ companyID: id });
}

async function createCustomer(customer) {
  return await customer_model.create(customer);
}

async function getVehicle(id) {
  let result = await customer_model.findOne({ _id: id });
  return result.garage;
}

async function addVehicle(id, data) {
  return await customer_model.findOneAndUpdate(
    { _id: id },
    { $push: { garage: data } }
  );
}

module.exports = { getCustomer, createCustomer, getVehicle, addVehicle };
