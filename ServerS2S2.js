var http = require('http');

http.createServer( function(req, res){

	res.writeHead(200, {'Content-Type': 'text/plain'});

	let num1 = 20; 
	let num2 = 100;
	let num3 = num1 + num2;

	console.log(num3);

	res.end("Hola Mundo con NodeJs ");

}).listen(8080);