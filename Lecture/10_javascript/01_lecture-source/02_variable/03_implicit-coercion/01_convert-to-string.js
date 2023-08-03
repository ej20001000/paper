// 문자열 타입으로 변환

console.log(10 + '20');

console.log(`10 + 20: ${10 + 20}`);

// 모두 문자열로 변경됨
console.log(1 + '');
console.log(typeof(1 + ''));
console.log(NaN + '');
console.log(Infinity + '');
console.log(true + '');
console.log(null + '');
console.log(undefined + '');
// console.log(Symbol() + '');  TypeError: Cannot convert a Symbol value to a string
console.log({} + '');
console.log([] + ''); // ""
console.log(function() {} + '');
console.log(function() {});

