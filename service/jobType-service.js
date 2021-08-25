const jobType_repository = require("../repositories/jobType-repository");

async function get() {
  return await jobType_repository.get();
}

async function create(jobType) {
  return await jobType_repository.createJobType(jobType);
}

module.exports = { get, create };
