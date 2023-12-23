"use strict";
const { Model, Store, Products } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StoreProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CartProducts }) {
      // define association here
      this.hasMany(CartProducts);
    }
  }
  StoreProducts.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      Price: DataTypes.INTEGER,
      Upsell: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "storeproducts",
      modelName: "StoreProducts",
    }
  );
  return StoreProducts;
};
