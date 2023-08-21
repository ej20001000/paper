const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('./index.html', (err, data) => {
        response.writeHead(200, {'content-type' : 'text/html'}).end(data);
    });
}).listen(8888, () => console.log('listening on port 8888'));
