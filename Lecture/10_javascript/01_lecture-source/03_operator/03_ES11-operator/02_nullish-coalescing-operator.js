// null 병합 연산자
// ES11에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우
// 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.

var test = null ?? '기본값';
console.log(test);

var test2 = null || '기본값';
console.log(test2);

var test3 = 0 ?? '기본값';
console.log(test3);
