const role_model = require("../models/role");

async function get() {
  return await role_model.find({});
}

async function createRole(role) {
  return await role_model.create(role);
}

module.exports = { get, createRole };
