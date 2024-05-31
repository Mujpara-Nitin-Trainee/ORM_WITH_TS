import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert("stateMasters", [
      { stateName: "Andhra Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Arunachal Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Assam", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Bihar", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Chhattisgarh", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Goa", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Gujarat", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Haryana", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Himachal Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Jharkhand", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Karnataka", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Kerala", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Maharashtra", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Madhya Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Manipur", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Meghalaya", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Mizoram", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Nagaland", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Odisha", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Punjab", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Rajasthan", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Sikkim", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Tamil Nadu", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Tripura", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Telangana", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Uttar Pradesh", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Uttarakhand", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "West Bengal", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Andaman & Nicobar (UT)", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Chandigarh (UT)", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Dadra & Nagar Haveli and Daman & Diu (UT)", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Delhi", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Jammu & Kashmir (UT)", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Ladakh (UT)", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Lakshadweep (UT)", createdAt: new Date(), updatedAt: new Date() },
      { stateName: "Puducherry (UT)", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete("stateMasters", {});
  },
};
