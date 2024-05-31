import { QueryInterface,DataTypes } from "sequelize"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.changeColumn('users','mobileNo',{
      type:Sequelize.BIGINT,
      allowNull:false
    })
  },

  async down (queryInterface:QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.changeColumn('users','mobileNo',{
      type:Sequelize.INTEGER
    })
  }
};
