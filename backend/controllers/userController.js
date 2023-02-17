const { signPayloadToToken } = require("../helpers/jwt");
let { User, sequelize } = require("../models");

class userController {
  static async Login(req, res, next) {
    try {
      let { username, password } = req.body;
      if (!password || !username) {
        throw { name: "ERROR_INVALID_EMAIL_OR_PASSWORD" };
      }
    //   const user = await User.findOne({
    //     where: {
    //       username,
    //     },
    //   });
      const user = await sequelize.query(`
      SELECT * FROM "Users" u 
      WHERE u.username = '${username}'`)
      if(!user){
        throw { name: "ERROR_INVALID_EMAIL_OR_PASSWORD" };
      }
      const payload ={
        id : user[0][0].id,
        username : user[0][0].username,
        role: user[0][0].role
      }
      const access_token = signPayloadToToken(payload)
      res.status(200).json({access_token})
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
  static async Register(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}
module.exports = userController;
