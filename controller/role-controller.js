const role_service = require("../service/role-service");

async function get(req, res) {
  try {
    const result = await role_service.get();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { type } = req.body;

  const payload = {
    type,
  };

  try {
    const result = await role_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = { get, create };
