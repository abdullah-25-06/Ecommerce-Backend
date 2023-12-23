"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("merchants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        type: Sequelize.UUID,
      },
      Address: { type: Sequelize.STRING },
      CNIC: { type: Sequelize.STRING, unique: true },
      NTN: { type: Sequelize.STRING, unique: true },
      IBFT: { type: Sequelize.STRING, unique: true },
      Account_no: { type: Sequelize.STRING, unique: true },
      BankName: { type: Sequelize.STRING },
      isVerified: { type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("merchants");
  },
};
