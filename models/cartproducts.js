"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ StoreProducts, Cart }) {
      // define association here
      this.belongsTo(StoreProducts);
      this.belongsTo(Cart);
    }
  }
  CartProducts.init(
    {
      totalprice: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "cartproducts",
      modelName: "CartProducts",
    }
  );
  return CartProducts;
};
