const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-eng',
  password: 'node-express',
});

module.exports = pool.promise();