"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      FirstName: { type: Sequelize.STRING, validate: { len: [3, 20] } },
      LastName: { type: Sequelize.STRING, validate: { len: [3, 20] } },
      Email: {
        type: Sequelize.STRING,
        unique: true,
        validate: { isEmail: true },
      },
      Phone: { type: Sequelize.STRING },
      Password: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("users");
  },
};
