"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customers, Store, OrderItem }) {
      // define association here
      this.belongsTo(Customers);
      this.belongsTo(Store);
      this.hasOne(OrderItem, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Order.init(
    {
      orderamount: DataTypes.INTEGER,
      taxcharges: DataTypes.FLOAT,
      totalamount: DataTypes.FLOAT,
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Order",
    }
  );
  return Order;
};
