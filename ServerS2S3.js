var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(uc.upperCase("Hola Mundo en Mayuscyulas"));
  res.end();
}).listen(8080);