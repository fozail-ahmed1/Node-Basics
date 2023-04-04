const http = require('http');
const fs = require('fs');


//send data over a sever
const server = http.createServer((req, res) => {
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/about.html', 'utf-8').pipe(res);
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf-8').pipe(res);
    }
});

console.log('port 3000');
server.listen(3000, '127.0.0.1');