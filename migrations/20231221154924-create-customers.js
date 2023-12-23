"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customers", {
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
      card_no: { type: Sequelize.STRING, unique: true },
      card_type: { type: Sequelize.STRING },
      expiryDate: { type: Sequelize.STRING },
      name_card: { type: Sequelize.STRING },
      cvc: { type: Sequelize.STRING },
      account_no: { type: Sequelize.STRING, unique: true },
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
    await queryInterface.dropTable("customers");
  },
};
