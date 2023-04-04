const http = require('http');
const fs = require('fs');


//send data over a sever
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });

    const person = {
        name: 'fozail',
        email: 'fozail@nasdaq.com',
        job: 'SDE'
    }

    res.end(JSON.stringify(person));
});

console.log('port 3000');
server.listen(3000, '127.0.0.1');