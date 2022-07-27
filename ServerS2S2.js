var http = require('http');
var modulo = require('./moduloprueba');


http.createServer( function(req, res){

	res.writeHead(200, {'Content-Type': 'text/plain'});

	let nombre = modulo.saludo();
	let edad = modulo.edad();

	res.write("Este es una escritura por aparte 1");
	res.write("Este es una escritura por aparte 2");

	res.end("Hola Mundo con NodeJs " + nombre +" "+ edad);

}).listen(8081);