const purchase_service = require("../service/purchase-service");

async function get(req, res) {
  try {
    const result = await purchase_service.get(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getByID(req, res) {
  try {
    const result = await purchase_service.getByID(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function getTotal(req, res) {
  try {
    const result = await purchase_service.getTotal(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function create(req, res) {
  const { supplierID, invoiceNo, date, address, products, status, companyID } =
    req.body;

  var totalPrice = 0;
  products.forEach((el) => {
    totalPrice = totalPrice + el.total;
  });

  const payload = {
    supplierID,
    invoiceNo,
    date,
    address,
    products,
    status,
    companyID,
    totalPrice,
  };

  try {
    const result = await purchase_service.create(payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function update(req, res) {
  const { supplierID, invoiceNo, date, address, products, status, companyID } =
    req.body;

  var totalPrice = 0;
  products.forEach((el) => {
    totalPrice = totalPrice + el.total;
  });

  const payload = {
    supplierID,
    invoiceNo,
    date,
    address,
    products,
    status,
    companyID,
    totalPrice,
  };

  try {
    const result = await purchase_service.update(req.params.id, payload);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function remove(req, res) {
  try {
    const result = await purchase_service.remove(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

async function pay(req, res) {
  try {
    const result = await purchase_service.pay(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Bir hata meydana geldi",
    });
  }
}

module.exports = { get, getByID, getTotal, create, update, remove, pay };
