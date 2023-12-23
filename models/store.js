"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Categories, Merchant, Products, StoreProducts, Order }) {
      // define association here
      this.belongsToMany(Categories, { through: "SC" });
      this.belongsToMany(Products, { through: StoreProducts });
      this.hasMany(Order, { foreignKey: { allowNull: false } });

      this.belongsTo(Merchant, {
        foreignKey: {
          allowNull: false,
          unique: true,
        },
      });
    }
  }
  Store.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      name: { type: DataTypes.STRING },
      location: { type: DataTypes.STRING },
    },
    {
      sequelize,
      tableName: "stores",
      modelName: "Store",
    }
  );
  return Store;
};
