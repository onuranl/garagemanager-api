const job_service = require("../service/job-service");

async function get(req, res) {
  try {
    const result = await job_service.get();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { customerID, vehicleID, date, photo, description, jobTypeID } =
    req.body;

  const payload = {
    customerID,
    vehicleID,
    date,
    photo,
    description,
    jobTypeID,
  };

  try {
    const result = await job_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = {
  get,
  create,
};
