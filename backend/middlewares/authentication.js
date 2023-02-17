const { verifyToken } = require("../helpers/jwt");
const { sequelize } = require("../models");
async function Authentication(req, res, next) {
  try {
    let { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Please_Login" };
    }
    let payload = verifyToken(access_token);
    console.log(payload)
    let findUser = await sequelize.query(
      `SELECT * FROM "Users" u WHERE u.id = '${payload.id}' `
    );
    if (!findUser) {
      throw { name: "Please_Login" };
    }
    req.user = {
      id: findUser[0][0].id,
      role: findUser[0][0].role,
      username: findUser[0][0].username,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = Authentication;
