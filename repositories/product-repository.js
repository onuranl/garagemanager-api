const product_model = require("../models/product");
const productCategory_model = require("../models/productCategory");

async function get(id) {
  return await product_model.find({ storeID: id });
}

async function getByProductID(id) {
  return await product_model.findOne({ _id: id });
}

async function getAll(companyID) {
  return await product_model.find({ companyID: companyID });
}

async function upload(productID, url) {
  return await product_model.findOneAndUpdate(
    { _id: productID },
    {
      $set: {
        photo: url,
      },
    }
  );
}

async function create(product) {
  return await product_model.create(product);
}

async function update(id, data) {
  return await product_model.findOneAndUpdate({ _id: id }, data);
}

async function remove(productID) {
  return await product_model.deleteOne({ _id: productID });
}

async function getCategory(id) {
  return await productCategory_model.find({ companyID: id });
}

async function createCategory(category) {
  return await productCategory_model.create(category);
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
