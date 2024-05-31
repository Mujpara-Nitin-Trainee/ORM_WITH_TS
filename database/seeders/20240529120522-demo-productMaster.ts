import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.bulkInsert('productMasters',[
      {
        productName:"Cake",
        productDetails:"we have variety of cakes available on our portal",
        quantity:150,
        category:"food",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        productName:"Bracelet",
        productDetails:"we have different variety of bracelet.",
        quantity:90,
        category:"jewelry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName:"watch",
        productDetails:"we have different variety of watches for men and women.",
        quantity:120,
        category:"jewelry",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName:"hoodies",
        productDetails:"we have unsex hoodies available with use.",
        quantity:250,
        category:"clothing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productName:"8 in 1 Indoor Game",
        productDetails:"this 8 in 1 indoor game contains 8 different types of game in one game",
        quantity:20,
        category:"games",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.bulkDelete('productMasters',{});
  }
};
