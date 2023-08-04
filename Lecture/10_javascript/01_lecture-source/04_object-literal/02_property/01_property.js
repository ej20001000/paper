// 객체는 프로퍼티의 집합이다.
// 프로퍼티는 키와 값으로 구성된다.

var student = {
    name : '유관순',
    age : 16,
    test: 'value'
}

console.log(student);

// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 => 프로퍼티 값에 접근하기 위한 식별자
var obj = {
    normal : 'normal value',
    '@ s p a c e @' : 'space value',
    '' : '', // 권장하지 않음
    0 : 1, // 숫자키는 내부적으로 문자열로 변환된다.
    var : 'var', // 권장하지 않음
    normal : 'new value' // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어 쓴다.
}

console.log(obj);

var key = 'test';

// obj.key = 'test value';
obj['key'] = 'test value';

// console.log(obj.'@ s p a c e @');
console.log(obj['@ s p a c e @']);
console.log(obj);