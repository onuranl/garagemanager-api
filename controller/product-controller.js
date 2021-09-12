const product_service = require("../service/product-service");
const uploadImage = require("../helpers/upload-image");

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

async function getByProductID(req, res) {
  try {
    const result = await product_service.getByProductID(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getAll(req, res) {
  try {
    const result = await product_service.getAll(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function upload(req, res) {
  try {
    const myFile = req.file;
    await uploadImage.uploadImage(myFile);
    const imageURL = await uploadImage.renameFile(myFile, req.params.id);

    await product_service.upload(req.params.id, imageURL);

    res.status(200).json({
      message: "Upload was successful",
      data: imageURL,
    });
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
    companyID,
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
    companyID,
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

async function update(req, res) {
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
    categoryID,
  };

  try {
    const result = await product_service.update(req.params.id, payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await product_service.remove(req.params.id);

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

module.exports = {
  get,
  getByProductID,
  getAll,
  upload,
  create,
  update,
  remove,
  getCategory,
  createCategory,
};
