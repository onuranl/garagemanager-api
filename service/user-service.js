const user_repository = require("../repositories/user-repository");

async function getProfile(id) {
    const user = await user_repository.getUserByID(id);
    return user;
}

module.exports = {getProfile}