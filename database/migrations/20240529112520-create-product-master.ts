import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('productMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      productDetails: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quatity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.dropTable('productMasters');
  }
};