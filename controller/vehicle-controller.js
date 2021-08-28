const vehicle_service = require("../service/vehicle-service");

async function get(req, res) {
  try {
    const result = await vehicle_service.get(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const {
    type,
    brand,
    model,
    year,
    km,
    engineNo,
    chassisNo,
    color,
    gearType,
    fuelType,
    caseType,
    hp,
    customerID,
  } = req.body;

  const payload = {
    type,
    brand,
    model,
    year,
    km,
    engineNo,
    chassisNo,
    color,
    gearType,
    fuelType,
    caseType,
    hp,
    customerID,
  };

  try {
    const result = await vehicle_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = { get, create };
