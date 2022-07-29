var http = require('http');
var manejoUrl = require('url');
var mysql = require('mysql');


http.createServer(function (req, res) {
  
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
    return;
  }


  res.setHeader('Content-Type', 'application/json');

  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password", 
    database : "bd_des_web"
  });

  var parametros =  manejoUrl.parse(req.url, true).query;

  con.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
    var sql = "insert into tbl_persona " +
               " (nombre, apellido, genero) "+
               " values "+
               " ('"+parametros.nombre+"', '"+parametros.apellido+"', '"+parametros.genero+"')";
    
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.end(JSON.stringify(result));
    });
  
  });

  

}).listen(8080);