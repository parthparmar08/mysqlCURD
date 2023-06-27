var mysql = require("mysql");
var dbConfig = require("../config/dbConfig");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("mysql connected successfully!!!");
});

module.exports = connection;
