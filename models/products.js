"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Store, StoreProducts }) {
      // define association here
      this.belongsToMany(Store, { through: StoreProducts });
    }
  }
  Products.init(
    {
      Name: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      Desc: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Products",
    }
  );
  return Products;
};
