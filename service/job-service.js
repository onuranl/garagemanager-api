const job_repository = require("../repositories/job-repository");

async function get() {
  return await job_repository.get();
}

async function create(job) {
  return await job_repository.createJob(job);
}

module.exports = { get, create };
