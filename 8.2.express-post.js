var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname+'/extras/post.html');
});

app.post('/submit', urlencodedParser, function (request, response) {

    console.log(request);
    // Prepare output in JSON format
    var json = {
        first_name: request.body.first_name,
        last_name: request.body.last_name
    };
    console.log(json);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(json));
});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

// http://www.tutorialspoint.com/nodejs/nodejs_response_object.htm