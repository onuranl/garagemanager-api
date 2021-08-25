const customer_service = require("../service/customer-service");

async function get(req, res) {
  try {
    const result = await customer_service.getCustomer(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const {
    name,
    surname,
    phone,
    email,
    address,
    province,
    gender,
    garage,
    note,
    companyID,
  } = req.body;

  const payload = {
    name,
    surname,
    phone,
    email,
    address,
    province,
    gender,
    garage,
    note,
    companyID,
  };

  try {
    const result = await customer_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getVehicle(req, res) {
  try {
    const result = await customer_service.getVehicle(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function addVehicle(req, res) {
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
  };

  try {
    const result = await customer_service.addVehicle(req.params.id, payload);

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
  getVehicle,
  addVehicle,
};
