var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8512155Cuong",
  database: "training_5"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {
  connection
}
