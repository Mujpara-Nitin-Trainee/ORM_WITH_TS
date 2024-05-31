import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface) {
    return queryInterface.renameColumn('productMasters','quatity','quantity');
  },

  async down (queryInterface:QueryInterface) {
    return queryInterface.renameColumn('productMasters','quantity','quatity'); 
  }
};
