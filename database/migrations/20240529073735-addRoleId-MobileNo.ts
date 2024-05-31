import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'roleName',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'users',
        'mobileNo',
        {
          type: Sequelize.INTEGER,
        }
      )
    ]) 
  },

  async down (queryInterface:QueryInterface) {
    return Promise.all([
      queryInterface.removeColumn('users','roleName'),
      queryInterface.removeColumn('users','mobileNo')
    ])
  }
};
