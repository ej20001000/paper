// 계산된 프로퍼티 이름
var prefix = 'key';
var index = 0;

var obj = {};

// ES5에서는 객체 리터럴 외부에서 대괄호 표기법을 사용해야 한다.
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;

console.log(obj);

var obj = {
    [`${prefix}-${index++}`]: index,
    [`${prefix}-${index++}`]: index,
    [`${prefix}-${index++}`]: index
}

console.log(obj);