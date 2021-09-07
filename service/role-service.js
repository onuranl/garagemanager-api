const role_repository = require("../repositories/role-repository");

async function get() {
  return await role_repository.get();
}

async function create(role) {
  return await role_repository.createRole(role);
}

module.exports = { get, create };
