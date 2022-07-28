var mysql = require('mysql');


console.log("Realice Importacion");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a123456b"
});


console.log("Creacion de Conn");

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

console.log("Finalizacion");
