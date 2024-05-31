
import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface) {
    return queryInterface.bulkInsert('cityMasters',[
      {sId:1,cityName:"Adoni",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Amaravati",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Anantapur",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Chandragiri",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Chittoor",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Dowlaiswaram",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Eluru",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Guntur",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Kadapa",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Kakinada",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Kurnool",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Machilipatnam",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Nagarjunakoṇḍa",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Rajahmundry",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Srikakulam",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Tirupati",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Vijayawada",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Visakhapatnam",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Vizianagaram",createdAt: new Date(), updatedAt: new Date()},
      {sId:1,cityName:"Yemmiganur",createdAt: new Date(), updatedAt: new Date()},
      {sId:2,cityName:"Itanagar",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Dhuburi",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Dibrugarh",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Dispur",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Guwahati",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Jorhat",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Nagaon",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Sivasagar",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Silchar",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Tezpur",createdAt: new Date(), updatedAt: new Date()},
      {sId:3,cityName:"Tinsukia",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Ara",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Barauni",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Begusarai",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Bettiah",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Bhagalpur",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Bihar Sharif",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Bodh Gaya",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Buxar",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Chapra",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Darbhanga",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Dehri",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Dinapur Nizamat",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Gaya",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Hajipur",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Jamalpur",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Katihar",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Madhubani",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Motihari",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Munger",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:'Muzaffarpur',createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Patna",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Purnia",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Pusa",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Saharsa",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Samastipur",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Sasaram",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Sitamarhi",createdAt: new Date(), updatedAt: new Date()},
      {sId:4,cityName:"Siwan",createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface:QueryInterface) {
    return queryInterface.bulkDelete('cityMasters',{});
  }
};
