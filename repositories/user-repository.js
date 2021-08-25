const user_model = require("../models/user");

async function getUserByID(id) {
    return await user_model.findOne({ _id : id }).populate('companyID roleID').exec();
}

async function getUserByEmail(email) {
    return await user_model.findOne({ email });
}

async function createUser(user) {
  return await user_model.create(user);
}

module.exports = {getUserByID, getUserByEmail, createUser}