const job_repository = require("../repositories/job-repository");

async function get(id) {
  return await job_repository.get(id);
}

async function create(job) {
  return await job_repository.createJob(job);
}

async function update(id, data) {
  return await job_repository.update(id, data);
}

async function remove(id) {
  return await job_repository.remove(id);
}

async function complete(id) {
  return await job_repository.completeJob(id);
}

module.exports = { get, create, update, remove, complete };
