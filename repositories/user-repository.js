const user_model = require("../models/user");

async function getAll(companyID) {
  return await user_model
    .find({ companyID: companyID })
    .populate("roleID")
    .exec();
}

async function getUserByID(id) {
  return await user_model
    .findOne({ _id: id })
    .populate("companyID roleID")
    .exec();
}

async function getUserByEmail(email) {
  return await user_model.findOne({ email });
}

async function createUser(user) {
  return await user_model.create(user);
}

async function remove(id) {
  return await user_model.deleteOne({ _id: id });
}

module.exports = { getAll, getUserByID, getUserByEmail, createUser, remove };
