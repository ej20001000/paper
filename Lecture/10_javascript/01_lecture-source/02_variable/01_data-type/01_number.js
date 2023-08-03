/*
여러 줄로 주석
여러 줄로 작성할 수 있음
*/

// 숫자 타입
// js 정수 실수 구분 x, 모두 숫자로 취급

var integer = 10;
var double = 5.5;
var negative = -10;

console.log(typeof(negative));
console.log(10 === 10.0);
console.log(10 / 4);

// 숫자 타입이 표현할 수 있는 특수한 값
// Infinity : 양의 무한대
// -Infinity : 음의 무한대
// NaN(Not a Number) : 산술 연산 불가

console.log(10 / 0);
console.log(10 / -0);
console.log(1 * '문자열');