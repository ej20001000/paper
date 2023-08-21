const http = require('http');

const server = http.createServer();

server.listen(8888, () => console.log('listening on port 8888'));

setTimeout(() => {
    console.log('server closed');
    server.close();
}, 10000);