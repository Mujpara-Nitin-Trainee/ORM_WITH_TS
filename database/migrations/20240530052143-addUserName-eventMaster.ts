import { QueryInterface,DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.addColumn('eventMasters','username',{
      type: Sequelize.STRING,
      allowNull:false
    })
  },

  async down (queryInterface:QueryInterface) {
    return queryInterface.removeColumn('eventMasters','username');
  }
};
