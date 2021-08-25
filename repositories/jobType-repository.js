const jobType_model = require("../models/jobType");

async function get() {
  return await jobType_model.find({});
}

async function createJobType(jobType) {
  return await jobType_model.create(jobType);
}

module.exports = { get, createJobType };
