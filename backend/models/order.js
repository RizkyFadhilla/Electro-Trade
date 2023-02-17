'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Order.hasMany(models.User)
      // Order.hasMany(models.Product)
    }
  }
  Order.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    amount:{
      type: DataTypes.INTEGER,
      allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Please Fill the Amount",
          },
          notEmpty: {
            msg: "Please Fill the Amount",
          },
        },
    },
    total_price:DataTypes.INTEGER,
    typeOrder: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};