const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const user_repository = require("../repositories/user-repository");

async function login(email, password) {
  let user = await user_repository.getUserByEmail(email);
  // .select("+password")
  // .exec();
  if (!user) throw new Error("USER_NOT_FOUND");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("WRONG_PASSWORD");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });

  delete user.password;

  return {
    access_token: token,
    user: user,
  };
}

async function register(user) {
  // const findUser = await user_repository.getUserByUsername(user.username);
  // const findEmail = await user_repository.getUserByEmail(user.email);

  // if (findUser || findEmail) {
  //     throw new Error("Kullanıcı zaten kayıtlı.");
  // }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;

  // FIXME: two await why?
  const result = await (await user_repository.createUser(user)).toObject();
  delete result.password;
  if (!result) throw new Error("Kullanıcı oluşturulamadı.");

  return result;
}

module.exports = {
  register,
  login,
};
