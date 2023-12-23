"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Store }) {
      // define association here
      this.belongsTo(Users);
      this.hasOne(Store, {
        foreignKey: {
          allowNull: false,
          unique: true,
        },
      });
    }
  }
  Merchant.init(
    {
      Address: { type: DataTypes.STRING },
      CNIC: { type: DataTypes.STRING, unique: true },
      NTN: { type: DataTypes.STRING, unique: true },
      IBFT: { type: DataTypes.STRING, unique: true },
      Account_no: { type: DataTypes.STRING, unique: true },
      BankName: { type: DataTypes.STRING },
      isVerified: { type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      tableName: "merchants",
      modelName: "Merchant",
    }
  );
  return Merchant;
};
