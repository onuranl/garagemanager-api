const joi = require("../utils/validator");

const auth_service = require("../service/auth-service");

const login_validation = joi.object({
    email: joi.string().required().label("Email"),
    password: joi.string().required().label("Şifre"),
});
  
async function login(req, res) {
    const { email, password } = req.body;

    try {
        const result = await auth_service.login(email, password);
        return res.json(result);
    } catch (error) {
        return res.status(400).json({
        error: error,
        });
    }
}

const register_validation = joi.object({
    name: joi.string().required().max(32).label("Ad"),
    surname: joi.string().required().max(32).label("Soyad"),
    email: joi.string().required().max(255).email().label("E-Posta"),
    password: joi.string().required().min(6).max(32).label("Şifre"),
    companyID: joi.string().required().label("CompanyID"),
    roleID: joi.string().required().label("roleID")
});

async function register(req, res) {
    const { name, surname, email, password, companyID, roleID} = req.body;
    
    const payload = {
      name,
      surname,
      email,
      password,
      companyID,
      roleID
    };
  
    try {
      const result = await auth_service.register(payload);
  
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({
        error: error.message || "Bir hata meydana geldi",
      });
    }
}

module.exports = {
    register,
    login,
    register_validation,
    login_validation
};