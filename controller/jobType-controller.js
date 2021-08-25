const jobType_service = require("../service/jobType-service");

async function get(req, res) {
  try {
    const result = await jobType_service.get();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { name, time, description, price, note } = req.body;

  const payload = {
    name,
    time,
    description,
    price,
    note,
  };

  try {
    const result = await jobType_service.create(payload);

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
