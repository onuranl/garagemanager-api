const job_service = require("../service/job-service");
const uploadImage = require("../helpers/upload-image");

async function get(req, res) {
  try {
    const result = await job_service.get(req.params.id);

    return res.status(200).json(result.reverse());
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getByID(req, res) {
  try {
    const result = await job_service.getByID(req.params.id);

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

    await job_service.upload(req.params.id, imageURL);

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
    customerID,
    vehicleID,
    products,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
  } = req.body;

  var totalPrice = 0;
  products.forEach((el) => {
    totalPrice = totalPrice + el.total;
  });

  const payload = {
    customerID,
    vehicleID,
    products,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
    totalPrice,
  };

  try {
    const result = await job_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function update(req, res) {
  const {
    customerID,
    vehicleID,
    products,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
  } = req.body;

  var totalPrice = 0;
  products.forEach((el) => {
    totalPrice = totalPrice + el.total;
  });

  const payload = {
    customerID,
    vehicleID,
    products,
    date,
    photo,
    description,
    jobTypeID,
    companyID,
    totalPrice,
  };

  try {
    const result = await job_service.update(req.params.id, payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await job_service.remove(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function complete(req, res) {
  try {
    const result = await job_service.complete(req.params.id);

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
  upload,
  create,
  update,
  remove,
  complete,
};
