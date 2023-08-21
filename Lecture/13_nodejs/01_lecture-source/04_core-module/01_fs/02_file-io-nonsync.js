const fs = require('fs');

const file = 'io-test.txt';
const data = `안녕하세요
노드js를 활용한 파일 입출력 테스트를 합니다
노드js 너무 재미 있어요
하하핳하`;

fs.writeFile(file, data, err => console.log(err));
// fs.appendFile(file, data, err => console.log(err));

fs.readFile(file, 'utf8', (err, data) => {
    if(err) {
        return console.log(err);
    }

    console.log(data);
});

console.log(`현재 실행중인 파일을 포함한 절대 경로 : ${__filename}`);
console.log(`현재 실행중인 파일의 경로 : ${__dirname}`);