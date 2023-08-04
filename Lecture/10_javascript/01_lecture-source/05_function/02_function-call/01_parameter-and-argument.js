// 매개변수와 인자(인수)

function hello(name) {
    console.log(name);

    console.log(arguments);

    return `${name}님 안녕하세요`;
}

var result = hello('오징어');
console.log(result);

// console.log(name);

result = hello();
console.log(result);

result = hello('오징어', '하하')
console.log(result);

function hi(name = '아무개') {
    return `${name} 안녕~`;
}

console.log(hi());
console.log(hi('용용'));

