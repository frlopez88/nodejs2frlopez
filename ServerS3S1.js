var http = require('http');
var manejoUrl = require('url');
var mysql = require('mysql');


http.createServer(function (req, res) {


	if (req.url === '/favicon.ico') {
	    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
	    res.end();
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

	var sql = "select * from tbl_alumno";

	if (parametros.numero_de_cuenta != undefined ){

		sql =  sql + " where numero_de_cuenta = '"+parametros.numero_de_cuenta+ "'";

	}

 
 	console.log(sql);


  	con.connect(function(err) {
	  if (err) throw err;
	  con.query( sql , function (err, result, fields) {
	    if (err) throw err;
	    res.end(JSON.stringify(result));
	  });
	});


}).listen(8080);