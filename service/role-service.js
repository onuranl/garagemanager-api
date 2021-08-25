const role_repository = require("../repositories/role-repository");

async function create(role) {
    return await role_repository.createRole(role);
}

module.exports = {create};