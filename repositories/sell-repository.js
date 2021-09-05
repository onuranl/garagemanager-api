const sell_model = require("../models/sell");

async function get(id) {
  return await sell_model
    .find({ companyID: id, is_deleted: false })
    .populate("customerID", "name surname")
    .exec();
}

async function getByID(id) {
  return await sell_model.findById(id);
}

async function getTotal(id) {
  return await sell_model.find({
    companyID: id,
    is_deleted: false,
    status: true,
  });
}

async function create(data) {
  return await sell_model.create(data);
}

async function update(id, data) {
  return await sell_model.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return await sell_model.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        is_deleted: true,
      },
    }
  );
}

async function collect(id) {
  return await sell_model.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: true,
      },
    }
  );
}

module.exports = { get, getByID, getTotal, create, update, remove, collect };
