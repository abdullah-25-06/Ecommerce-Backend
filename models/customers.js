"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Cart, Order }) {
      // define association here
      this.belongsTo(Users);
      this.hasOne(Cart);
      this.hasMany(Order, { foreignKey: { allowNull: false } });
    }
  }
  Customers.init(
    {
      card_no: { type: DataTypes.STRING, unique: true },
      card_type: { type: DataTypes.STRING },
      expiryDate: { type: DataTypes.STRING },
      name_card: { type: DataTypes.STRING },
      cvc: { type: DataTypes.STRING },
      account_no: { type: DataTypes.STRING, unique: true },
    },
    {
      sequelize,
      tableName: "customers",
      modelName: "Customers",
    }
  );
  return Customers;
};
