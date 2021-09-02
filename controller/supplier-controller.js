const supplier_service = require("../service/supplier-service");

async function get(req, res) {
  try {
    const result = await supplier_service.get(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { name, description, companyID } = req.body;

  const payload = { name, description, companyID };

  try {
    const result = await supplier_service.create(payload);

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
