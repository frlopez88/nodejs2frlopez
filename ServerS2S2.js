var http = require('http');
//var modulo = require('./moduloprueba');
var manejoUrl = require('url');
var archivos = require('fs');

http.createServer( function(req, res){

	res.writeHead(200, {'Content-Type': 'text/plain'});

	//let nombre = modulo.saludo();
	//let edad = modulo.edad();

	var parametros =  manejoUrl.parse(req.url, true).query;

	if (parametros.pagina = 'Hola'){

		 archivos.readFile('pagina.html', function(err, data) {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write(data);
		    return res.end();
		  });
	}

	if (parametros.pagina = 'mundo'){
		
		archivos.readFile('mundo.html', function(err, data) {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write(data);
		    return res.end();
		  });

	}

	//res.end("Nombre :" + parametros.nombre + " Edad: " + parametros.edad + " Nacionalidad: "+ parametros.nacionalidad );

}).listen(8081);