// 1. 변수 중복 선언 금지
let msg = '안녕하세요';
// let msg = '안녕히가세요';        에러 남
console.log(msg);

// 2. 블록 레벨 스코프
let i = 0;
for(let i = 0; i < 10; i++) {
    console.log('inside: ' + i);
}
console.log(i);

// 3. 변수 호이스팅
let x = 10;
console.log(x);