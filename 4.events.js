var events = require('events');

var eventEmitter = new events.EventEmitter();

var connect = function connect() {
    console.log('Connected');

    // Call function
    eventEmitter.emit('readFile', 'file.txt');
};

// Bind function
eventEmitter.on('connect', connect);

var readFile = function readFile(filename) {
    console.log('File read successful: '+filename);
};

// Bind function
eventEmitter.on('readFile', readFile);

// Call function
eventEmitter.emit('connect');

// Output
/*
 Connected
 File read successful: file.txt
 */