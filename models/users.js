"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Merchant, Customers }) {
      // define association here
      this.hasOne(Merchant);
      this.hasOne(Customers);
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
      },
      FirstName: { type: DataTypes.STRING, validate: { len: [3, 20] } },
      LastName: { type: DataTypes.STRING, validate: { len: [3, 20] } },
      Email: {
        type: DataTypes.STRING,
        unique: true,
        validate: { isEmail: true },
      },
      Phone: { type: DataTypes.STRING },
      Password: { type: DataTypes.STRING },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
    }
  );
  return Users;
};

// id: {
//   type: DataTypes.UUID,
//   primaryKey: true,
//   allowNull: false,
// },
// FirstName: { type: DataTypes.STRING, validate: { len: [3, 20] } },
// LastName: { type: DataTypes.STRING, validate: { len: [3, 20] } },
// Email: {
//   type: DataTypes.STRING,
//   unique: true,
//   validate: { isEmail: true },
// },
// Phone: { type: DataTypes.STRING },
// Password: { type: DataTypes.STRING },
// },
// {
// sequelize,
// tableName: "user",
// modelName: "User",
// }
