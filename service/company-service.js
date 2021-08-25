const company_repository = require("../repositories/company-repository");

async function create(company) {
    return await company_repository.createCompany(company);
}

module.exports = {create};