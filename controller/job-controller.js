const job_service = require("../service/job-service");

async function get(req, res) {
  try {
    const result = await job_service.get(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const {
    customerID,
    vehicleID,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
  } = req.body;

  const payload = {
    customerID,
    vehicleID,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
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

async function update(req, res) {
  const {
    customerID,
    vehicleID,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
  } = req.body;

  const payload = {
    customerID,
    vehicleID,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
  };

  try {
    const result = await job_service.update(req.params.id, payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await job_service.remove(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function complete(req, res) {
  try {
    const result = await job_service.complete(req.params.id);

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
  update,
  remove,
  complete,
};
