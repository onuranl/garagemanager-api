const offer_service = require("../service/offer-service");

async function get(req, res) {
  try {
    const result = await offer_service.get(req.params.id);

    return res.status(200).json(result.reverse());
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getByID(req, res) {
  try {
    const result = await offer_service.getByID(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { customerID, invoiceNo, date, address, products, status, companyID } =
    req.body;

  var totalPrice = 0;

  if (products.length) {
    products.forEach((el) => {
      totalPrice = totalPrice + el.total;
    });
  }

  const payload = {
    customerID,
    invoiceNo,
    date,
    address,
    products,
    status,
    companyID,
    totalPrice,
  };

  try {
    const result = await offer_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function update(req, res) {
  const { customerID, invoiceNo, date, address, products, status, companyID } =
    req.body;

  var totalPrice = 0;
  products.forEach((el) => {
    totalPrice = totalPrice + el.total;
  });

  const payload = {
    customerID,
    invoiceNo,
    date,
    address,
    products,
    status,
    companyID,
    totalPrice,
  };

  try {
    const result = await offer_service.update(req.params.id, payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await offer_service.remove(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function complete(req, res) {
  try {
    const result = await offer_service.complete(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = { get, getByID, create, update, remove, complete };
