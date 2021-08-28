const date_model = require("../models/date");

async function get(id) {
  return await date_model
    .find({ companyID: id })
    .populate("customerID vehicleID jobTypeID", "_id name surname model")
    .exec();
}

async function create(date) {
  return await date_model.create(date);
}

async function remove(id) {
  return await date_model.deleteOne({ _id: id });
}

module.exports = { get, create, remove };
