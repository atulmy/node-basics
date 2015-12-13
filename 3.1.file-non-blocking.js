var fs = require('fs');

console.log('--- Start ---');
fs.readFile('extras/file.txt', function(error, fileData) {
    if(error) {
        console.log(error.stack);
    } else {
        console.log(fileData.toString());
    }
});
console.log('--- End ---');

// Output
/*
 --- Start ---
 --- End ---
 some content in file.txt
 */