var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var fileName = 'extras/newfile.txt';

// Write File
fs.writeFile(fileName, 'This is great!', function(error){
    if(!error) {
        console.log('File write successful!');
        eventEmitter.emit('readFile', fileName);
    } else {
        console.log(error.stack);
    }
});

// Read File
var readFile = function readFile(fileName) {
    fs.readFile(fileName, function(error, fileData) {
        if(!error) {
            console.log('File data:');
            console.log(fileData.toString());

            // Delete File
            // fs.unlink(fileName);
        } else {
            console.log(error.stack);
        }
    });
};

eventEmitter.on('readFile', readFile);

// Output
/*
 File write successful!
 File data:
 This is great!
 */

// http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm