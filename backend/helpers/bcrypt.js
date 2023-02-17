const bcrypt = require("bcryptjs");
let hashPassword = (password) => bcrypt.hashSync(password);
let comparePassword = (password, hashPass) =>
  bcrypt.compareSync(password, hashPass);
module.exports = {
  hashPassword,
  comparePassword,
};
