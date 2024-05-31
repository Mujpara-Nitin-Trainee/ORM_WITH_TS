import { QueryInterface } from "sequelize"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface) {
    return queryInterface.bulkInsert('addressMasters',[
      {userId:1,cityId:15,area:"Indribridge",pincode:333111,createdAt: new Date(), updatedAt: new Date()}
  ])
  },

  async down (queryInterface:QueryInterface) {
    return queryInterface.bulkDelete('addressMasters',{})
  }
};
