const date_model = require("../models/date");

async function get(id) {
  return await date_model
    .find({ companyID: id })
    .populate("customerID vehicleID jobTypeID", "_id name surname model")
    .exec();
}

async function getByID(id) {
  return await date_model.findOne({ _id: id });
}

async function getActive(id) {
  return await date_model.find({ companyID: id, status: false });
}

async function create(date) {
  return await date_model.create(date);
}

async function update(id, data) {
  return await date_model.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return await date_model.deleteOne({ _id: id });
}

async function complete(id) {
  return await date_model.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: true,
      },
    }
  );
}

module.exports = { get, getByID, getActive, create, update, remove, complete };
