var http = require('http');
var port = 8081;

http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello from The Server \n');

}).listen(port);

console.log('Server started at port: '+port);