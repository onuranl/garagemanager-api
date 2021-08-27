const product_service = require("../service/product-service");

async function get(req, res) {
  try {
    const result = await product_service.get(req.params.id);

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
    stockNo,
    barcodeNo,
    photo,
    kdv,
    price,
    kdv_is_included,
    discountedPrice,
    quantity,
    storeID,
    categoryID,
  } = req.body;

  const payload = {
    name,
    stockNo,
    barcodeNo,
    photo,
    kdv,
    price,
    kdv_is_included,
    discountedPrice,
    quantity,
    storeID,
    categoryID,
  };

  try {
    const result = await product_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getCategory(req, res) {
  try {
    const result = await product_service.getCategory(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function createCategory(req, res) {
  const { name, companyID } = req.body;

  const payload = {
    name,
    companyID,
  };

  try {
    const result = await product_service.createCategory(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = { get, create, getCategory, createCategory };
