const date_model = require("../models/date");

async function get(id) {
  return await date_model
    .find({ companyID: id })
    .populate("customerID jobTypeID", "_id name surname")
    .exec();
}

async function create(date) {
  return await date_model.create(date);
}

module.exports = { get, create };
