'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.User,{through:models.Order, uniqueKey:"ProductId"})
    }
  }
  Product.init({
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Product Name",
          },
          notEmpty: {
            msg: "Please Fill the Product Name",
          },
        },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Stock",
          },
          notEmpty: {
            msg: "Please Fill the Stock",
          },
        },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Price",
          },
          notEmpty: {
            msg: "Please Fill the Price",
          },
        },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Type Of Product",
          },
          notEmpty: {
            msg: "Please Fill the Type Of Product",
          },
        },
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};