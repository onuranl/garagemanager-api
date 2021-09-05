const job_model = require("../models/job");

async function get(id) {
  return await job_model
    .find({ companyID: id })
    .populate("customerID jobTypeID", "name surname");
}

async function getByID(id) {
  return await job_model.findById(id);
}

async function createJob(job) {
  return await job_model.create(job);
}

async function update(jobID, data) {
  return await job_model.findOneAndUpdate({ _id: jobID }, data);
}

async function remove(jobID) {
  return await job_model.deleteOne({ _id: jobID });
}

async function completeJob(id) {
  return await job_model.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: true,
      },
    }
  );
}

module.exports = { get, getByID, createJob, update, remove, completeJob };
