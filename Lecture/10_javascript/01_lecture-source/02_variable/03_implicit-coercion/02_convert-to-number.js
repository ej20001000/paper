// 숫자 타입으로 변환

console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'JavaScript');

console.log(10 > '5');

// +단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 암묵적 타입 변환 수행
console.log(+'');
console.log(+'1');
console.log(+'java');
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
// console.log(+Symbol());
console.log(+{});
console.log(+[1,2,3]);
console.log(+function() {});
