import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.addColumn(
      'gifts',
      'eventDate',
      {
        type: Sequelize.DATE,
      }
    )
  },

  async down (queryInterface:QueryInterface) {
    return queryInterface.removeColumn('gifts','eventDate');    
  }
};
