// 비교 연산자
// 동등/일치 비교 연산자
// 동등 비교(==, !=) : 암묵적으로 타입 변환을 통해 타입을 일치 시킨 후 같은 값인지 비교
// 일치 비교(===, !==) : 타입과 같이 모두 일치하는지 비교한다

console.log(`1 == '1' : ${ 1 == "1" }`);
console.log(`1 == true : ${ 1 == true }`);

console.log(`1 == '1' : ${ 1 === '1' }`)
console.log(`1 === true : ${ 1 === true}`);

console.log(`0 == '0' : ${ 0 == '0' }`);
console.log(`0 == false : ${ 0 == false }`);
console.log(`0 == '' : ${ 0 == '' }`);

console.log(`null == undefineded : ${ null == undefined}`);
console.log(`null == undefineded : ${ null === undefined}`);

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${ NaN == NaN }`);
console.log(`NaN == NaN : ${ NaN === NaN }`);
console.log(`Number.isNaN(NaN) : ${ Number.isNaN(NaN)}`);

console.log(`'hello' === 'hello' : ${ 'hello' === 'hello'}`)

console.log(`'apple' < 'banana' : ${ 'apple' < 'banana'}`);