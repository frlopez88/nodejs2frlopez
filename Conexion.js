var mysql = require('mysql');


console.log("Realice Importacion");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password", 
  database : "des_web_1"
});


console.log("Creacion de Conn");

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

console.log("Finalizacion");
