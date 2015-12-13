var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
    response.sendFile(__dirname+'/extras/uploader.html');
});

app.post('/upload', upload.single('file'), function (req, res) {

    console.log(req.file.name);
    console.log(req.file.path);
    console.log(req.file.type);

    var file = __dirname + "/" + req.file.name;
    fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.file.name
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});