const job_model = require("../models/job");

async function get() {
  return await job_model
    .find({})
    .populate("customerID jobTypeID", "name surname");
}

async function createJob(job) {
  return await job_model.create(job);
}

module.exports = { get, createJob };
