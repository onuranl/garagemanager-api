const date_service = require("../service/date-service");

async function get(req, res) {
  try {
    const result = await date_service.get(req.params.id);

    return res.status(200).json(result.reverse());
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getByID(req, res) {
  try {
    const result = await date_service.getByID(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getActive(req, res) {
  try {
    const result = await date_service.getActive(req.params.id);

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

async function update(req, res) {
  const { customerID, vehicleID, jobTypeID, date, description } = req.body;

  const payload = {
    customerID,
    vehicleID,
    jobTypeID,
    date,
    description,
  };

  try {
    const result = await date_service.update(req.params.id, payload);

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

async function complete(req, res) {
  try {
    const result = await date_service.complete(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = {
  get,
  getByID,
  getActive,
  create,
  update,
  remove,
  complete,
};
