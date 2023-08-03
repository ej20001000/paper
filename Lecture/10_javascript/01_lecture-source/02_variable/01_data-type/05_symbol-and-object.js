// symbol type
// es6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
// 다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌 위험이 없는 객체의 프로퍼티 키를 만들기 위해 사용한다.

var key = Symbol('key');
console.log(key);
console.log(typeof(key));

// symbol 알아낼 것

// 객체 생성
// var obj = new Object(); 아래와 같다
var obj = {};

obj[key] = 'value';
console.log(obj);

// 자바스크립트는 원시타입과 객체타입으로 분류를 한다.
// 원시 타입 : number, string, boolean, undefinded, null, symbol
// 객체 타입 : 객체, 함수, 배열 (이외에 원시타입 6가지를 제외한 모든 타입은 객체 타입이다.)

