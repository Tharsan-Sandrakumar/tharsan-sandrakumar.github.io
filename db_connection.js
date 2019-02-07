var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "website",
  user: "root",
  password: "toor"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
