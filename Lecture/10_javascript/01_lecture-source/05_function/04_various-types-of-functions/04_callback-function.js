// 콜백 함수
// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수라고 한다.
// 매개변수를 통해 함수의 ㅣ외부에서 콜백 함수를 전달 받는 함수를 고차 함수라고 한다.
// 콜백 함수는 고차 함수에 전달되어 헬퍼 함수의 역할을 한다.
// 즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.

function increase(value) {
    return value + 1;
}

function decrease(value) {
    return --value;
}

function apply(func, value) {
    return func(value);
}

console.log(apply(decrease, 5));
console.log(apply(increase, 5));

console.log(apply((value) => { return value ** 2; }, 5))

console.log([3,2,1,5,4].sort((left, right) => { return right - left; }));