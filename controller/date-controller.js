const date_service = require("../service/date-service");

async function get(req, res) {
  try {
    const result = await date_service.get(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { customerID, vehicleID, jobTypeID, companyID, date, description } =
    req.body;

  const payload = {
    customerID,
    vehicleID,
    jobTypeID,
    companyID,
    date,
    description,
  };

  try {
    const result = await date_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await date_service.remove(req.params.id);

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
  remove,
};
