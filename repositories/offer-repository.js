const offer_model = require("../models/offer");

async function get(id) {
  return await offer_model
    .find({ companyID: id, is_deleted: false })
    .populate("supplierID", "name")
    .exec();
}

async function getByID(id) {
  return await offer_model.findById(id);
}

async function create(data) {
  return await offer_model.create(data);
}

async function update(id, data) {
  return await offer_model.findOneAndUpdate({ _id: id }, data);
}

async function remove(id) {
  return await offer_model.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        is_deleted: true,
      },
    }
  );
}

module.exports = { get, getByID, create, update, remove };
