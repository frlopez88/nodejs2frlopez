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

  	// tabla 
  	// accion {insert, select, delete}

  	//?tabla=alumno&accion=insert&numero_de_cuenta=info&nombre=info&correo_electronico=info

  	var parametros =  manejoUrl.parse(req.url, true).query;

  	// switch de tablas
  	switch (parametros.tabla){


  		case "alumno":

  				//inicio switch alumno

  					switch(parametros.accion){

  						case "insert":

  								con.connect(function(err) {
								  if (err) throw err;
								    
								    var sql = "insert into tbl_alumno " +
								               " (numero_de_cuenta, nombre, correo_electronico) "+
								               " values "+
								               " ('"+parametros.numero_de_cuenta+"', '"+parametros.nombre+"', '"+parametros.correo_electronico+"')";
								    
								    con.query(sql, function (err, result) {
								      if (err) throw err;
								      res.end(JSON.stringify(result));
								    });
								  
								  });

  							break;

  						case "select":
  							break;

  						case "delete":
  							break;
  						default:
  							break;
  					}

  				//

  			break;

  		case "libro":
  			break;

  		case "prestamo":
  			break;

  		default:
  			break;


  	}


}).listen(8080);