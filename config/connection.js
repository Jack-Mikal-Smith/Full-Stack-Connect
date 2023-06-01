const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load the .env file

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
