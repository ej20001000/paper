// 논리 타입으로 변환
// 자바스크립트 엔진은 boolean 타입이 아닌 Truthy값(참으로 평가되는 값) 
// 또는 Falsy값(거짓으로 평가되는 값)으로 구분한다
// Truthy -> true, Falsey -> false로 암묵적 타입 변환된다.

if(true) {
    console.log('if(true)');
}

if(false) {
    console.log('if(false)');
}

// Falsey...
if(undefined) {
    console.log('if(undefinded)');
}

if(null) {
    console.log('null');
}

if(0) {
    console.log('0');
}

if(NaN) {
    console.log('NaN');
}

//..Falsey
if('') {
    console.log('');
}

//Truethy
if('javascript') {
    console.log('javascript');
}

// false, undefined, null, 0, NaN, ''(빈문자열)은 Falsey 값이며
// 이 외에 모든 값은 Truthy 값이다.

function test(value) {
    if(value) {
        console.log('hello');
    }
}

// Falsey
test('');