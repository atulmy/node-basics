var fs = require('fs');

console.log('--- Start ---');
var fileData = fs.readFileSync('extras/file.txt');
console.log(fileData.toString());
console.log('--- End ---');

// Output
/*
 --- Start ---
 some content in file.txt
 --- End ---
 */