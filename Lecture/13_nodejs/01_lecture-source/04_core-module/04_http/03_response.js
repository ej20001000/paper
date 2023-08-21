const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type' : 'text/html'});
    response.end('<h1>hello world</h1>');
});

server.listen(8888, () => console.log('server listening on port 8888'));