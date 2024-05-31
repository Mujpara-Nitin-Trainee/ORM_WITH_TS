import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.bulkInsert('gifts',[
      {
        userName:'nitin',
        productName:'cake',
        description:'Please write happy birthday dad.',
        price:350,
        productImg:'cake.jpg',
        receiverName:'Jagdishbhai',
        receiverAddress:'C-51, Harikrushna Society, sardarnagar, ahmedabad.',
        eventName:'Birthday',
        eventDate:"2024-09-09",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:'ashutosh',
        productName:'flower bouquet',
        description:'Please use fresh Orchid flowers.',
        price:750,
        productImg:'orchid.jpg',
        receiverName:'Jagdishbhai',
        receiverAddress:'riverfront, sahibag, ahmedabad.',
        eventName:'valentine day',
        eventDate:"2025-02-14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:'jeel',
        productName:'8 in 1 game',
        description:'plz added note happy birthday junior.',
        price:350,
        productImg:'gameIndoor.jpg',
        receiverName:'Mayank',
        receiverAddress:'krushannagar, ahmedabad.',
        eventName:'valentine day',
        eventDate:"2025-02-14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName:'darshan',
        productName:'golden ring',
        description:'the golden ring should contain its special box.',
        price:350,
        productImg:'gameIndoor.jpg',
        receiverName:'Mayank',
        receiverAddress:'krushannagar, ahmedabad.',
        eventName:'valentine day',
        eventDate:"2025-02-14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.bulkDelete('gifts',{});
  }
};
