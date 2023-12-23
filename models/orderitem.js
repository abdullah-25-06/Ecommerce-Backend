"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.belongsTo(Order);
    }
  }
  OrderItem.init(
    {
      totalprice: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      StoreProductId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: "orderitems",
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
