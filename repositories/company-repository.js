const company_model = require("../models/company");

async function createCompany(company) {
    return await company_model.create(company);
}

module.exports = {createCompany};