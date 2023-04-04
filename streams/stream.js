const http = require('http');
const fs = require('fs');

//Read stream
const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
//Write stream
const writeStream = fs.createWriteStream(__dirname + '/write-me.txt');

// readStream.on('data', (chunk) => {
//     console.log('new data recieved');
//     console.log(chunk);
//     writeStream.write(chunk);
// });


//using pipes
readStream.pipe(writeStream);