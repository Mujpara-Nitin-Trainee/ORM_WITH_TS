import { QueryInterface,DataTypes } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.createTable('eventMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      eventDate: {
        type: Sequelize.DATE,
        allowNull:false
      },
      eventNote: {
        type: Sequelize.STRING,
        allowNull:false
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
    await queryInterface.dropTable('eventMasters');
  }
};