import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface, Sequelize: typeof DataTypes) {
   return queryInterface.bulkInsert('users', [
    {
      firstname: "nitin",
      surname: "mujpara",
      middlename: "jagdishbhai",
      email: "nitin@gmail.com",
      dob: "2002-10-10",
      password: "12345678",
      roleName:"Admin",
      mobileNo:9998881112,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "ashutosh",
      surname: "tomar",
      middlename: "uncle",
      email: "ashutosh@gmail.com",
      dob: "2003-02-20",
      password: "12345678",
      roleName:"customer",
      mobileNo:7879834512,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "vijay",
      surname: "thakor",
      middlename: "ganpatBhai",
      email: "vijay@gmail.com",
      dob: "2003-08-16",
      password: "12345678",
      roleName:"customer",
      mobileNo:9698541726,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "dheye",
      surname: "patel",
      middlename: "uncleji",
      email: "dheye@gmail.com",
      dob: "2003-09-23",
      password: "12345678",
      roleName:"customer",
      mobileNo:9898745741,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "kamyab",
      surname: "hussain",
      middlename: "yasir",
      email: "kamyab@gmail.com",
      dob: "2003-07-06",
      password: "12345678",
      roleName:"customer",
      mobileNo:6978454123,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "darshan",
      surname: "parekh",
      middlename: "ashokBhai",
      email: "darshan@gmail.com",
      dob: "2003-04-29",
      password: "12345678",
      roleName:"customer",
      mobileNo:8978451214,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "jeel",
      surname: "patel",
      middlename: "uncleji",
      email: "jeel@gmail.com",
      dob: "2003-02-07",
      password: "12345678",
      roleName:"customer",
      mobileNo:7874874758,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "darshan",
      surname: "panchal",
      middlename: "shaileshbhai",
      email: "darshan@gmail.com",
      dob: "2003-10-19",
      password: "12345678",
      roleName:"customer",
      mobileNo:9698541726,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "shailesh",
      surname: "chaudary",
      middlename: "ramesh",
      email: "shailesh@gmail.com",
      dob: "2003-08-11",
      password: "12345678",
      roleName:"customer",
      mobileNo:6352417845,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface:QueryInterface, Sequelize:typeof DataTypes) {
    return queryInterface.bulkDelete('users',{});
  }
};
