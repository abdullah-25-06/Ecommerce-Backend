"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customers, CartProducts }) {
      // define association here
      this.belongsTo(Customers);
      this.hasMany(CartProducts);
    }
  }
  Cart.init(
    {
      CustomerId: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    },
    {
      sequelize,
      tableName: "cart",
      modelName: "Cart",
    }
  );
  return Cart;
};
