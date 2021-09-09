const sell_repository = require("../repositories/sell-repository");
const product_model = require("../models/product");

async function get(id) {
  return await sell_repository.get(id);
}

async function getByID(id) {
  return await sell_repository.getByID(id);
}

async function create(data) {
  return await sell_repository.create(data);
}

async function getTotal(id) {
  const data = await sell_repository.getTotal(id);
  if (data) {
    var total = 0;
    data.forEach((el) => {
      total = total + el.totalPrice;
    });
    return { total };
  } else {
    throw new Error("Bulunumadı");
  }
}

async function update(id, data) {
  const old = await sell_repository.update(id, data);
  const update = await sell_repository.getByID(id);
  if (old.status) {
    throw new Error("Satış faturası tahsil edilmiştir, düzenleme yapılamaz. ");
  }
  if (old && update) {
    try {
      if (update.products.length >= old.products.length) {
        for (let i = 0; i < update.products.length; i++) {
          if (!old.products[i]) {
            let product = await product_model.findOne({
              _id: update.products[i].productID,
            });

            const lastQuantity = product.quantity - update.products[i].quantity;

            await product_model.findOneAndUpdate(
              {
                _id: update.products[i].productID,
              },
              {
                quantity: lastQuantity,
              }
            );
          } else {
            var oldQuantity = 0;
            oldQuantity = oldQuantity + old.products[i].quantity;

            let product = await product_model.findOne({
              _id: update.products[i].productID,
            });

            const lastQuantity =
              product.quantity - update.products[i].quantity + oldQuantity;

            await product_model.findOneAndUpdate(
              {
                _id: update.products[i].productID,
              },
              {
                quantity: lastQuantity,
              }
            );
          }
        }
      } else {
        for (let i = 0; i < old.products.length; i++) {
          if (!update.products[i]) {
            let product = await product_model.findOne({
              _id: old.products[i].productID,
            });

            const lastQuantity = product.quantity + old.products[i].quantity;

            await product_model.findOneAndUpdate(
              {
                _id: old.products[i].productID,
              },
              {
                quantity: lastQuantity,
              }
            );
          } else {
            var oldQuantity = 0;
            oldQuantity = oldQuantity + old.products[i].quantity;

            let product = await product_model.findOne({
              _id: update.products[i].productID,
            });

            const lastQuantity =
              product.quantity - update.products[i].quantity + oldQuantity;

            await product_model.findOneAndUpdate(
              {
                _id: update.products[i].productID,
              },
              {
                quantity: lastQuantity,
              }
            );
          }
        }
      }
      return update;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("Fatura bulunamadı.");
  }
}

async function remove(id) {
  const result = await sell_repository.remove(id);
  console.log(result);
  if (result) {
    try {
      for (let i = 0; i < result.products.length; i++) {
        console.log(result.products[i].productID);

        let product = await product_model.findOne({
          _id: result.products[i].productID,
        });

        const lastQuantity = product.quantity + result.products[i].quantity;

        await product_model.findOneAndUpdate(
          {
            _id: result.products[i].productID,
          },
          {
            quantity: lastQuantity,
          }
        );
      }
      return result;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("Fatura bulunamadı !");
  }
}

async function collect(id) {
  return await sell_repository.collect(id);
}

module.exports = { get, getByID, getTotal, create, update, remove, collect };
