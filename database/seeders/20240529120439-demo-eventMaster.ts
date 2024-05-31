import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.bulkInsert('eventMasters',[
      {
        userName: "Nitin",
        eventName: "Birthday",
        eventDate: "2024-09-09",
        eventNote: "Today is my dad's birthday.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userName: "Jeel",
        eventName: "Marriage anniversary",
        eventDate: "2024-02-15",
        eventNote: "Today is my uncle and aunty's marriage anniversary.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userName: "darshan",
        eventName: "Gandhi jayanti",
        eventDate: "2024-10-02",
        eventNote: "Today is Gandhi jayanti and i need to bring cake and flowers at school",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ])
  },

  async down (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.bulkDelete('eventMasters',{});
  }
};
