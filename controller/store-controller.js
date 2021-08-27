const store_service = require("../service/store-service");

async function get(req, res) {
  try {
    const result = await store_service.get(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getByStoreID(req, res) {
  try {
    const result = await store_service.getByStoreID(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { name, address, description, companyID } = req.body;

  const payload = {
    name,
    address,
    description,
    companyID,
  };

  try {
    const result = await store_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function update(req, res) {
  const { name, address, description } = req.body;

  const payload = {
    name,
    address,
    description,
  };

  try {
    const result = await store_service.update(req.params.id, payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await store_service.remove(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = { get, getByStoreID, create, update, remove };
