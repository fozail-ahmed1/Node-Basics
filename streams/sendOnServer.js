const http = require('http');
const fs = require('fs');


//send data over a sever
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    //Read stream
    const readStream = fs.createReadStream(__dirname + '/read-me.txt', 'utf-8');
    readStream.pipe(res);
});

console.log('port 3000');
server.listen(3000, '127.0.0.1');