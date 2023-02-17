'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Product, {through:models.Order, uniqueKey:"UserId"})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Username",
          },
          notEmpty: {
            msg: "Please Fill the Username",
          },
        },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Password",
          },
          notEmpty: {
            msg: "Please Fill the Password",
          },
        },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Role",
          },
          notEmpty: {
            msg: "Please Fill the Role",
          },
        },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, option)=>{
    instance.password = hashPassword(instance.password)
  })
  return User;
};