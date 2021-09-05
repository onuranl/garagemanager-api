const job_repository = require("../repositories/job-repository");

async function get(id) {
  return await job_repository.get(id);
}

async function getByID(id) {
  return await job_repository.getByID(id);
}

async function create(job) {
  return await job_repository.createJob(job);
}

async function update(id, data) {
  let job = await job_repository.getByID(id);
  console.log(job.status);
  if (!job.status) {
    return await job_repository.update(id, data);
  } else {
    throw new Error("Güncelleme yapılamaz !");
  }
}

async function remove(id) {
  return await job_repository.remove(id);
}

async function complete(id) {
  return await job_repository.completeJob(id);
}

module.exports = { get, getByID, create, update, remove, complete };
