const role_model = require("../models/role");

async function createRole(role) {
    return await role_model.create(role);
}

module.exports = {createRole};