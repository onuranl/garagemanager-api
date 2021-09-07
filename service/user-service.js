const user_repository = require("../repositories/user-repository");

async function getAll(id) {
  return await user_repository.getAll(id);
}

async function getProfile(id) {
  const user = await user_repository.getUserByID(id);
  return user;
}

async function remove(id) {
  let user = await user_repository.getUserByID(id);
  if (user._id) {
    if (user.roleID._id != "61223239eeadc037000374b8") {
      return await user_repository.remove(id);
    } else {
      throw new Error("Kullanıcı silinemez !");
    }
  } else {
    throw new Error("Kullanıcı bulunamadı");
  }
}

module.exports = { getAll, getProfile, remove };
