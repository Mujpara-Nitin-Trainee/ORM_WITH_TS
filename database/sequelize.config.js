require('ts-node/register');
const configs = require('../configs.ts');

module.exports = {
  username: configs.DB_USER,
  password: configs.DB_PASS,
  database: configs.DB_NAME,
  host: configs.DB_HOST,
  dialect: 'mysql',
  port: 3306
};