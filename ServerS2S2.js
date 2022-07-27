var http = require('http');
//var modulo = require('./moduloprueba');
var manejoUrl = require('url');


http.createServer( function(req, res){

	res.writeHead(200, {'Content-Type': 'text/plain'});

	//let nombre = modulo.saludo();
	//let edad = modulo.edad();

	var parametros =  manejoUrl.parse(req.url, true).query;

	res.end("Nombre :" + parametros.nombre + " Edad: " + parametros.edad + " Nacionalidad: "+ parametros.nacionalidad );

}).listen(8081);