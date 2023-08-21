const http = require('http');

const server = http.createServer();
server.listen(8888, () => console.log('server listening on 8888'));

server.on('connection', (connection) => {
    console.log('클라이언트 접속');
});

server.on('request', (request) => {
    console.log('클라이언트가 요청을 보냈습니다');
});

server.on('listening', () => {
    console.log('서버가 시작되었습니다.');
});

server.on('close', () => {
    console.log('서버가 종료되었습니다.');
});

setTimeout(() => {
    server.close();
}, 5000);