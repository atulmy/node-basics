var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname+'/extras/get.html');
})

app.get('/submit', function (request, response) {

    // Prepare output in JSON format
    var json = {
        first_name: request.query.first_name,
        last_name: request.query.last_name
    };
    console.log(json);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(json));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

// http://www.tutorialspoint.com/nodejs/nodejs_response_object.htm