var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello from NodeJS + Express');
});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

// http://www.tutorialspoint.com/nodejs/nodejs_response_object.htm