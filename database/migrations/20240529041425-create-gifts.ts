import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    await queryInterface.createTable('gifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName:{ 
        type:DataTypes.STRING,
        allowNull:false
      },
      productName:{ 
        type:DataTypes.STRING,
        allowNull:false
      },
      description:{ 
        type:DataTypes.STRING,
        allowNull:false
      },
      price:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      productImg:{
        type:DataTypes.STRING,
        allowNull:false
      },
      receiverName:{ 
        type:DataTypes.STRING,
        allowNull:false
      },
      receiverAddress:{ 
        type:DataTypes.STRING,
        allowNull:false
      },
      eventName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.dropTable('gifts');
  }
};