const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-eng',
  'root',
  'node-express',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

module.exports = sequelize;
